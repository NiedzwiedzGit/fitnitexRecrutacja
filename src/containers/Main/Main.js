import React, { Suspense, Component } from 'react';
import classes from './Main.css';
import { connect } from 'react-redux';
import ImagesBlock from '../../components/ImagesBlock/ImagesBlock';
import Coments from '../../components/Coments/Coments';

import ButtonBootstrap from 'react-bootstrap/Button';

import Button from '../../components/UI/Button/Button';
import NewPost from '../NewPost/NewPost';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/core";
import * as actions from '../../store/actions/index';

import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import asyncAuth from '../../components/ImagesBlock/ImagesBlockContent/ImagesBlockContent';

const override = css`
  position:absolut;
  left:0;
  display: block;
  margin: 20% auto;
  border-color: red;
`;

const postGalery = asyncComponent(() => {
    return import('../../components/ImagesBlock/ImagesBlockContent/ImagesBlockContent');

});
const newsMedia = asyncComponent(() => {
    return import('../NewsMedia/NewsMedia');

});
class Main extends Component {
    state = {
        url: [],
        text: false,
        test: null,
        id: [],
        folderName: 'newposts',
        newsMedia: false
    }
    componentDidMount() {
        this.props.textVar ? console.log("textVar test", this.props.textVar) : console.log("textVar test nooo", this.props.textVar);
        this.props.onfetchComentContent('coment')
    }

    deletePost = (id, imgName, key, folderName) => {
        this.setState({ id: [...this.state.id, key] });

        !folderName ? this.props.onDeletePost(id, imgName, key, this.state.folderName) :
            this.props.onDeletePost(id, imgName, key, folderName)
    }

    updatePostData = (postData) => {
        this.props.onUpdatePostData(postData);
        this.props.onAddNewPost();
    }
    postSelectedHandler = (id, urlArray) => {
        this.props.history.push({ pathname: id });
        // console.log("urlArray ", urlArray)
        this.props.onUrlArray(urlArray);
    }
    onLoadContent = () => {
        let ImgBlock = <CircleLoader
            css={override}
            size={150}
            color={"grey"}
            loading={this.state.waitLoader}
        />;
        if (this.props.postContent !== null) {
            if (this.props.postContent.length !== 0) {
                ImgBlock = this.props.postContent.map((res, index) => {

                    console.log('split ', res.url.split(","))
                    return (<ImagesBlock

                        auth={this.props.isAuthenticated}
                        close={this.state.id.includes(res.key) ? 'Close' : null}
                        key={index}
                        url={res.url}
                        paralaxUrl={res.url}
                        page="Main"
                        text={res.textField}
                        numOfElement={index}
                        architecture={res.architecture}
                        photographs={res.photographs}
                        describeData={res.describeData}
                        locationCountry={res.location}
                        year={res.year}
                        id={res.key}
                        imageName={res.imgName}
                        clicked={() => this.deletePost(res.id, res.imgName, res.key)}
                        clickedUpdate={() => this.updatePostData(res)}
                        clickedOn={() => this.postSelectedHandler(res.key, res.url.split(","))}
                    />)
                });
                console.log(ImgBlock);
            }
        } else { return null };

        return ImgBlock;
    }
    onLoadComent = () => {
        let folderName = "coment"

        console.log("[comentVar] ", this.props.comentVar)
        let ImgBlock = <CircleLoader
            css={override}
            size={150}
            color={"grey"}
            loading={this.state.waitLoader}
        />;
        if (this.props.comentVar !== null) {
            if (this.props.comentVar.length !== 0) {

                ImgBlock = this.props.comentVar.map((res, index) => {
                    console.log('split ', res.url.split(","))
                    console.log('split res', res)

                    return <Coments
                        auth={this.props.isAuthenticated}
                        close={this.state.id.includes(res.key) ? 'Close' : null}
                        key={index}
                        url={res.url}
                        name={res.photographs}
                        page="coment"
                        text={res.textField}
                        id={res.key}
                        clicked={() => this.deletePost(res.id, res.imgName, res.key, folderName)}
                        clickedUpdate={() => this.updatePostData(res)}
                        clickedOn={() => this.postSelectedHandler(res.key, res.url.split(","))}
                    />
                });
                console.log(ImgBlock);
            }
        } else { return null };

        return ImgBlock;
    }
    closeHandler = () => {
        this.props.onAddNewPost();
        this.props.updateHandler ? this.props.onUpdatePostData() : null;
    }
    comentsHandler = () => {
        this.props.onAddNewPost();
        this.setState({ folderName: 'coment', newsMedia: true });

    }
    newPost = () => {
        this.props.onAddNewPost();
        this.setState({ folderName: 'newposts', newsMedia: false });

    }
    render() {
        console.log(this.state.id)
        let addContentBtn = <Button
            btnType={!this.props.addNewPostContainer ? "Add" : "Close"}
            clicked={this.newPost} />

        return (

            <div className={classes.Main} >
                {this.props.isAuthenticated ? addContentBtn : null}
                {this.props.addNewPostContainer && !this.props.loading ? <NewPost
                    newsMedia={this.state.newsMedia}
                    field={'photographs textField'}
                    folderName={this.state.folderName}
                /> : null}
                {this.props.addNewPostContainer ? <Backdrop
                    show={this.props.addNewPostContainer}
                    clicked={this.closeHandler} /> : null}
                <Suspense fallback={<div>loading</div>}>

                    {this.onLoadContent()}
                    <ButtonBootstrap variant="danger"
                        onClick={this.comentsHandler}
                    >Zostaw Komentarz</ButtonBootstrap>
                    <br />
                    <br />
                    <div>
                        {this.onLoadComent()}
                    </div>
                </Suspense>
                <Switch>
                    {/* <Route path={'/prasa'} exact component={newsMedia} /> */}

                    <Route path={'/:id'} component={postGalery} />
                    {/* <Redirect to="/" /> */}
                </Switch>

            </div >
        );
    };
};


const mapStateToProps = state => {
    return {
        postContent: state.main.postContent,
        loadingNewPost: state.newpost.loading,
        addNewPostContainer: state.newpost.addNewPostContainer,
        loadingContent: state.main.loading,
        updateHandler: state.newpost.updateHandler,
        comentVar: state.main.comentVar,
        isAuthenticated: state.auth.token !== null

    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchContent: () => dispatch(actions.fetchMainContent()),
        // onFetchPostContent: () => dispatch(actions.fetchPostContent()),
        onDeletePost: (id, imgName, key, folderName) => dispatch(actions.deletePost(id, imgName, key, folderName)),
        onAddNewPost: () => dispatch(actions.addNewPostContainer()),
        onUpdatePostData: (postData) => dispatch(actions.updatePostData(postData)),
        onUrlArray: (urlArray) => dispatch(actions.getUrlArray(urlArray)),
        onfetchComentContent: (postData) => dispatch(actions.fetchComentContent(postData))

    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
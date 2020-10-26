export { addHeaderItem } from './header';

export {
    fetchMainContent,
    fetchPostContent,
    fetchNewsMediaContent,
    fetchTextContent,
    fetchComentContent,
    deletePost,
    getUrlArray

} from './main';


export {
    addNewPost,
    animateSuccesErrorButton,
    addNewPostContainer,
    updatePostData,
    // addNewNewsMediaContainer,
    // updateNewsMediaData
} from './newpost';

export {
    auth,
    logout,
    setAuthRedirectPath,
    authCheckState,
    logoutSucceed,
    authStart,
    authSuccess,
    authFail,
    checkAuthTimeout
} from './auth';
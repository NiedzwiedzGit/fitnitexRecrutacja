import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ButtonBootstrap from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import classes from './ImagesBlock.css';
import { Doughnut } from 'react-chartjs-2';
import ImagesBlockContent from '../../components/ImagesBlock/ImagesBlockContent/ImagesBlockContent';
import { ParallaxBanner } from 'react-scroll-parallax';
class ImagesBlock extends Component {
    componentDidMount() {
        console.log(this.props.numOfElement);
    }

    // clickHandler = () => {
    //     console.log("clickHandler ImgB ", this.props.urlSplit);

    //     <ImagesBlockContent
    //         urlTest={this.props.urlSplit}
    //     />
    //     return (this.props.clickedOn,)
    // }
    render() {
        let content = null;
        let helpContent = null;
        let imageVar = (
            <div className={classes.ImagesBlockPicture} >
                <img
                    src={this.props.url}
                    onClick={this.props.clickedOn}
                    alt="MyBurger" />
            </div>
        );
        let paralaxBlock = (
            <div className={classes.ParalaxBlockPicture} >
                <ParallaxBanner
                    className="your-class"
                    layers={[
                        {
                            image: this.props.url,
                            amount: 0.9,
                        }
                    ]}
                    style={{
                        height: '500px',
                    }}
                >
                </ParallaxBanner>
                {/* <Parallax className="custom-class" y={[-200, 50]} x={[-500, 80]} tagOuter="figure">
                    <img
                        src={this.props.url}
                        onClick={this.props.clickedOn}
                        alt="" />
                </Parallax> */}
            </div>
        );
        switch (this.props.page) {
            case 'NewsMedia':
                content = (
                    <div className={classes.ImagesBlockText}>
                        <p> <strong>Description</strong>:  {this.props.describeData} </p>
                        <p><strong>URL</strong>: <a href={this.props.webAddress}>{this.props.webAddress}</a></p>
                    </div>)

                break;
            case 'Main':
                imageVar = null;
                if (this.props.numOfElement == 0) {
                    content = (
                        <div className={classes.ImagesBlockTextOpenPage}>
                            <div className={classes.ImagesBlockOpenPageBlock}>

                                <p className={classes.TextAreaOpenPage}>{this.props.text}</p>
                            </div>

                            <div className={classes.PopularBlockWraper}>
                                <div className={[classes.PopularBlock, classes.b1].join(' ')}>7 TRIKÓW NA PŁASKI BRZUCH</div>
                                <div className={[classes.PopularBlock, classes.b2].join(' ')}>9 TRENDÓW ZDROWEGO ŻYWIENIA</div>
                                <div className={[classes.PopularBlock, classes.b3].join(' ')}>JAK ROZPOCZĄĆ DIETĘ</div>
                            </div>
                            {/* <p> <strong>Architects</strong>: {this.props.architecture} </p>
                        <p><strong>Location</strong>: {this.props.locationCountry}</p>
                        <p><strong>Year</strong>: {this.props.year}</p>
                        <p><strong>Photographs</strong>: {this.props.photographs}</p> */}

                        </div>);
                    imageVar = (
                        <div className={classes.ImagesBlockPicture} >
                            <img
                                src="../../assets//images/bottle.svg"
                                // onClick={this.props.clickedOn}
                                alt="" />
                        </div>);
                    paralaxBlock = null;
                } else if (this.props.numOfElement == 3) {
                    content = (
                        <div className={classes.ImagesBlockText}>
                            <h2 className={classes.TextAreaTitle}> {this.props.architecture}</h2>
                            <h className={classes.TextArea}>{this.props.text}</h>
                            <h className={classes.TextArea}>Stosowanie innych, dostępnych na rynku preparatów odchudzających niesie
                                za sobą całe mnóstwo negatywnych skutków ubocznych.
                                Miej na uwadze, że wyłącznie naturalne substancje nie są w stanie zaszkodzić Twojemu organizmowi.
                                Zażywanie receptury z Pu-erh daje efekty szybsze o 94,7% oraz gwarantuje w 100% zdrowe, trwałe i bezpieczne odchudzanie.
                                Preparat zawiera proszek ze specjalnie wyselekcjonowanymi mikrocząsteczkami katechin pozyskiwanych z liści – proces produkcji
                            receptury posiada status ściśle chronionej i został opatentowany przez producenta.</h>
                            <div className={classes.ImagesBlockOpenPageBlock2}>
                                <p className={classes.TextAreaOpenPage}>{this.props.describeData}</p>
                            </div>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>FitNitex®</th>
                                        <th>Zwykła herbata na odchudzanie</th>
                                        <th>Zabieg liposukcji</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td className={classes.ImagesBlockTableImg} ></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Cena</td>
                                        <td className={classes.ImagesBlockTableCellGreen}>Preferencyjna cena</td>
                                        <td>Ok. 30 zł za 15 torebek
</td>
                                        <td>Od 5 tys. zł do 10 tys. zł</td>
                                    </tr>
                                    <tr>
                                        <td>Zasady działania</td>
                                        <td className={classes.ImagesBlockTableCellGreen}>Trójetapowe działanie:
                            I etap – przygotowawczy
                            II etap – zasadniczy
                            III etap – utrwalający
</td>
                                        <td>Jednoetapowe działanie:
                            Krótkotrwałe zmniejszenie uczucia łaknienia.
</td>
                                        <td>Ingerencja chirurgiczna polegająca na usunięciu tłuszczu. Wiążę się z koniecznością noszenia odzieży uciskowej przez min. 2 miesiące po zabiegu. Ponadto, w okresie rekonwalescencji należy przestrzegać rygorystycznej diety.</td>
                                    </tr>
                                    <tr>
                                        <td>Skutki uboczne </td>
                                        <td className={classes.ImagesBlockTableCellGreen}>Brak</td>
                                        <td>Nadmierne spożywanie parzonych herbat prowadzi do zatruć pokarmowych oraz reakcji alergicznych.</td>
                                        <td>Blizny, dolegliwości bólowe, przyrost masy w okresie pooperacyjnym, nieprawidłowy kontur ciała, brak równowagi płynów w organizmie.</td>
                                    </tr>
                                    <tr>
                                        <td>Dawkowanie</td>
                                        <td className={classes.ImagesBlockTableCellGreen}>1 skondensowana dawka dziennie.</td>
                                        <td>Aby uzyskać stężenie substancji czynnych, porównywalne do 1 dawki FitNitex trzeba wypić 30 filiżanek zwykłej herbaty.</td>
                                        <td>Nie dotyczy</td>
                                    </tr>
                                    <tr>
                                        <td>Informacje dodatkowe</td>
                                        <td className={classes.ImagesBlockTableCellGreen}>W 100% naturalne i bezpieczne dla zdrowia ekstrakty pochodzenia roślinnego. Niezbędna uwaga! Do wyprodukowania jednej skondensowanej dawki FitNitex wykorzystano aż 10 kg suszu z pu-erh. </td>
                                        <td>Ścinki pochodzenia roślinnego z dodatkiem środków chemicznych, poddane obróbce.</td>
                                        <td>Bardzo często wymagane jest powtórzenie tego typu zabiegów.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <br />
                            <h className={[classes.TextArea, classes.TextAreaAdded].join(' ')}>Stosowanie innych, dostępnych na rynku preparatów odchudzających niesie
                            za sobą całe mnóstwo negatywnych skutków ubocznych.
                            Miej na uwadze, że wyłącznie naturalne substancje nie są w stanie zaszkodzić Twojemu organizmowi.
                            Zażywanie receptury z Pu-erh daje efekty szybsze o 94,7% oraz gwarantuje w 100% zdrowe, trwałe i bezpieczne odchudzanie.
                            Preparat zawiera proszek ze specjalnie wyselekcjonowanymi mikrocząsteczkami katechin pozyskiwanych z liści – proces produkcji
                            receptury posiada status ściśle chronionej i został opatentowany przez producenta.</h>

                        </div>);
                } else if (this.props.numOfElement == 5) {
                    const data = {
                        labels: ['1 tydzień – wydalenie złogów z jelit, całkowite oczyszczenie organizmu, eliminacja wilczego apetytu,  nawet 4 kg mniej ',
                            '2 tydzień – aktywna redukcja tkanki tłuszczowej, przyspieszenie metabolizmu, 4-krotnie szybsze spalanie kalorii, spadek wagi o ok. 7 kg',
                            '3 tydzień – samoczynne spalanie tkanki tłuszczowej, regulacja poziomu cholesterolu i cukrów, 7 razy więcej energii, ok. 6 kg mniej',
                            '4 tydzień – unormowanie ciśnienia, wzmocnienie układu odpornościowego, dożywotnie utrwalenie efektów odchudzania oraz zablokowanie efektu jo-jo, spadek o ok. 3 kg (łącznie do 21 kg w miesiąc!)'],
                        datasets: [
                            {
                                label: '# of Votes',
                                data: [4, 7, 6, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)',
                                    'rgba(54, 162, 235, 0.5)',
                                    'rgba(255, 206, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.5)'
                                ],
                                borderWidth: 1,
                            },
                        ],
                    };
                    content = < Doughnut
                        data={data}
                        width={100}
                        height={50} />;
                    helpContent = (
                        <div>
                            <h2 className={classes.TextAreaTitle}>100% oczyszczenie organizmu
                        </h2><svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <h2 className={classes.TextAreaTitle}>Intensywna redukcja tkanki tłuszczowej
                            </h2>
                            <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <h2 className={classes.TextAreaTitle}>Trwały spadek poziomu cholesterolu
                            </h2>
                            <svg width="10em" height="10em" viewBox="0 0 16 16" class="bi bi-chevron-double-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <h2 className={classes.TextAreaTitle}>Skuteczne utrwalenie efektów odchudzania
                            </h2><br />
                        </div>
                    )

                } else if (this.props.numOfElement == 7) {
                    content = (
                        <div>
                            <a href=""> <ButtonBootstrap variant="primary">Kliknij tutaj, aby otrzymać refundowaną kurację i schudnąć 21 kg w 1 miesiąc</ButtonBootstrap></a>
                            <br />
                            <h className={classes.TextArea}>Specjalna promocja tylko do 24/02/2020
</h><br />

                            <h2 className={classes.TextAreaTitelComent}> KOMENTARZE</h2>
                            <h className={classes.TextArea}>Czytaj komentarze do artykułu: „Ta metoda automatycznie odchudza…” </h>

                        </div>
                    )
                    paralaxBlock = null;
                } else {
                    content = (
                        <div className={classes.ImagesBlockText}>
                            <h2 className={classes.TextAreaTitel}> {this.props.architecture}</h2>

                            <h className={classes.TextArea}>{this.props.text}</h>

                        </div>);
                    imageVar = null;
                }

                break;
            case 'Info':
            case 'Histories':
            case 'Clients':
                imageVar = null;
                this.props.webAddress == null ?
                    content = (
                        <div className={classes.ImagesBlockText}>
                            <p className={classes.TextArea}>{this.props.text}</p>
                        </div>) :
                    content = (
                        <div className={classes.ImagesBlockText}>
                            <p className={classes.TextArea}>{this.props.text}</p>
                            <p><a href={this.props.webAddress}>{this.props.webAddress}</a></p>
                        </div>)

                break;

        }
        return (

            <div className={[classes.ImagesBlock, classes[this.props.close]].join(' ')} >
                <div className={classes.ImagesBlockLine}></div>
                {imageVar}
                <br />
                {
                    this.props.auth ? <div className={classes.ImagesBlockBtnSwipe}>
                        <ButtonBootstrap variant="outline-danger" onClick={this.props.clicked}>Remove</ButtonBootstrap>
                        <ButtonBootstrap variant="outline-primary" onClick={this.props.clickedUpdate}>Update</ButtonBootstrap>
                    </div > : null
                }
                {helpContent}
                {content}

                {paralaxBlock}

            </div >
        );
    }

};

export default ImagesBlock;
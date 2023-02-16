import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactMarkdown from 'react-markdown';


//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_DIGITAL_PLATAFORMS } from '../../graphql/queries';


export default function DigitalPlataforms() {

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [modalData, setModalData] = useState({});

    const { data, loading, error } = useQuery(GET_DIGITAL_PLATAFORMS);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.plataformaDigital.data.attributes
    const title = attr.plataformaDigital.title;
    const description = attr.plataformaDigital.description;

    const handleShow = () => {
        setShow(true)
    }

    const getAllData = (data) => {
        setModalData(data)
    }


    return (
        <>

            <div className="container digitalPlataformsContentWrap">
                <div className="row">
                    <h2 className="defaultTitle">{title}</h2>
                    <p className="defaultSubtitle">{description}</p>
                </div>

                <div className="row digitalPlataformsContent">

                    <div className="row digitalPlataformsContent">

                        <div className="col-lg-12 align-center">
                            <img src={`${process.env.STRAPI_URL}${attr.singleFeature.data.attributes.url}`} width={400} />
                        </div>

                        {attr.funcionalidades.map((data, index) => {
                            return (
                                <>
                                    <div key={index} className="col-lg-3 align-center funcionalidadesDigitalPlataforms">
                                        <img src={`${process.env.STRAPI_URL}${data.icon.data.attributes.url}`} width={77} />
                                        <h2>{data.title}</h2>
                                        <span>{data.description}</span>


                                        <button className="btnVerMaisDigital" onClick={() => {
                                            handleShow();
                                            getAllData(data)
                                        }}>ver mais</button>
                                    </div>
                                    <Modal
                                        size="lg"
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header className="modalHeader" closeButton><h5>{modalData.title}</h5></Modal.Header>
                                        <Modal.Body className="modalBody">
                                            <ReactMarkdown>{modalData.content}</ReactMarkdown>
                                        </Modal.Body>
                                    </Modal>
                                </>
                            )
                        })}



                    </div>

                </div>

            </div>
        </>
    );





















































































    // return (
    //     <>

    //         <div className="container digitalPlataformsContentWrap">
    //             <div className="row">
    //                 <h2 className="defaultTitle">{title}</h2>
    //                 <p className="defaultSubtitle">{description}</p>
    //             </div>

    //             <div className="row digitalPlataformsContent">

    //                 <div className="row digitalPlataformsContent">


    //                     <div className="col-lg-3 align-center funcionalidadesDigitalPlataforms" onClick={() => {
    //                         handleShow();
    //                         getAllData(data)
    //                     }}>
    //                         <img src={`${process.env.STRAPI_URL}${attr.funcionalidades[0].icon.data.attributes.url}`} width={77} />
    //                         <h2>{attr.funcionalidades[0].title}</h2>
    //                         <span>{attr.funcionalidades[0].description}</span>
    //                     </div>
    //                     <Modal
    //                         size="lg"
    //                         show={show}
    //                         onHide={handleClose}
    //                         backdrop="static"
    //                         keyboard={false}
    //                     >
    //                         <Modal.Header className="modalHeader" closeButton><h5>{attr.funcionalidades[0].title}</h5></Modal.Header>
    //                         <Modal.Body className="modalBody"> <p>{attr.funcionalidades[0].content}</p></Modal.Body>
    //                     </Modal>









    //                     <div className="col-lg-6 align-center">
    //                         <img src={`${process.env.STRAPI_URL}${attr.singleFeature.data.attributes.url}`} width={400} />
    //                     </div>



    //                     <div className="col-lg-3 align-center" onClick={() => {
    //                         handleShow();
    //                         getAllData(data)
    //                     }}>
    //                         <img src={`${process.env.STRAPI_URL}${attr.funcionalidades[1].icon.data.attributes.url}`} width={77} />
    //                         <h2>{attr.funcionalidades[1].title}</h2>
    //                         <span>{attr.funcionalidades[1].description}</span>
    //                     </div>
    //                     <Modal
    //                         size="lg"
    //                         show={show}
    //                         onHide={handleClose}
    //                         backdrop="static"
    //                         keyboard={false}
    //                     >
    //                         <Modal.Header className="modalHeader" closeButton><h5>{attr.funcionalidades[0].title}</h5></Modal.Header>
    //                         <Modal.Body className="modalBody"> <p>{attr.funcionalidades[0].content}</p></Modal.Body>
    //                     </Modal>





    //                     <div className="col-lg-3 align-center">
    //                         <img src={`${process.env.STRAPI_URL}${attr.funcionalidades[2].icon.data.attributes.url}`} width={77} />
    //                         <h2>{attr.funcionalidades[2].title}</h2>
    //                         <span>{attr.funcionalidades[2].description}</span>
    //                     </div>

    //                     <div className="col-lg-3 align-center">
    //                         <img src={`${process.env.STRAPI_URL}${attr.funcionalidades[3].icon.data.attributes.url}`} width={77} />
    //                         <h2>{attr.funcionalidades[3].title}</h2>
    //                         <span>{attr.funcionalidades[3].description}</span>
    //                     </div>

    //                     <div className="col-lg-3 align-center">
    //                         <img src={`${process.env.STRAPI_URL}${attr.funcionalidades[4].icon.data.attributes.url}`} width={77} />
    //                         <h2>{attr.funcionalidades[4].title}</h2>
    //                         <span>{attr.funcionalidades[4].description}</span>
    //                     </div>

    //                 </div>

    //             </div>

    //         </div>
    //     </>
    // );
}


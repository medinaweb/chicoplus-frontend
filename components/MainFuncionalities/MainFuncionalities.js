import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactMarkdown from 'react-markdown';

//Apolo Client
import { useQuery } from '@apollo/client';


import { GET_FUNCIONALITIES } from '../../graphql/queries';


function MainFuncionalities() {

     //modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const [modalData, setModalData] = useState({});

    const { data, loading, error } = useQuery(GET_FUNCIONALITIES);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.principaisFuncionalidade.data.attributes;
    const title = attr.title.title;
    const description = attr.title.description;

    const handleShow = () => {
        setShow(true)
    }

    const getAllData = (data) => {
        setModalData(data)
        console.log(data);
    }


    return (
        <>

            <div className="container mainFuncionalitiesContentWrap">
                <div className="row">
                    <h2 className="defaultTitle">{title}</h2>
                    <p className="defaultSubtitle">{description}</p>
                </div>

                <div className="pb-60 mainFuncionalitiesContent">
                    <div className="container">
                        <div className="row justify-content-center">

                            {attr.funcionalidades.map((data) => {
                                return (
                                    <>
                                        <div key={data.id} className="col-lg-4 col-sm-6 cursorPointer" onClick={() => {
                                            handleShow();
                                            getAllData(data)
                                        }}>
                                            <div className="service-card-one white-bg text-center">
                                                <img width={100} src={`${process.env.STRAPI_URL}${data.imagem.data.attributes.url}`} alt={''} />
                                                <h3>
                                                    <a>{data.title} </a>
                                                </h3>
                                                <p>{data.description}</p>
                                            </div>

                                        </div>
                                        <Modal
                                            size="lg"
                                            show={show}
                                            onHide={handleClose}
                                            backdrop="static"
                                            keyboard={false}
                                        >
                                            <Modal.Header className="modalHeader" closeButton><h5>{modalData.title}</h5></Modal.Header>
                                            <Modal.Body className="modalBody"> <ReactMarkdown>{modalData.content}</ReactMarkdown></Modal.Body>
                                        </Modal>

                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
}


export default MainFuncionalities;
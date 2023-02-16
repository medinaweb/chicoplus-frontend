import React, { Component } from 'react';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_REPORTS_DOCUMENTS } from '../../graphql/queries';


function ReportsAndDocuments() {

    const { data, loading, error } = useQuery(GET_REPORTS_DOCUMENTS);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.producaoDeRelatoriosEDocumento.data.attributes
    const title = attr.producaoRelatorios.title;
    const description = attr.producaoRelatorios.description;

    const featureImage = attr.featureImage.data.attributes.url;


    return (
        <>
            <div className="container reportsAndDocumentsWrap">
                <div className="row">
                    <h2 className="defaultTitle reportsAndDocumentsTitle">{title}</h2>
                    <p className="defaultSubtitle">{description}</p>
                </div>

                <div className="pb-60 reportsAndDocumentsContent">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-6 listOptions">
                                <ul>

                                    {attr.listItems.map((data) => {

                                        return (
                                            <li
                                                key={data.id}> {data.available == "Sim" ? <i className="icofont-check-circled"></i> : <i className="icofont-close-circled"></i>}{data.title}
                                            </li>
                                        )

                                    })}

                                </ul>
                            </div>

                            <div className="col-lg-6">

                                <img src={`${process.env.STRAPI_URL}${featureImage}`} />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ReportsAndDocuments;
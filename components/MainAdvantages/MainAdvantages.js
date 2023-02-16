import React, { Component } from 'react';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { MAIN_ADVANTAGES } from '../../graphql/queries';


function MainAdvantages() {

    const { data, loading, error } = useQuery(MAIN_ADVANTAGES);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.principaisVantage.data.attributes
    const title = attr.title.title;
    const description = attr.title.description;

    const featureImage = attr.featureImage.data.attributes.url;


    return (
        <>
            <div className="container MainAdvantagesWrap">
                <div className="row">
                    <h2 className="defaultTitle MainAdvantages">{title} </h2>
                    <p className="defaultSubtitle">{description}</p>
                </div>

                <div className="pb-60 MainAdvantagesContent">
                    <div className="container">
                        <div className="row justify-content-center flexStyle">

                            <div className="col-lg-6 mainAdvantageslistOptions">
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
                            <img src={`${process.env.STRAPI_URL}${featureImage}`} width={500} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default MainAdvantages;
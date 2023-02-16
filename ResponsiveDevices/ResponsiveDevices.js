import React, { Component } from 'react';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { OPERATING_SYSTEMS } from '../graphql/queries';


function ResponsiveDevices() {

    const { data, loading, error} = useQuery(OPERATING_SYSTEMS);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.sistemasOperativo.data.attributes
    const title = attr.operatingSystems.title;
    const description = attr.operatingSystems.description;

    const featureImage = attr.featureImage.data.attributes.url;


    return (
        <>
            <div className="container responsiveDevicesContentWrap">
                <div className="row">
                    <h2 className="defaultTitle">{title}</h2>
                    <p className="defaultSubtitle">{description}</p>
                </div>

                <div className="pb-60 responsiveDevicesContent">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-6 listOptions tabletAndTelephoneContent tabletAndTelephoneLi computerContent">
                                <ul className="tabletAndTelephone">
                                    {attr.listItems.map((data => {
                                        return (
                                            <li
                                                key={data.id}> {data.available == "Sim" ? <i className="icofont-check-circled"></i> : <i className="icofont-close-circled"></i>}<span>{data.title}</span>
                                                <p>{data.description}</p>
                                            </li>
                                        )
                                    }))}
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


export default ResponsiveDevices;
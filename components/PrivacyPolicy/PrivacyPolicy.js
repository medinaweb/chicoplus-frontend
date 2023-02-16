import React from 'react';
import ReactMarkdown from 'react-markdown';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_PRIVACY_POLICY } from '../../graphql/queries';



function PrivacyPolicy() {


    const { data, loading, error } = useQuery(GET_PRIVACY_POLICY);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.politicaDePrivacidade.data.attributes
    const title = attr.privacyPolicy.title;
    const description = attr.privacyPolicy.content;

    console.log(attr)

    return (
        <>
            <section className="about-area ptb-100 bg-f9f6f6">
                <div className="container">

                    <div className="row align-items-center aboutUsgContent bgcolor1">

                        <div className="col-lg-12 col-md-12">
                            <div className="about-content about-content-two">
                                <div className="about-text">
                                    <h4 className="defaultTitle custonPagesTitle">{title}</h4>
                                        <ReactMarkdown>{description}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


        </>
    )
}



export default PrivacyPolicy

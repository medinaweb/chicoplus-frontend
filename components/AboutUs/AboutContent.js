import React, { Component } from 'react';
import { toast } from 'react-toastify';


//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_ABOUTUS } from '../../graphql/queries';


function AboutContent() {

    const { data, loading, error } = useQuery(GET_ABOUTUS);

    if (loading) { return true }
    if (error) { return false }


    const attr = data.sobreNo.data.attributes
    const mainImage = attr.image.data.attributes.url

    return (
        <>
            <section className="about-area ptb-100 bg-f9f6f6 aboutUsgWrap">
                <div className="container">

                    <div className="row align-items-center aboutUsgContent bgcolor0">
                        <div className="col-lg-4 col-md-12">
                            <div className="about-image">
                                <img layout="fill" src={`${process.env.STRAPI_URL}${mainImage}`} alt={''} />
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="about-content about-content-two">
                                <div className="about-text">
                                    <h3>{attr.title}</h3>
                                    <p> {attr.content} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center aboutUsgContent bgcolor1">

                        {attr.titleContentAbout.map(data => {
                            return (
                                <>
                                    <div className="col-lg-6 col-md-12 contentAboutList">
                                        <div className="about-content ">
                                            <div className="about-text">
                                                <h5>{data.title}</h5>
                                                <p className="aboutContentP">{data.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                    </div>

                </div>

                <div className="row align-items-center aboutUsgContent bgcolor3">

                    <div className="col-lg-12 col-md-12">
                        <div className="about-content">

                            <div className="about-text">
                                <p> {attr.contentAbout} </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}


export default AboutContent;
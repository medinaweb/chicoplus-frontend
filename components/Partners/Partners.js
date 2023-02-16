
import React, { Component } from "react";
import Slider from "react-slick";

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { PARTNERS } from '../../graphql/queries';

import Link from "next/link";


export default function Partner() {

    const { data, loading, error} = useQuery(PARTNERS);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.parceiro.data.attributes
    const title = attr.title.title;
    const description = attr.title.description;
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (

        <div className="container partnersContentWrap">
            <div className="row partnersContentWrapContent">
                <h2 className="defaultTitle reportsAndDocumentsTitle">{title}</h2>
                <p className="defaultSubtitle">{description}</p>
            </div>
            <div className="row">
                <Slider {...settings}>

                    {attr.partners.map((data) => {
                        return (

                            <div key={data.id} className="parceiro">
                                <Link href={data.link}>
                                    <img src={`${process.env.STRAPI_URL}${data.logo.data.attributes.url}`} width={150} />
                                </Link>
                            </div>

                        )
                    })}

                </Slider>
            </div>
        </div >
    );
}

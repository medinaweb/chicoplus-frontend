import React from 'react';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from '@mui/material';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { TESTEMONIES } from '../../graphql/queries';

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


export default function Testemonies() {

    const { data, loading, error} = useQuery(TESTEMONIES);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.testemunho.data.attributes
    const title = attr.title.title;
    const description = attr.title.description;

    return (
        <div className="container testemoniesWrap" >
            <div className="row">
                <h2 className="defaultTitle ">{title}</h2>
                <p className="defaultSubtitle">{description}</p>
            </div>

            <div className="row testimonial">
                <div className="col-lg-8 testimonialContent">
                    <Slider {...settings}>
                        {attr.testemonies.map((data) => {
                            return (
                                <div key={data.id} className="row">
                                    <div className="cardContent">
                                        <Avatar src={`${process.env.STRAPI_URL}${data.foto.data.attributes.url}`} className="avatar" sx={{ width: 100, height: 100 }} />
                                        <p> {data.message} </p>

                                        <p className="testimonialInfo">
                                            <span className="personName">{data.name} | </span>
                                            {data.profissao}
                                        </p>

                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );

}

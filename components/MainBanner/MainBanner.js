import React, { Component } from 'react';
import Link from 'next/link';


import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_BANNER } from '../../graphql/queries';


function MainBanner() {

    const { data, loading, error } = useQuery(GET_BANNER);


    if (loading) { return true }
    if (error) { return false }

    const attr = data.banner.data.attributes;
    const slides = attr.carousel.slides.data;
    const result = data.banner.data.attributes;
    const saibaMais = data.banner.data.attributes.btnLink;
    const bgCover = process.env.STRAPI_URL + attr.bgcover.data.attributes.url;

    return (
        <>
            <div className="container-fluid main-banner" style={{ backgroundImage: `url(${bgCover})`}}>

                <div className="row mainBannerWrap">
                    <div className="col-lg-7 contentBanner">
                        <div className="main-banner-content">
                            <h3>{result.title}</h3>
                            <p className="bannerDescription">{result.description}</p>

                            <Link href={saibaMais}>
                                <a className="btn btn-saibamais">Saiba mais...</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 bannerContentSlides">

                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {Array.from(slides).map((slide, index) => {
                                return (
                                    <div key={index} className="slidesBanner">
                                        <SwiperSlide>
                                            <img layout="fill" src={`${process.env.STRAPI_URL}${slide.attributes.url}`} alt={''} />
                                        </SwiperSlide>
                                    </div>
                                );
                            })}
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner
import React from 'react';
import Link from 'next/link';


//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_RODAPE } from '../../graphql/queries';


function Footer() {


    const { data, loading, error } = useQuery(GET_RODAPE);

    if (loading) { return true }
    if (error) { return false }

    const attr = data.rodaPe.data.attributes

    let currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src={`${process.env.STRAPI_URL}${attr.logo.data.attributes.url}`} width={140} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="social-links">
                                    {attr.socialMedia.map((media) => {
                                        return (
                                            <>
                                                <a href={media.url} target='_blank'>
                                                    <img className="socialMedia" layout="fill" src={`${process.env.STRAPI_URL}${media.icon.data.attributes.url}`} alt={''} width={40} />
                                                </a>
                                            </>
                                        )
                                    })}

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget ml-4 pl-5">
                                <h3>Links Úteis</h3>

                                <ul className="list footerItems">

                                    {attr.linksUteis.map((link) => {
                                        return (
                                            <>
                                                <li>
                                                    <Link href={link.url}>
                                                        <a>{link.name}</a>
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget ml-4">
                                <h3>Menu</h3>

                                <ul className="list footerItems">

                                    {attr.menu.map(item => {
                                        return (
                                            <>
                                                <li>
                                                    <Link href={item.url}>
                                                        <a>{item.name}</a>
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Nossos Contatos</h3>

                                <ul className="get-in-touch footerItems">
                                    <li>
                                        <i className="icofont-home"></i>
                                        <a href="#">{attr.contact.endereco}</a>
                                    </li>
                                    <li>
                                        <i className="icofont-live-support"></i>
                                        <a href="#">{attr.contact.telefone}</a>
                                    </li>
                                    <li>
                                        <i className="icofont-envelope"></i>
                                        <a href="#">{attr.contact.email}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <p>Copyright &copy; {currentYear} Chicoplus. All Rights Reserved. Designed By <a href="https://divulgali.com" target="_blank">Divulgali</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
}


export default Footer;

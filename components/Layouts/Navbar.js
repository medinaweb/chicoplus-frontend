import React from 'react';
import { useRef } from "react";
import Link from '../../utils/ActiveLink';

import { FaBars, FaTimes } from "react-icons/fa";



//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_MENU_PRINCIPAL } from '../../graphql/queries';


function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const { data, loading, error } = useQuery(GET_MENU_PRINCIPAL);

    if (loading) return "loading";
    if (error) return "error";

    const attr = data.menuPrincipal.data.attributes

    return (
        <>
            <div id="navbar" className="navbar-area">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand logotipo">
                                <img src={`${process.env.STRAPI_URL}${attr.logo.data.attributes.url}`} width={140} alt="Chicoplus" />
                            </a>
                        </Link>

                        {/* Toggle navigation */}
                        <header className="mainMenu">
                            <nav ref={navRef}>

                                <div className="others-options">

                                    {attr.menuPrincipal.map((item, index) => {
                                        return (
                                            <>
                                                <Link key={index} href={item.url} activeClassName="active">
                                                    <a> {item.name} </a>
                                                </Link>
                                            </>
                                        )
                                    })}

                                    <Link href={attr.demostracao.url} >
                                        <a className="btn btn_demostracao"> <i className="icofont-laptop"></i>
                                            {attr.demostracao.label}
                                        </a>
                                    </Link>
                                    <Link href={attr.orcamento.url} >
                                        <a className="btn btn_orcamento"> <i className="icofont-dollar experimentarIcon"></i>
                                            {attr.orcamento.label}
                                        </a>
                                    </Link>
                                </div>
                                <button
                                    className="nav-btn nav-close-btn"
                                    onClick={showNavbar}>
                                    <FaTimes />
                                </button>
                            </nav>
                            <button className="nav-btn" onClick={showNavbar}>
                                <FaBars />
                            </button>
                        </header>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
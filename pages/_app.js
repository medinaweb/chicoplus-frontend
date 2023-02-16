import '../styles/bootstrap.min.css';
import '../styles/icofont.min.css';
import '../styles/pe-icon-7-stroke.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';
import 'animate.css';
import App from 'next/app';
import Head from 'next/head';
import GoTop from '../components/Shared/GoTop';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import Navbar from '../components/Layouts/Navbar';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

const client = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
});

export default class MyApp extends App {

    render() {

        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <title>Chicoplus - Plataforma de Microfinanças</title>
                </Head>
                
                    <ApolloProvider client={client} >
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </ApolloProvider>

                    {/* Go Top Button */}
                    <GoTop />
                    <ToastContainer />
                
            </>
        );
    }
}
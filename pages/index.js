import React from 'react';
import MainBanner from '../components/MainBanner/MainBanner';
import DigitalPlataforms from '../components/DigitalPlataforms/DigitalPlataformsContent';
import MainFuncionalities from '../components/MainFuncionalities/MainFuncionalities';
import ReportsAndDocuments from '../components/ReportsAndDocuments/ReportsAndDocuments';
import MainAdvantages from '../components/MainAdvantages/MainAdvantages';
import ResponsiveDevices from '../ResponsiveDevices/ResponsiveDevices';
import Testemonies from '../components/Testemonies/Testemonies';
import Partners from '../components/Partners/Partners';


import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
});

export default function Index() {

    return (
        <>
        <div id="root">
             <ApolloProvider client= {client} >

                <MainBanner />

                <DigitalPlataforms />

                <MainFuncionalities />

                <ReportsAndDocuments />

                <MainAdvantages />

                <ResponsiveDevices />

                <Testemonies />

                <Partners />

             </ApolloProvider>
             </div>
        </>
    );
}


import React from 'react';
import Link from 'next/link';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { PACKAGES_PRICING } from '../../graphql/queries';


function Pricing() {


    const { data, loading, error } = useQuery(PACKAGES_PRICING);

    if (loading) { return true }
    if (error) { return false }


    const plan01 = data.planosEPreco.data.attributes.packagesPrices[0];
    const plan02 = data.planosEPreco.data.attributes.packagesPrices[1];
    const plan03 = data.planosEPreco.data.attributes.packagesPrices[2];

    const planos = data.planosEPreco.data.attributes.packagesPrices


    return (
        <>

            <section className="pricing-area pt-100 pb-70 bg-f9f6f6 packagesPricingWrap">
                <div className="container ">
                    <div className="row">

                        {/* PLAN 01 */}
                        {Array.from(planos).map(data => {
                            return (
                                <>
                                    <div className="col-lg-4 col-sm-12">
                                        <div className="single-pricing-table">
                                            <div className="pricing-header">
                                                <h3>{data.typePackage}</h3>

                                            </div>

                                            <ul className="pricing-features">

                                                {Array.from(data.listItems).map((item) => {
                                                    return (

                                                        <li>
                                                            {item.available == "Sim" ? <i className="icofont-check-circled"></i> : <i className="icofont-close-circled"></i>}{item.title}
                                                        </li>
                                                    )
                                                })}

                                            </ul>

                                            <ul className="pricing-features pricingIconsOptions">
                                                <li><i className="icofont-ui-home filial"></i> {data.filial} Filial</li>
                                                <li><i className="icofont-user user"></i> {data.users} Users</li>
                                                <li><i className="icofont-users users"></i> {data.clients} Clientes</li>
                                            </ul>

                                            <div className="btn-box">
                                                <Link href={data.button.url} >
                                                    <a className="btn btn_demostracao" target="_blank"> <i className="icofont-laptop"></i>
                                                        {data.button.label}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}


export default Pricing;

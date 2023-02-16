import React from 'react';
import ReactMarkdown from 'react-markdown';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_LEI_PROTECAO_DADOS } from '../graphql/queries';



function LeiprotecaoDados() {


    const { data, loading, error } = useQuery(GET_LEI_PROTECAO_DADOS);

    if (loading) { return true }
    if (error) { return false }
    
    const attr = data.leiProtecaoDeDado.data.attributes
    const title = attr.title;
    const description = attr.content;

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



export default LeiprotecaoDados

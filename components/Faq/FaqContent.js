import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_FAQ } from '../../graphql/queries';


function FaqContent() {

    const {data, loading, error} = useQuery(GET_FAQ );

    if (loading) { return true }
    if (error) { return false }

 
    const attr = data.faq.data.attributes.faq
    const mainFaq = data.faq.data.attributes.mainFaq

    return (
        <>
            <section className="faq-area ptb-100 faqWrap">
                <div className="container">
                    <div className="row align-items-center faqWrapContent">
                        <div className="col-lg-8">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['a']}>

                                    <AccordionItem uuid={'a'}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {mainFaq.questions}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p> {mainFaq.answer} </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    {attr.map((data) => {

                                        return (
                                            <>
                                                <AccordionItem key={data.id}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>
                                                            {data.question}
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>
                                                    <AccordionItemPanel>
                                                        <p> {data.answer} </p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>
                                            </>
                                        )
                                    })}

                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default FaqContent;
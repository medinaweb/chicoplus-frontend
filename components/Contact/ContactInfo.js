import React from 'react';

//Apolo Client
import { useQuery } from '@apollo/client';

//Graphql import queries
import { GET_CONTACT_INFO } from '../../graphql/queries';


function ContactInfo() {

    const { data, loading, error } = useQuery(GET_CONTACT_INFO);

    if (loading) { return true }
    if (error) { return false }

    const location = data.contacteNo.data.attributes.location
    const emails = data.contacteNo.data.attributes.emails
    const phone = data.contacteNo.data.attributes.phone


    return (
        <div className="contact-info-area pt-100 pb-70 contactWrap">
            <div className="container">
           
                <div className="row justify-content-center contactContent">

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="pe-7s-mail"></i>
                            </div>
                            <h3>{emails.title}</h3>
                            <p><a href={`mailto:${emails.email01}`}>{emails.email01}</a></p>
                            <p><a href={`mailto:${emails.email02}`}>{emails.email02}</a></p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="pe-7s-map-2"></i>
                            </div>
                            <h3>{location.title}</h3>
                            <p>{location.endereco1}</p>
                            <p>{location.endereco2}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="pe-7s-call"></i>
                            </div>
                            <h3>{phone.title}</h3>
                            <p>{phone.phone01}</p>
                            <p>{phone.phone02}</p>
                        </div>
                    </div>

                </div>
             
            </div>
        </div>
    );
}


export default ContactInfo;
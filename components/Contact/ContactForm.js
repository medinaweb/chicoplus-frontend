
import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

import emailjs from 'emailjs-com';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const form = useRef();

    async function sendEmail(e) {
        e.preventDefault();

        if (!name || !email || !phone || !subject || !message) {
            toast.error('Preencha todos os Campos!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            await sendContactMail(name, email, phone, subject, message);

            emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            setName('');
            setEmail('');
            setPhone('')
            setSubject('');
            setMessage('');

            toast.success('Email Enviado Com Sucesso!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        catch {
            toast.error('Erro ao tentar enviar sua mensagem, tente novamente!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setName('');
            setEmail('');
            setPhone('')
            setSubject('');
            setMessage('');
        }

    }

    return (
        <div className="contact-form contactFormWrap">
            <h2 className="contactFormTitle">Contate-nos Agora</h2>

            <form ref={form} onSubmit={sendEmail}>
                <div className="container">
                 
                        <div className="row contactPage">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Seu nome"
                                        className="form-control"
                                        id="name"
                                        onChange={({ target }) => setName(target.value)}
                                        value={name}

                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Seu email"
                                        className="form-control"
                                        id="email"
                                        onChange={({ target }) => setEmail(target.value)}
                                        value={email}

                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Seu telefone..."
                                        className="form-control"
                                        id="phone"
                                        onChange={({ target }) => setPhone(target.value)}
                                        value={phone}


                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Assunto"
                                        className="form-control"
                                        id="subject"
                                        onChange={({ target }) => setSubject(target.value)}
                                        value={subject}


                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        cols="30"
                                        rows="6"
                                        placeholder="Escreva sua mensagem..."
                                        className="form-control"
                                        id="message"
                                        onChange={({ target }) => setMessage(target.value)}
                                        value={message}


                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12">
                                <button type="submit" className="btn btn-primary">
                                    Enviar mensagem
                                </button>
                            </div>
                        </div>
                   
                </div>
            </form>
        </div>
    )
}





import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

import emailjs from 'emailjs-com';

import Select from 'react-select'


//form lista select fields

const tipoInstituicaoLista = [
    { value: 'microfinanças', label: 'Microfinanças' },
    { value: 'microbanco', label: 'Microbanco' },
    { value: 'banco', label: 'Banco' }
]

const utilizadoreslista = [
    { value: 'escala01', label: '1 - 3 Utilizadores' },
    { value: 'escala02', label: '4 - 10 Utilizadores' },
    { value: 'escala03', label: '11 - 30 Utilizadore' },
    { value: 'escala04', label: '31 - 50 Utilizadores' },
    { value: 'escala05', label: '51 - 100 Utilizadores' }
]

const clienteslista = [
    { value: 'escala01', label: '1 - 5.000 Clientes' },
    { value: 'escala02', label: '6.000 - 10.000 Clientes' },
    { value: 'escala03', label: '11.000 - 30.000 Clientes' },
    { value: 'escala04', label: '31.000 - 60.000 Clientes' },

]


export default function ContactForm() {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nomeInstituicao, setNomeInstituicao] = useState('');
    const [tipoInstituicao, setTipoInstituicao] = useState('');
    const [nif, setNif] = useState('');
    const [numeroUtilizadores, setNumeroUtilizadores] = useState('');
    const [numeroClientes, setNumeroClientes] = useState('');

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
                                    placeholder="Nome Completo..."
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
                                    placeholder="Seu email..."
                                    className="form-control"
                                    id="email"
                                    onChange={({ target }) => setEmail(target.value)}
                                    value={email}

                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Contato Telefone..."
                                    className="form-control"
                                    id="phone"
                                    onChange={({ target }) => setPhone(target.value)}
                                    value={phone}


                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="nomeInstituicao"
                                    placeholder="Nome da Instituição..."
                                    className="form-control"
                                    id="nomeInstituicao"
                                    onChange={({ target }) => setNomeInstituicao(target.value)}
                                    value={nomeInstituicao}


                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="nif"
                                    placeholder="NIF"
                                    className="form-control"
                                    id="nif"
                                    onChange={({ target }) => setNif(target.value)}
                                    value={nif}


                                />
                            </div>
                        </div>
                        {/* <div className="col-lg-6">
                            <div className="form-group customSelects">
                                <select name='tipoInstituicao' value={tipoInstituicao} id="tipoInstituicao" onChange={({ target }) => setTipoInstituicao(target.value)}>
                                    <option value="default">...Selecione o Tipo da Instituição</option>
                                    <option value="microfinancas">Microfinanças</option>
                                    <option value="microbanco">Microbanco</option>
                                    <option value="banco">Banco</option>
                                </select>

                            </div>
                        </div> */}

                        <div className="col-lg-4">
                            <div className="form-group">
                                <Select options={tipoInstituicaoLista} placeholder="Tipo de Instituição" name='tipoInstituicao' value={tipoInstituicao} onChange={({ target }) => setTipoInstituicao(tipoInstituicaoLista.value)} />
                            </div>
                        </div>

                       
                        {/* <div className="col-lg-6">
                            <div className="form-group customSelects">
                                <select name='numeroUtilizadores' value={numeroUtilizadores} id="numeroUtilizadores" onChange={({ target }) => setNumeroUtilizadores(target.value)}>
                                    <option value="default">...Nº de Utilizadores...</option>
                                    <option value="escala01">1 - 3 Utilizadores</option>
                                    <option value="escala02">4 - 10 Utilizadores</option>
                                    <option value="escala03">11 - 30 Utilizadores</option>
                                    <option value="escala04">31 - 50 Utilizadores</option>
                                    <option value="escala05">51 - 100 Utilizadores</option>
                                </select>

                            </div>
                        </div> */}

                        <div className="col-lg-4">
                            <div className="form-group">
                                <Select  options={utilizadoreslista} placeholder="Número de Utilizadores" name='numeroUtilizadores' value={numeroUtilizadores} onChange={({ target }) => setNumeroUtilizadores(utilizadoreslista.value)} />
                            </div>
                        </div>

                        {/* <div className="col-lg-6">
                            <div className="form-group">
                                <select name='numeroClientes' value={numeroClientes} id="numeroClientes" onChange={({ target }) => setNumeroClientes(target.value)}>
                                    <option value="default">...Nº de Clientes...</option>
                                    <option value="escala01">1 - 5.000 Clientes</option>
                                    <option value="escala02">6.000 - 10.000 Clientes</option>
                                    <option value="escala03">11.000 - 30.000 Clientes</option>
                                    <option value="escala04">31.000 - 60.000 Clientes</option>
                                </select>

                            </div>
                        </div> */}

                        <div className="col-lg-4">
                            <div className="form-group">
                                <Select options={clienteslista} placeholder="Número de Clientes" name='tipoInstituicao' value={numeroClientes} onChange={({ target }) => setNumeroClientes(clienteslista.value)} />
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




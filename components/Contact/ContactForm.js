import React, { useState, useRef } from 'react';
import Select from 'react-select'


//form lista select fields

const tipoContato = [
    { value: 'solicitarInformacoes', label: 'Solicitar Informações' },
    { value: 'solicitarDemostracao', label: 'Solicitar Demostração' },
    { value: 'solicitarOrcamento', label: 'Solicitar Orçamento' }
]

const tipoInstituicaoLista = [
    { value: 'microfinanças', label: 'Microfinanças' },
    { value: 'microbanco', label: 'Microbanco' },
    { value: 'banco', label: 'Banco' }
]

const utilizadoreslista = [
    { value: 'escala01', label: '1 - 3 Utilizadores' },
    { value: 'escala02', label: '4 - 10 Utilizadores' },
    { value: 'escala03', label: '11 - 30 Utilizadores' },
    { value: 'escala04', label: '31 - 50 Utilizadores' },
    { value: 'escala05', label: '51 - 100 Utilizadores' }
]

const clienteslista = [
    { value: 'escala01', label: '1 - 5.000 Clientes' },
    { value: 'escala02', label: '6.000 - 10.000 Clientes' },
    { value: 'escala03', label: '11.000 - 30.000 Clientes' },
    { value: 'escala04', label: '31.000 - 60.000 Clientes' },

]

function ContactForm() {

    const form = useRef();

    const customStyles = {
        control: (base, state) => ({
            ...base,
            background: "#eeeeee",
            padding: "8px",
            cursor: "pointer",
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#eeeeee" : "#eeeeee",
            // Removes weird border around container
            boxShadow: state.isFocused ? null : null,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "#eeeeee" : "#eeeeee"
            }
        })
    };

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nomeInstituicao, setNomeInstituicao] = useState('');
    const [tipoInstituicao, setTipoInstituicao] = useState('');
    const [nif, setNif] = useState('');
    const [numeroUtilizadores, setNumeroUtilizadores] = useState('');
    const [numeroClientes, setNumeroClientes] = useState('');


    const [selecao, setSelecao] = useState('solicitarInformacoes');


    const handleChange = (e) => {
        setSelecao(e.target.value);
    };


    return (
        <>
            <div className="contact-form contactFormWrap">
                <h2 className="contactFormTitle">Fale Connosco</h2>

                <div className="formWrap">
                    <form ref={form}>

                        <div className="col-lg-12 col-md-12">
                            <div className='select'>

                                <select value={selecao} className="customStylesSelect" onChange={handleChange} >
                                    <option className='optionStyles' value="solicitarInformacoes">Solicitar Informacoes</option>
                                    <option className='optionStyles' value="solicitarDemostracao">Solicitar Demostração</option>
                                    <option className='optionStyles' value="solicitarOrcamento">Solicitar Orçamento</option>
                                </select>
                            </div>
                        </div>

                        {/* SOLCITAR INFORMAÇÕES */}
                        {selecao === 'solicitarInformacoes' && (
                            <>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Nome Completo..."
                                            className="form-control"
                                            id="name"
                                            onChange={({ target }) => setNome(target.value)}
                                            value={nome}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            cols="30"
                                            rows="6"
                                            placeholder="Escreva sua mensagem aqui..."
                                            className="form-control"
                                            id="message"
                                            onChange={({ target }) => setMessage(target.value)}
                                            value={message}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="btn btn-primary">
                                        Enviar mensagem
                                    </button>
                                </div>
                            </>

                        )}


                        {/* SOLCITAR DEMONSTRAÇÃO */}
                        {selecao === 'solicitarDemostracao' && (
                            <>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="nome"
                                            placeholder="Nome Completo..."
                                            className="form-control"
                                            id="name"
                                            onChange={({ target }) => setNome(target.value)}
                                            value={nome}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            cols="30"
                                            rows="6"
                                            placeholder="Escreva sua mensagem aqui..."
                                            className="form-control"
                                            id="message"
                                            onChange={({ target }) => setMessage(target.value)}
                                            value={message}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="btn btn-primary">
                                        Enviar mensagem
                                    </button>
                                </div>
                            </>

                        )}


                        {/* SOLCITAR ORÇAMENTO */}
                        {selecao === 'solicitarOrcamento' && (
                            <>
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="nome"
                                            placeholder="Nome Completo..."
                                            className="form-control"
                                            id="name"
                                            onChange={({ target }) => setNome(target.value)}
                                            value={nome}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
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
                                <div className="col-lg-12 col-md-12">
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

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <Select styles={customStyles} options={tipoInstituicaoLista} placeholder="Tipo de Instituição" name='tipoInstituicao' value={tipoInstituicao} onChange={({ target }) => setTipoInstituicao(tipoInstituicaoLista.value)} />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <Select styles={customStyles} options={utilizadoreslista} placeholder="Número de Utilizadores" name='numeroUtilizadores' value={numeroUtilizadores} onChange={({ target }) => setNumeroUtilizadores(utilizadoreslista.value)} />
                                    </div>
                                </div>


                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <Select styles={customStyles} options={clienteslista} placeholder="Número de Clientes" name='numeroClientes' value={numeroClientes} onChange={({ target }) => setNumeroClientes(clienteslista.value)} />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            cols="30"
                                            rows="6"
                                            placeholder="Escreva sua mensagem aqui..."
                                            className="form-control"
                                            id="message"
                                            onChange={({ target }) => setMessage(target.value)}
                                            value={message}

                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="btn btn-primary">
                                        Enviar mensagem
                                    </button>
                                </div>
                            </>

                        )}
                    </form>
                </div>

            </div>







        </>

    );
}

export default ContactForm
import React from 'react'

function form1() {
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
                                name="nomeInstituicao"
                                placeholder="Nome da Instituição..."
                                className="form-control"
                                id="phone"
                                onChange={({ target }) => setNomeInstituicao(target.value)}
                                value={nomeInstituicao}


                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <select>
                                <option value="default">...Selecione o Tipo da Instituição...</option>
                                <option value="microfinancas">Microfinanças</option>
                                <option value="microbanco">Microbanco</option>
                                <option value="banco">Banco</option>
                            </select>
                          
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

export default form1
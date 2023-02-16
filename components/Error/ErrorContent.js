import React, { Component } from 'react';
import Link from 'next/link';

class ErrorContent extends Component {
    render() {
        return (
            <>
                <div className="error-area ptb-100 errorWrap">
                    <div className="container">
                        <div className="error-content">
                        <img src="/images/elements/laptop-2.png" width={400} />
                            <h3>Página Não Encontrada</h3>
                            <p>A página que procura procura não foi encontrada.</p>

                            <div className="back-btn">
                                <Link href="/">
                                    <a className="btn btn-primary">Ir para Home</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ErrorContent;
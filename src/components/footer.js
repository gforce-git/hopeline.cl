import FoxComponent from './component';
import Markdown from 'react-markdown';
import logoImg from '../assets/images/logo.png';

class FooterComponent extends FoxComponent {

    static strings = {
        en: {
            information: 'Passenger and cargo transportation company legally established in Chile. Find us every day, 24 hours a day at Manutara 9929, La Florida. Santiago of Chile.',
            copyright: 'Copyright © {year} **Hopeline**. All rights reserved.',
        },
        es: {
            information: 'Empresa de Transporte de pasajeros y cargas legalmente constituida en Chile. Encuéntranos todos los días, las 24 horas en Manutara 9929, La Florida. Santiago de Chile.',
            copyright: 'Copyright © {year} **Hopeline**. Todos los derechos reservados.',
        },
    };

    render() {
        return (
            <div className="pb-4">
                <div className="container">
                    <hr className="pb-3 mt-0" />
                    <a className="navbar-brand d-flex align-items-center mb-4" href="#/">
                        <img className="me-3" style={{ width: '30px' }} src={logoImg} />
                        <span style={{
                            fontFamily: 'ubuntu',
                            fontWeight: '600',
                            fontSize: '30px'
                        }}>
                            <i>Hopeline</i>
                        </span>
                    </a>
                    <Markdown>{this.state.strings.information}</Markdown>
                    <div className="row">
                        <div className="col-md-6">
                            <Markdown>
                                {this.state.strings.copyright.replace('{year}', (new Date()).getFullYear())}
                            </Markdown>
                        </div>
                        <div className="col-md-6 text-start text-md-end pt-3 pt-md-0">
                            <a className="btn btn-outline-info px-3 mx-2 d-block d-sm-inline mb-2 mb-sm-0"
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/hopelinetransp/">
                                <i className="bi bi-instagram me-2"></i>
                                Instagram
                            </a>
                            <a className="btn btn-outline-info px-3 mx-2 d-block d-sm-inline mb-2 mb-sm-0"
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/transportes.hope.line">
                                <i className="bi bi-facebook me-2"></i>
                                Facebook
                            </a>
                            <a className="btn btn-outline-info px-3 mx-2 d-block d-sm-inline mb-2 mb-sm-0"
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/company/.../">
                                <i className="bi bi-linkedin me-2"></i>
                                Linkedin
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;
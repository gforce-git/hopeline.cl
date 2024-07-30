import FoxComponent from './component';
import servicesPersonalImg from '../assets/images/services-personal.png';

class ContactComponent extends FoxComponent {

    static strings = {
        en: {
            title: 'Contact us',
            introduction: 'Do you have questions or need more information about our transport services? Contact us and we will be happy to help you.',
            allDays: '24x7 Services',
            whatsapp: 'Write us on Whatsapp',
        },
        es: {
            title: 'Contáctanos',
            introduction: '¿Tienes preguntas o necesitas más información sobre nuestros servicios de transporte? Contáctanos y estaremos encantados de ayudarte.',
            allDays: 'Servicios 24x7',
            whatsapp: 'Escríbenos por Whatsapp',
        },
    };

    render() {
        return (
            <div className="mt-5 pt-5 mb-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={servicesPersonalImg}
                                className="img-fluid"
                                alt="Taxi"
                                data-aos="fade-right" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="display-6 mb-3">
                                {this.state.strings.title}
                            </h2>
                            <p>{this.state.strings.introduction}</p>
                            <p className="lead fw-bold mb-4 mt-4 mb-sm-3 mt-sm-0">{this.state.strings.allDays}</p>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-none d-sm-block">
                                        <a className="btn btn-outline-light mb-2 d-block" href="tel:%2b56945037289">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 4503 7289
                                        </a>
                                        <a className="btn btn-outline-light mb-2 d-block" href="tel:%2b56954183167">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 5418 3167
                                        </a>
                                        <a className="btn btn-outline-light mb-2 d-block" href="tel:%2b56959542139">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 5954 2139
                                        </a>
                                    </div>
                                    <div className="d-block d-sm-none mb-4">
                                        <a className="btn btn-success mb-2 d-block" href="tel:%2b56945037289">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 4503 7289
                                        </a>
                                        <a className="btn btn-success mb-2 d-block" href="tel:%2b56954183167">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 5418 3167
                                        </a>
                                        <a className="btn btn-success mb-2 d-block" href="tel:%2b56959542139">
                                            <i className="bi bi-telephone me-3"></i>
                                            +56 9 5954 2139
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-none d-sm-block">
                                        <a
                                            className="btn btn-outline-light mb-2 d-block"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://wa.me/56959542139">
                                            <i className="bi bi-whatsapp me-3"></i>
                                            {this.state.strings.whatsapp}
                                        </a>
                                        <a className="btn btn-outline-light mb-2 d-block"
                                            href="mailto:info@hopeline.cl">
                                            <i className="bi bi-envelope me-3"></i>
                                            info@hopeline.cl
                                        </a>
                                    </div>
                                    <div className="d-block d-sm-none mb-4">
                                        <a
                                            className="btn btn-primary mb-2 d-block"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://wa.me/56959542139">
                                            <i className="bi bi-whatsapp me-3"></i>
                                            {this.state.strings.whatsapp}
                                        </a>
                                        <a className="btn btn-primary mb-2 d-block"
                                            href="mailto:info@hopeline.cl">
                                            <i className="bi bi-envelope me-3"></i>
                                            info@hopeline.cl
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactComponent;
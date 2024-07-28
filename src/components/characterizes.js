import FoxComponent from './component';

class CharacterizesComponent extends FoxComponent {

    static strings = {
        en: {
            title: 'We Characterize',
            punctuality: {
                title: 'PUNCTUALITY',
                description: 'We always arrive on time, ensuring that your commitments and deliveries are never affected.',
            },
            security: {
                title: 'SECURITY',
                description: 'We ensure that your trip or cargo reaches its destination without unnecessary risks or worries.',
            },
            professionalism: {
                title: 'PROFESSIONALISM',
                description: 'We offer a high-quality service, with trained drivers and a courteous and friendly approach.',
            }
        },
        es: {
            title: 'Nos caracteriza',
            punctuality: {
                title: 'PUNTUALIDAD',
                description: 'Siempre llegamos a tiempo, garantizando que tus compromisos y entregas nunca se vean afectados.',
            },
            security: {
                title: 'SEGURIDAD',
                description: 'Nos aseguramos de que tu viaje o carga lleguen a su destino sin riesgos ni preocupaciones innecesarias.',
            },
            professionalism: {
                title: 'PROFESIONALISMO',
                description: 'Ofrecemos un servicio de alta calidad, con conductores capacitados y un trato cordial y amable.',
            }
        },
    };

    render() {
        return (
            <div className="my-5 py-5">
                <div className="container text-center">
                    <h1 className="mb-5 d-none d-sm-block">{this.state.strings.title}</h1>

                    <div className="row">
                        <div className="col-md-4 mb-5 mb-sm-0" data-aos="fade-right">
                            <div>
                                <i className="bi bi-alarm d-block mb-3" style={{ fontSize: '5rem' }}></i>
                                <h4 className="fw-bold mb-4">{this.state.strings.punctuality.title}</h4>
                                <p>{this.state.strings.punctuality.description}</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5 mb-sm-0">
                            <div>
                                <i className="bi bi-heart-pulse d-block mb-3" style={{ fontSize: '5rem' }}></i>
                                <h4 className="fw-bold mb-4">{this.state.strings.security.title}</h4>
                                <p>{this.state.strings.security.description}</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <div>
                                <i className="bi bi-person-badge d-block mb-3" style={{ fontSize: '5rem' }}></i>
                                <h4 className="fw-bold mb-4">{this.state.strings.professionalism.title}</h4>
                                <p>{this.state.strings.professionalism.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterizesComponent;
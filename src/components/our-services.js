import FoxComponent from './component';

class OurServicesComponent extends FoxComponent {

    static strings = {
        en: {
            title: "Our Services",
            subtitle: "We offer a wide range of professional services focused on personal and corporate transportation.",
            taxi: {
                title: "Taxi, Radio-Taxi, and Tourism Service",
                description: "We have highly qualified professional drivers to ensure efficient, comfortable, and safe trips."
            },
            corporate: {
                title: "Corporate Staff Transportation",
                description: "Specialists in corporate staff transportation. We guarantee punctuality, comfort, and safety in every trip with our fleet."
                },
            delivery: {
                title: "Delivery Services",
                description: "We provide fast and efficient delivery for businesses and individuals. We transport packages and goods, ensuring perfect condition deliveries."
            },
            cargo: {
                title: "Vehicle and Light Cargo Transportation",
                description: "We offer safe transportation of vehicles and cargo. We have the equipment and trained personnel for professional and reliable transport."
            },
            contactNow: 'Call now! 24x7',
        },
        es: {
            title: 'Nuestros servicios',
            subtitle: 'Ofrecemos una amplia gama de servicios profesionales orientados al transporte personal y para su empresa.',
            taxi: {
                title: 'Servicio de Taxi, Radio-Taxi y Turismo',
                description: 'Contamos con conductores profesionales altamente calificados para asegurar viajes eficientes, cómodos y seguros.',
            },
            corporate: {
                title: 'Traslado de personal corporativo',
                description: 'Especialistas en el traslado de personal corporativo. Garantizamos puntualidad, comodidad y seguridad en cada viaje con nuestra flota.',
            },
            delivery: {
                title: 'Servicios de Delivery',
                description: 'Proveemos delivery rápido y eficiente para empresas y particulares. Transportamos paquetes y mercancías, asegurando entregas en perfectas condiciones.',
            },
            cargo: {
                title: 'Transporte de vehículos y carga ligera',
                description: 'Ofrecemos transporte seguro de vehículos y carga. Contamos con equipos y personal capacitado para un traslado profesional y confiable.',
            },
            contactNow: 'Solicita ahora! 24x7',
        },
    };

    render() {
        return (
            <div className="py-4 my-4" id="services">

                <div className="container">
                    <div className="row pb-0 pb-sm-5 mb-0 mb-sm-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light mb-4 text-center">{this.state.strings.title}</h1>
                            <p className="lead text-muted text-center">
                                {this.state.strings.subtitle}
                            </p>
                        </div>
                    </div>

                    <div className="row my-5 pb-5">
                        <div className="col-md-6">
                            <div className="my-2 my-md-4" data-aos="fade-right">
                                <div className="d-flex align-items-center">
                                    <div className="pe-5 d-none d-sm-block">
                                        <i className="bi bi-car-front-fill"
                                            style={{ fontSize: '70px', color: '#faf1ea' }}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fw-bold">
                                            {this.state.strings.taxi.title}
                                        </h5>
                                        <p>
                                            {this.state.strings.taxi.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-2 my-md-4" data-aos="fade-left">
                                <div className="d-flex align-items-center">
                                    <div className="pe-5 d-none d-sm-block">
                                        <i className="bi bi-building-fill"
                                            style={{ fontSize: '70px', color: '#faf1ea' }}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fw-bold">
                                            {this.state.strings.corporate.title}
                                        </h5>
                                        <p>
                                            {this.state.strings.corporate.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-2 my-md-4" data-aos="fade-right">
                                <div className="d-flex align-items-center">
                                    <div className="pe-5 d-none d-sm-block">
                                        <i className="bi bi-box-fill"
                                            style={{ fontSize: '70px', color: '#faf1ea' }}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fw-bold">
                                            {this.state.strings.delivery.title}
                                        </h5>
                                        <p>
                                            {this.state.strings.delivery.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="my-2 my-md-4" data-aos="fade-left">
                                <div className="d-flex align-items-center">
                                    <div className="pe-5 d-none d-sm-block">
                                        <i className="bi bi-truck-front-fill"
                                            style={{ fontSize: '70px', color: '#faf1ea' }}></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="fw-bold">
                                            {this.state.strings.cargo.title}
                                        </h5>
                                        <p>
                                            {this.state.strings.cargo.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 d-block d-sm-none">
                            <a className="px-4 btn btn-lg btn-success rounded-pill w-100"
                                href="tel:%2b56959542139">
                                <i className="bi bi-telephone me-3"></i>
                                {this.state.strings.contactNow}
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default OurServicesComponent;
// Fox requirements
import { FoxComponent, HeaderNavComponent, HeaderTitledComponent,
    ContactComponent, FooterComponent } from '../components';

// Page class
class AboutPage extends FoxComponent {

    static installed = true;
    static authenticated = null;
    static strings = {
        en: {
            header: {
                title: 'About us',
                subtitle: 'Providing transportation services for 20 years.',
            },
        },
        es: {
            header: {
                title: 'Acerca de nosotros',
                subtitle: 'Prestando servicios de transporte por 20 años.',
            },
        },
    };

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                
                <HeaderNavComponent
                    selected="about"
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language} />
                    
                <HeaderTitledComponent
                    title={this.state.strings.header.title}
                    subtitle={this.state.strings.header.subtitle}
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language} />

                <div className="flex-fill py-4 my-3">
                    <div className="container pb-3">
                    
                        <div className="mb-5">
                            <h4 className="fw-bold mb-3">Compromiso y Seriedad</h4>
                            <p>
                                En Hopeline, nos enorgullece ofrecer servicios de transporte de pasajeros que destacan por su compromiso y seriedad. Nos esforzamos por superar las expectativas de nuestros clientes en cada viaje, garantizando una experiencia segura y confiable. Nuestro equipo de profesionales capacitados está dedicado a proporcionar un servicio excepcional, asegurándose de que cada pasajero llegue a su destino de manera segura y puntual.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="fw-bold mb-3">Puntualidad</h4>
                            <p>
                                Entendemos la importancia de la puntualidad en el transporte de pasajeros. Por eso, nos comprometemos a ofrecer un servicio que se ajuste a tus horarios y necesidades. Nuestro objetivo es hacer de cada viaje una experiencia agradable y sin estrés, permitiéndote concentrarte en lo que realmente importa. Con nuestra flota de vehículos modernos y bien mantenidos, garantizamos que llegues a tu destino a tiempo, cada vez.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="fw-bold mb-3">Ética Profesional</h4>
                            <p>
                                La ética es un valor fundamental en Hopeline. Operamos con integridad y transparencia en todas nuestras interacciones, asegurando que nuestros clientes confíen en nuestros servicios. Valoramos la confianza que depositas en nosotros y trabajamos arduamente para mantener los más altos estándares éticos en todas nuestras operaciones.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="fw-bold mb-3">Nuestro Compromiso Contigo</h4>
                            <p>
                                Nuestro compromiso es proporcionar un servicio de transporte de pasajeros que no solo cumpla, sino que supere tus expectativas. Escuchamos a nuestros clientes y adaptamos nuestros servicios para satisfacer sus necesidades únicas. Creemos que cada viaje es una oportunidad para demostrar nuestro compromiso con la calidad y el servicio al cliente.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="fw-bold mb-3">Nuestra Misión</h4>
                            <p>
                                La misión de Hopeline es facilitar el transporte de pasajeros con un enfoque en la seguridad, la comodidad y la satisfacción del cliente. Nos esforzamos por ser líderes en la industria del transporte, innovando constantemente y mejorando nuestros servicios para garantizar que cada pasajero tenga la mejor experiencia posible.
                            </p>
                        </div>
                    </div>

                    <ContactComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />
                </div>
                
                <FooterComponent
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language} />
            </div>
        );
    }
};

export default AboutPage;

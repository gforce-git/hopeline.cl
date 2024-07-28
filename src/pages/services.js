// Fox requirements
import { FoxComponent, HeaderNavComponent, ContactComponent,
    HeaderTitledComponent, FooterComponent } from '../components';

// Page class
class ServicesPage extends FoxComponent {

    static installed = true;
    static authenticated = null;
    static strings = {
        en: {
            header: {
                title: 'Our services',
                subtitle: 'Professional services aimed at personal and business transportation.',
            },
        },
        es: {
            header: {
                title: 'Nuestros servicios',
                subtitle: 'Servicios profesionales orientados al transporte personal y para su empresa.',
            },
        },
    };

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                
                <HeaderNavComponent
                    selected="services"
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

                    ...

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

export default ServicesPage;

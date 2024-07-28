// Application requirements
import Markdown from 'react-markdown';

// Fox requirements
import { FoxComponent, HeaderNavComponent, ContactComponent,
    HeaderTitledComponent, FooterComponent } from '../components';

// Page class
class ContactPage extends FoxComponent {

    static installed = true;
    static authenticated = null;
    static strings = {
        en: {
            header: {
                title: 'Contact with us',
                subtitle: 'Let us know how we can help you!',
            },
        },
        es: {
            header: {
                title: 'Contacta con nosotros',
                subtitle: '¡Déjanos saber cómo podemos ayudarte!',
            },
        },
    };

    constructor(props) {

        super(props, {
            localization: 'Santiago, Chile'
        });
    }

    render() {
        return (
            <div className="d-flex flex-column min-vh-100">
                
                <HeaderNavComponent
                    selected="contact"
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
                    <ContactComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <div>
                        <div className="container">
                            <p>
                                Nos localizamos en Manutara 9929, La Florida. Santiago de Chile.
                            </p>
                            <iframe
                                className="border rounded-1 p-1 w-100"
                                title="Inside Security"
                                style={{ height: '300px' }}
                                src={`https://maps.google.com/maps?q=${encodeURI(this.state.localization)}&width=100%25&height=485&hl=en&t=&z=17&ie=UTF8&iwloc=B&output=embed`}>
                            </iframe>
                        </div>
                    </div>
                </div>
                
                <FooterComponent
                    events={this.props.events}
                    params={this.props.params}
                    language={this.props.language} />
            </div>
        );
    }
};

export default ContactPage;

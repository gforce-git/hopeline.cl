import jsonschema from 'jsonschema';
import FoxComponent from './component';
import logoImg from '../assets/images/logo.png';

class HeaderNavComponent extends FoxComponent {

    static strings = {
        en: {
            about: 'About us',
            services: 'Services',
            contact: 'Contact',
            contactNow: 'Call now! 24x7',
            currentLanguage: 'EN',
            language: {
                spanish: 'Español',
                english: 'English',
            }
        },
        es: {
            about: 'Quienes somos',
            services: 'Servicios',
            contact: 'Contacto',
            contactNow: 'Solicita ahora! 24x7',
            currentLanguage: 'ES',
            language: {
                spanish: 'Español',
                english: 'English',
            }
        },
    };

    constructor(props) {

        // Input validation from properties
        const validation = (new jsonschema.Validator()).validate(props, {
            type: Object,
            properties: {
                events: { type: Array, items: { type: Object } },
                params: { type: Array, items: { type: String } },
                language: { type: String, pattern: /^[a-z]{2,3}$/ },
                selected: { type: String }
            },
            required: [ 'events', 'params', 'language', 'selected' ],
        }, { required: true, allowUnknownAttributes: false });

        if(validation.errors.length)
            throw new Error(`Integrity error on Page.props validation: ${JSON.stringify(validation.errors, null, 2)}`);

        // Propagate options
        super(props);
    }

    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand d-flex align-items-center" href="#/">
                                <img className="me-3" style={{ width: '30px' }} src={logoImg} />
                                <span style={{
                                    fontFamily: 'ubuntu',
                                    fontWeight: '600',
                                    fontSize: '25px'
                                }}>
                                    <i>Transnav</i>
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-top">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar-top">
                                <div className="me-auto"></div>
                                <div className="d-flex">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        {/* About */}
                                        <li className="nav-item">
                                            <a className={`nav-link px-3 ${(this.props.selected === 'about') ? 'active' : ''}`}
                                                href="#/about">
                                                {this.state.strings.about}
                                            </a>
                                        </li>

                                        {/* Services */}
                                        {/*<li className="nav-item">
                                            <a className={`nav-link px-3 ${(this.props.selected === 'services') ? 'active' : ''}`}
                                                href="#/services">
                                                {this.state.strings.services}
                                            </a>
                                        </li>*/}

                                        {/* Contact */}
                                        <li className="nav-item">
                                            <a className={`nav-link px-3 ${(this.props.selected === 'contact') ? 'active' : ''}`}
                                                href="#/contact">
                                                {this.state.strings.contact}
                                            </a>
                                        </li>

                                        {/* Language */}
                                        <li className="nav-item dropdown">
                                            <button className="nav-link px-3 dropdown-toggle" data-bs-toggle="dropdown">
                                                <i className="bi bi-globe-americas me-2"></i>
                                                <span className="me-1">{this.state.strings.currentLanguage}</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <button
                                                        onMouseDown={() => this.props.events.setLanguage('es')}
                                                        className="dropdown-item">
                                                        {this.state.strings.language.spanish}
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onMouseDown={() => this.props.events.setLanguage('en')}
                                                        className="dropdown-item">
                                                        {this.state.strings.language.english}
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Contact now */}
                                        <li className="nav-item d-none d-sm-inline">
                                            <a className="px-4 btn btn-outline-light rounded-pill"
                                                href="tel:%2b56959542139">
                                                {this.state.strings.contactNow}
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default HeaderNavComponent;
import FoxComponent from './component';
import headerImg from '../assets/images/header.jpg';

class HeaderLandingComponent extends FoxComponent {

    static strings = {
        en: {
            lg: {
                title: 'PROFESSIONAL',
                subtitle: 'TRANSPORT SERVICE',
            },
            sm: {
                title: 'PROFESSIONAL',
                subtitle: 'TRANSPORT SERVICE',
            }
        },
        es: {
            lg: {
                title: 'SERVICIO PROFESIONAL DE',
                subtitle: 'TRANSPORTE',
            },
            sm: {
                title: 'SERVICIO PROFESIONAL',
                subtitle: 'DE TRANSPORTE',
            }
        },
    };

    render() {
        return (
            <div className="pb-4 mb-3">
                <svg className="img-fluid w-100 d-none d-sm-block"
                    style={{ userSelect: 'none' }}
                    viewBox="0 0 3832 1610" xmlns="http://www.w3.org/2000/svg">
                    <image href={headerImg} width="3832" height="1610" />
                    <text x="50%" y="302" textAnchor="middle" fontSize="65" fill="#121212" fontWeight="400">
                        {this.state.strings.lg.title}
                    </text>
                    <text x="50%" y="419" textAnchor="middle" fontSize="92" fill="#121212" fontWeight="900">
                    {this.state.strings.lg.subtitle}
                    </text>
                </svg>

                <svg className="img-fluid w-100 d-block d-sm-none"
                    style={{ userSelect: 'none' }}
                    viewBox="250 0 950 1610" xmlns="http://www.w3.org/2000/svg">
                    <image href={headerImg} width="3832" height="1610" />
                    <text x="320" y="270" textAnchor="start" fontSize="65" fill="#121212" fontWeight="400">
                        {this.state.strings.sm.title}
                    </text>
                    <text x="320" y="370" textAnchor="start" fontSize="80" fill="#121212" fontWeight="900">
                    {this.state.strings.sm.subtitle}
                    </text>
                </svg>
            </div>
        )
    }
}

export default HeaderLandingComponent;
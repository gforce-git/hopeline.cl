import FoxComponent from './component';

import clinicaBupaLogoImg from '../assets/images/logo-clinica-bupa.png';
import cruzblancaLogoImg from '../assets/images/logo-cruzblanca.png';
import integramedicaLogoImg from '../assets/images/logo-integramedica.png';

class OurClientsComponent extends FoxComponent {

    static strings = {
        en: {
            description: 'Our app partners with leaders in the business sector to ensure that every ride is a comfortable and safe experience. By working with the most prestigious companies, we are committed to offering customized and efficient transportation solutions that exceed the expectations of our corporate clients',
        },
        es: {
            description: 'Nuestra aplicación se asocia con líderes del sector  empresarial para garantizar que cada viaje sea una experiencia de comodidad y seguridad. Al trabajar con las empresas más prestigiosas, nos comprometemos a ofrecer soluciones de transporte personalizadas y eficientes que superen las expectativas de nuestros clientes corporativos',
        },
    };

    render() {
        return (
            <div className="py-5 my-5"
                style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div className="container">
                    <p className="text-center mb-5">
                        <i className="bi bi-quote me-2"></i>
                        <i>
                            {this.state.strings.description}
                        </i>
                    </p>
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <img
                                data-aos="fade-right"
                                className="img-fluid border rounded p-1"
                                src={clinicaBupaLogoImg} />
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <img
                                className="img-fluid border rounded p-1"
                                src={cruzblancaLogoImg} />
                        </div>
                        <div className="col-md-4 mb-3 mb-sm-0">
                            <img
                                data-aos="fade-left"
                                className="img-fluid border rounded p-1"
                                src={integramedicaLogoImg} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurClientsComponent;
import FoxComponent from './component';
import headerMinImg from '../assets/images/header-min.jpg';

class HeaderTitledComponent extends FoxComponent {

    static strings = {
        en: { },
        es: { },
    };

    render() {
        return (
            <div className="mb-4" style={{
                backgroundImage: `url(${headerMinImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}>
                <div className="container py-5">
                    <h1 className="fw-lighter mb-3">
                        {this.props.title}
                    </h1>
                    <p className="lead mb-0">
                        {this.props.subtitle}
                    </p>
                </div>
            </div>
        )
    }
}

export default HeaderTitledComponent;
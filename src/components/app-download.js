import FoxComponent from './component';
import etaxiAppImg from '../assets/images/etaxi-app.png';

class AppDownloadComponent extends FoxComponent {

    static strings = {
        en: {
            title: 'Download our mobile APP',
            subtitle: 'Request a taxi from your phone with just the press of a button.',
            description: 'We find the nearest taxi for you, send you its identification details, and while you wait, you can see the estimated arrival time and the distance to your location. Finally, when the taxi arrives at your location, we notify you. Easier than ever!',
            download: {
                title: 'Android and iPhone devices',
                subtitle: 'Download our official app for Android devices from the Play Store and for iOS from the App Store.',
                playStore: 'Play Store',
                appStore: 'App Store',
            }
        },
        es: {
            title: 'Descarga nuestra APP móvil',
            subtitle: 'Pide un taxi desde tu teléfono con sólo pulsar un botón.',
            description: 'Te localizamos el taxi más cercano, te mandamos sus datos identificativos, mientras esperas podrás ir viendo el tiempo estimado de llegada y la distancia a la que se encuentra. Y por último, cuando el taxi llegue a tu ubicación, te avisamos. ¡Más fácil imposible!',
            download: {
                title: 'Dispositivos Android y iPhone',
                subtitle: 'Descarga nuestra app oficial para dispositivos Android desde Play Store y para iOS desde la App Store.',
                playStore: 'Play Store',
                appStore: 'App Store',
            }
        },
    };

    render() {
        return (
            <div className="my-4 pb-4">
                <div className="container text-center text-sm-start">
                    <div className="row">
                        <div className="col-md-4 mb-5 pb-3 mb-sm-0 pb-sm-0">
                            <img className="img-fluid" src={etaxiAppImg}
                                style={{ maxHeight: '500px' }} />
                        </div>
                        <div className="col-md-8">
                            <h1>{this.state.strings.title}</h1>
                            <p className="lead">
                            {this.state.strings.subtitle}
                            </p>
                            <p>
                                {this.state.strings.description}
                            </p>

                            <hr className="d-none d-sm-block" />
                            <h4 className="mt-5">{this.state.strings.download.title}</h4>
                            <p>{this.state.strings.download.subtitle}</p>
                            <div className="mt-5 mt-sm-4" data-aos="fade-left">
                                <a
                                    className="btn btn-primary px-4 me-0 me-sm-3 d-block d-sm-inline mb-3 mb-sm-0"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.eTaxi">
                                    <i className="bi bi-google-play me-3"></i>
                                    {this.state.strings.download.playStore}
                                </a>
                                <a
                                    className="btn btn-primary px-4 d-block d-sm-inline"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://apps.apple.com/cl/app/etaxi-cliente/id550431345">
                                    <i className="bi bi-apple me-3"></i>
                                    {this.state.strings.download.appStore}
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDownloadComponent;
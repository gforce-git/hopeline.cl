// Fox requirements
import { AppDownloadComponent, CharacterizesComponent, FoxComponent,
    HeaderLandingComponent, HeaderNavComponent, FooterComponent,
    ContactComponent, OurClientsComponent,
    OurServicesComponent } from '../components';

// Page class
class MainPage extends FoxComponent {

    // Component strings
    static strings = {
        en: { },
        es: { },
    };

    render() {
        return (
            <div className="main-page d-flex flex-column min-vh-100">
                <div className="flex-fill">

                    <HeaderNavComponent
                        selected=""
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <HeaderLandingComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <OurServicesComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <AppDownloadComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <CharacterizesComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

                    <OurClientsComponent
                        events={this.props.events}
                        params={this.props.params}
                        language={this.props.language} />

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

export default MainPage;

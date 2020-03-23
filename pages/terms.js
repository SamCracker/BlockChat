import {Component} from 'react';
import {
    Container,
    Segment
} from 'semantic-ui-react';
import HeaderMenu from '../views/HeaderMenu';
import Footer from '../views/Footer';
import Constant from '../support/Constant';
import GuideModal from '../views/modals/GuideModal';
import Head from 'next/head';

class Terms extends Component {
    render() {
        return (
            <Container>
                <Head>
                    <title>EtherChat - Terms of use</title>
                </Head>
                <HeaderMenu />
                <GuideModal />
                <Container style={{marginTop: 100, fontSize: '1.2em'}}>
                    <h1>Terms of use</h1>
                    </Container>
                <Footer />
            </Container>
        )
    }
}

export default Terms;
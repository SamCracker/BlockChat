import {Component} from 'react';
import {
    Modal,
    Header,
    Button,
    Icon
} from 'semantic-ui-react';
import appDispatcher from '../../core/AppDispatcher';
import Constant from '../../support/Constant';

class GuideModal extends Component {
    state = { modalOpen: false, key: ""}

    handleClose = (e) => {
        e.preventDefault();
        this.setState({ modalOpen: false })

        var firstTimeUse = window.localStorage.firstTimeUse;
        if (firstTimeUse == undefined) {
            window.localStorage.setItem('firstTimeUse', "false");
            appDispatcher.dispatch({
                action: Constant.ACTION.OPEN_PRIVATE_KEY_MODAL,
            });
        }
    };

    componentDidMount() {
        this.checkForFirstTime();
        appDispatcher.register((payload) => {
            if (payload.action == Constant.ACTION.OPEN_GUIDE) {
                this.setState({modalOpen: true});
            }
        });
    }

    checkForFirstTime() {
        if (typeof(Storage) !== "undefined") {
            var firstTimeUse = window.localStorage.firstTimeUse;
            if (firstTimeUse == undefined || firstTimeUse == false) {
                this.setState({modalOpen: true});
            }
        }
    }

    render() {
        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
                >
                <Header icon="" content="Welcome to BlockChat" />
                    <Modal.Content style={{fontSize: '1.2em'}}>
                        <h2>Please read our note carefully</h2>
                        <p>BlockChat is an Ethereum app that allows you to send encrypted messages via 
                            a smart contract that only you and the recipient of a message can decrypt it.
                            BlockChat can operate without any centralized server</p>
                        <p>You will be required to key in your BlockChat private key in order to 
                            use BlockChat. Make sure that you understand the risk of giving your 
                            private key to any third party.</p>
                        <p>We recommend you to try BlockChat on Rinkeby test net or Ropsten test Net. You can get free ether on Rinkeby at https://faucet.rinkeby.io/ and https://faucet.ropsten.be/</p>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button color='green' onClick={this.handleClose}>
                        <Icon name='checkmark' /> Got it
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default GuideModal;
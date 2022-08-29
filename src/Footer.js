import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <footer>
            <p><FontAwesomeIcon icon={faCopyright} /> 2022 David Phan.
                All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;

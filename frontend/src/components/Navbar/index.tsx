import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css'

function Navbar() {
    return(
    <header>
        <nav className="container">
            <div className="dsmovie-navContent">
                <h1>DSMovie</h1>
                <a href="https://github.com/mariisneves">
                    <div className="dsmovie-contactContainer">
                        <GithubIcon />
                        <p className="dsmovie-contactLink">/mariisneves</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;
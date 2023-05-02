import React from 'react';
import './Footer.css';
import logo from './logoFooter.png'




let Footer=()=>{
return(<React.Fragment>
    <footer className="footer-section">
       
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved to <b>Enverus</b></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a className='footer-menu_a_tag' href="#">Home</a></li>
                                <li><a className='footer-menu_a_tag' href="#">About Us</a></li>
                                <li><a className='footer-menu_a_tag' href="#">Privacy</a></li>
                                <li><a className='footer-menu_a_tag' href="#">Policy</a></li>
                                <li><a className='footer-menu_a_tag' href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</React.Fragment>)
}

export default Footer;
import iconfacebook from '../assets/icons/icons8-facebook-50.png';
import iconinstagram from '../assets/icons/icons8-instagram-50.png';
import iconlinkedin from '../assets/icons/icons8-linkedin-50.png';

import '../pages/Main/style_footer.css';

function Footer(){
    return(
        <>
        <div className='div_footer'>
            <div className='div_footer_left'>
                <span>Address: Fifth Av, 390</span>
                <span>Contact: (32)998371710</span>
                <span>Perfil: https://www.linkedin.com/in/vinicius-correa-82a603230/</span>
            </div>
            <div className='div_footer_right'>
                <img src={iconfacebook} alt='icon facebook'/>
                <img src={iconinstagram} alt='icon instagram'/>
                <img src={iconlinkedin} alt='icon linkedin'/>
            </div>
        </div>
        </>
    )
}

export default Footer;
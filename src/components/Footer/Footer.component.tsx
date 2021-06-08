import { FC } from 'react';
import './index.css';

interface FooterInterface {
    img: any;
}

const Footer:FC<FooterInterface> = ({ img }) => (
    <div className='vignette'>
        <img className='footer-image' src={img} alt='footer'/>
        {/* <div className='inset'></div> */}
    </div>
);

export default Footer;

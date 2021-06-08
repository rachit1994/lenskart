import { FC } from 'react';
import './index.css';

interface HeaderInterface {
    background: any;
    logo: any;
    product: {
        title: string;
        img: any
    };
    title: string;
}
const Header: FC<HeaderInterface> = ({ background, logo, product, title }) => (
    <header style={{ background: `url(${background})` }}>
        <div className='flex-1 container flex-center flex-wrap'>
            <div className='flex-center top-container'>
                <img src={logo} alt='Mirzapur' className='logo' loading='lazy' />
                <div className='header-glass'>
                    <h4>{product?.title}</h4>
                    <img src={product?.img} alt='Glass' className='glass' loading='lazy' />
                </div>
            </div>
            <div className='text-center'>
                <p className='header-title'>{title}</p>
                <button className='button' style={{ background: 'red' }}>view collections</button>
            </div>
        </div>
        <div className='flex-1-md'></div>
    </header>
);

export default Header;

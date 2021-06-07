import { FC } from 'react';
import './index.css';

interface HeaderInterface {
    background: any;
    logo: any;
    product: {
        title: string;
        img: any
    }
}
const Header: FC<HeaderInterface> = ({ background, logo, product }) => (
    <header className='flex-2'>
        <div className='flex-center'>
            <img src={logo} alt='Mirzapur' className='width-25' loading='lazy' />
            <div>
                <h4>{product?.title}</h4>
                <img src={product?.img} alt='Glass' className='width-25 border-right-white' loading='lazy' />
            </div>
        </div>
    </header>
);

export default Header;

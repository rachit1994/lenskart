import { FC } from 'react';
import './index.css';

interface Column {
    img: any;
    description: string;
    glass: any;
}
interface ProductsInterface {
    title: string;
    subTitle: string;
    column: Array<Column>
}

const Products: FC<ProductsInterface> = ({ title, subTitle, column }) => (
    <main className='flex-3 product'>
        <div className='header'>
            <h3 className='title'>
                {title}
            </h3>
            <div className='subTitle'>
                {subTitle}
            </div>
        </div>
    </main>
);

export default Products;

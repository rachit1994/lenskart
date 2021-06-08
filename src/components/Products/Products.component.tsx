import { FC } from 'react';
import './index.css';

interface Column {
    img: any;
    description: string;
    glass: any;
    alt: string;
}
interface ProductsInterface {
    title: string;
    subTitle: string;
    column: Array<Column>
}

const Products: FC<ProductsInterface> = ({ title, subTitle, column }) => (
    <main className='product'>
        <div className='header'>
            <h3 className='title'>
                {title}
            </h3>
            <div className='subTitle'>
                {subTitle}
            </div>
        </div>
        <div className='column'>
            {
                Array.isArray(column) && column.length > 0 && column.map((col: any) => (
                    <div className='column content' style={{ flexDirection: 'column' }} key={col?.alt}>
                        <div className='flex-1 center'>
                            <img src={col?.img} alt={col?.alt} className='character' />
                        </div>
                        <div className='flex-1 bold description' dangerouslySetInnerHTML={{__html:col?.description}}></div>
                        <div className='flex-1 center'>
                            <img src={col?.glass} alt={col?.alt} className='glasses'/>
                        </div>
                        <div className='flex-1 center'>
                            <button className='button'>buy now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </main>
);

export default Products;

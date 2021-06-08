import { FC } from 'react';
import './index.css';

interface CollectionsInterface {
    title: string;
    background: any;
}

const Collections:FC<CollectionsInterface> = ({ title, background }) => (
    <div className='position-relative collections display-flex' style={{ background: `url(${background})` }}>
        <div className='flex-1 text-center'>
            <div className='collections-title'>
                {title}
            </div>
            <button className='button'>view collection</button>
        </div>
        <div className='flex-1'></div>
    </div>
);

export default Collections;

import { FC } from 'react';
import './index.css';

interface TermsInterface {
    title: string;
    description: string;
}

const Terms:FC<TermsInterface> = ({ title, description }) => (
    <div className='terms'>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: description }} className='list'></div>
    </div>
);

export default Terms;

import { FC } from 'react';
import './index.css';

interface ContactInterface {
    title: string;
    description: string;
    email: string;
    mobile: string;
}
const Contact:FC<ContactInterface> = ({ title, description, email, mobile }) => (
    <div className='contact'>
        <div className='title'>{title}</div>
        <div className='display-flex content flex-wrap'>
            <div className='description'>{description}</div>
            <div className='buttons display-flex'>
                <button className='flex-1 contact-button'>
                    <div>Email Us</div>
                    <div>{email}</div>
                </button>
                <button className='flex-1 contact-button'>
                    <div>Call Us</div>
                    <div>{mobile}</div>
                </button>
            </div>
        </div>
    </div>
);

export default Contact;

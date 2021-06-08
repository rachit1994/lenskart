import Background from 'assests/bg.jpeg';
import Logo from 'assests/mirzapurLogo.png';
import Glass1 from 'assests/glass1.png';
import Glass2 from 'assests/glass2.png';
import Glass3 from 'assests/glass3.png';
import Glass4 from 'assests/glass4.png';
import Akhandananad from 'assests/Akhandananad.jpeg';
import Munna from 'assests/munna.jpeg';
import Maurya from 'assests/maurya.jpg';
import City from 'assests/city.jpeg';

// ideally images should be uploaded to s3 and urls should be used here to avoid imports
const dummy = [
    {
        _uid: 1,
        template: 'Banner',
        background: Background,
        logo: Logo,
        product: {
            title: 'mirzapur inspired sunglasses',
            img: Glass1
        },
        title: 'Shop the Mirzapur Collection & 20 Lucky Winners per day to win Amazon Fire TV Stick',
    },
    {
        _uid: 2,
        template: 'Products',
        title: 'BOLD, DARING & STURDY',
        subTitle: 'These Pilots are perfect for that Grunge Look',
        column: [
            {
                img: Akhandananad,
                description: "<p>The iron-fisted <span style='color: red'>Akhandananad Tripathi</span> is a millionair carpet exporter and the mafia don of mirzapur</p>",
                glass: Glass2,
                alt: 'Akhandananad'
            },
            {
                img: Munna,
                description: "<p>The iron-fisted <span style='color: red'>Akhandananad Tripathi</span> is a millionair carpet exporter and the mafia don of mirzapur</p>",
                glass: Glass3,
                alt: 'Munna'
            },
            {
                img: Maurya,
                description: "<p>The iron-fisted <span style='color: red'>Akhandananad Tripathi</span> is a millionair carpet exporter and the mafia don of mirzapur</p>",
                glass: Glass4,
                alt: 'Maurya'
            }
        ]
    },
    {
        _uid: 3,
        template: 'Collections',
        title: 'Shop the Mirzapur Collection & 20 Lucky Winners per day to win Amazon Fire TV Stick',
        background: Background,
    },
    {
        _uid: 4,
        template: 'Terms',
        title: 'Terms & Conditions of the Contest',
        description: `
            <ol>
                <li> 20 Lucky winners everyday will be selected at random </li>
                <li> Winners will be informed within 24 hours of order </li>
                <li> Complimentary Amazon Fire TV Stick CODE </li>
                <li> The coupon code is redeemable </li>
                <li> The purchase needs to be made from mirzapur inspired sunglasses </li>
                <li> 20 Lucky winners everyday will be selected at random </li>
                <li> 20 Lucky winners everyday will be selected at random </li>
                <li> In case of failure follow <a href="#">Amazon's T&C</a> </li>
                <li> For after sales service follow <a href="#">Amazon's T&C</a>  </li>
            </ol>
        `
    },
    {
        _uid: 5,
        template: 'Contact',
        title: 'Looking for help?',
        description: 'We are available by phone Monday to Sunday from 9AM to 8PM. Please feel free to call us if you have any query',
        email: 'support@lenskart.com',
        mobile: '99998 99998'
    },
    {
        _uid: 6,
        template: 'Footer',
        img: City
    }
];

export default dummy;
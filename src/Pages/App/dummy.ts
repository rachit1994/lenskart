import Background from 'assests/bg.jpeg';
import Logo from 'assests/mirzapurLogo.png';
import Glass1 from 'assests/glass1.png';
import Glass2 from 'assests/glass2.png';
import Glass3 from 'assests/glass3.png';
import Glass4 from 'assests/glass4.png';
import Akhandananad from 'assests/Akhandananad.jpeg';
import Munna from 'assests/munna.jpeg';
import Maurya from 'assests/maurya.jpg';

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
        }
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
                glass: Glass2
            },
            {
                img: Munna,
                description: "<p>The iron-fisted <span style='color: red'>Akhandananad Tripathi</span> is a millionair carpet exporter and the mafia don of mirzapur</p>",
                glass: Glass3
            },
            {
                img: Maurya,
                description: "<p>The iron-fisted <span style='color: red'>Akhandananad Tripathi</span> is a millionair carpet exporter and the mafia don of mirzapur</p>",
                glass: Glass4
            }
        ]
    },
    {
        _uid: 3,
        template: 'Collections',
        title: 'Shop the Mirzapur Collection & 20 Lucky Winners per day to win Amazon Fire TV Stick'
    }
];

export default dummy;
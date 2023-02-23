import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import akshar from './team/akshar2.jpg';
import harshal from './team/harshal.jpg';
import karika from './team/karika.jpg';
import viren from './team/viren.jpg';
import juhi from './team/juhi.jpg';
import ishika from './team/ishika.jpg';
import bhaveshsir from './team/bhaveshsir.jpg'
import maitriksir from './team/maitriksir.jpg'


const data = [
    {
        id: 1,
        name: 'Prof Maitrik Shah',
        position: 'Project Guide',
        image: maitriksir,
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
   
    {
        id: 2,
        name: 'Prof Bhavesh Oza',
        position: 'Project Guide',
        image: bhaveshsir,
        links: [
            { icon: <AiFillLinkedin />, url: '#' },
            { icon: <AiFillGithub />, url: '#' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },

    {
        id: 3,
        name: 'Akshar Bhalani',
        position: 'Full-Stack Developer',
        image: akshar,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/akshar-bhalani1277' },
            { icon: <AiFillGithub />, url: 'https://github.com/akshar1277' },
            { icon: <AiFillTwitterCircle />, url: 'https://twitter.com/b_akshar' },
        ],
    },
    {
        id: 4,
        name: 'Harshal Kahar',
        position: 'Full-Stack Developer',
        image: harshal,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/harshal-kahar-4115a321b' },
            { icon: <AiFillGithub />, url: 'https://github.com/harshal255' },
            { icon: <AiFillTwitterCircle />, url: 'https://twitter.com/harshalkahar389' },
        ],
    },
    {
        id: 5,
        name: 'Karika Patel',
        position: '.',
        image: karika,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/karika-patel-435b26223' },
            { icon: <AiFillGithub />, url: 'https://github.com/karikapatel29' },
            { icon: <AiFillTwitterCircle />, url: 'https://mobile.twitter.com/karika_patel' },
        ],
    },
    {
        id: 6,
        name: 'Viren Goswami',
        position: '.',
        image: viren,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/viren-goswami-284572221' },
            { icon: <AiFillGithub />, url: 'https://github.com/Viren2003' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 7,
        name: 'Juhi Sodha',
        position: '.',
        image: juhi,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://github.com/juhisodha' },
            { icon: <AiFillGithub />, url: 'http://www.linkedin.com/in/juhi-sodha-510188225' },
            { icon: <AiFillTwitterCircle />, url: '#' },
        ],
    },
    {
        id: 8,
        name: 'Ishika Patel',
        position: '.',
        image: ishika,
        links: [
            { icon: <AiFillLinkedin />, url: 'https://www.linkedin.com/in/ishika-patel-8a0161210/' },
            { icon: <AiFillGithub />, url: 'https://github.com/ishi2409' },
            { icon: <AiFillTwitterCircle />, url: 'https://twitter.com/Ishika_2409' },
        ],
    },

];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // prevArrow: <button className="slick-prev slick-arrow">Previous</button>,
        // nextArrow: <button className="slick-next slick-arrow">Next</button>
    };

    return (
        <Slider {...settings}>





            {data.map((item) => {
                return <div key={item.id} className="lg:col-span-3 md:col-span-6 p-1 ">
                    <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                        <img
                            src={item.image}
                            className="h-32 w-32 rounded-full shadow-md dark:shadow-gray-800 m-auto m-auto"
                            alt=""
                        />

                        <div className="content mt-4">
                            <a
                                href="#"
                                className="text-lg font-medium hover:text-indigo-600 block"
                            >
                                {item.name}
                            </a>
                            <span className="text-slate-400 block">{item.position}</span>

                            {/* <p className="text-slate-400 mt-4">
                                If the distribution of letters and 'words' is random
                            </p> */}

                            <ul className="list-none mt-4">
                                {item.links.map((link, index) => (
                                    <li className="inline mx-1" key={index}>
                                        <a
                                            href={link.url}
                                            className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                                        >
                                            {link.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            }
            )}


        </Slider>
    );
};

export default ImageSlider;

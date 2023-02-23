import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import ImageSlider from './ImageSlider';







const Team = () => {
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pb-24 pb-0">
                <div className='container'>
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                        <p className="text-slate-400 w-5/6 mx-auto text-justify">The team behind our project is a dedicated and passionate group of individuals with diverse backgrounds and skillsets. We believe that collaboration and teamwork are essential to creating innovative and impactful solutions. Each member of our team brings unique expertise and perspective to the table, allowing us to approach challenges from multiple angles and come up with creative solutions. Our team is committed to delivering high-quality work and exceeding expectations. We are excited to work together and make a positive impact with our project.</p>
                    </div>

                    <ImageSlider></ImageSlider>
                </div>


            </section>

        </>
    )
}

export default Team
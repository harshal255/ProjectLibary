import React, { useState } from 'react'
import DepartmentsVideo from './DepartmentsVideo'
import { useContext } from 'react';
import ChartContext from '../../context/ChartContext';

const Hero = () => {
    let { setHfilter } = useContext(ChartContext);
    const [searchform, setSearchform] = useState({ search: "" });
    const { search } = searchform;

    const handlesearchsubmit = (event) => {
        event.preventDefault();
        setHfilter(searchform.search.toLowerCase())

    };
    const handlesearch = (event) => {
        // event.preventDefault();
        const { name, value } = event.target;
        setSearchform({ ...searchform, [name]: value });
    };
    return (
        <>

            {/* <section className="relative table w-full  py-44 bg-[url('../../assets/images/helpcenter.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Hello ! <br /> How can we help you?</h3>

                        <div className="text-center subcribe-form mt-4 pt-2">
                            <form className="relative mx-auto max-w-xl">
                                <input type="text" id="help" name="name" className=" input ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic..." />
                                <button type="submit" className="btn absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full searchButton">Search</button>
                            </form>
                        </div>
                    </div>
                </div>


            </section>
            <div className="relative">
                <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div> */}

            <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Search Project Whatever You Want </h3>
                        <div className="text-center subcribe-form mt-4 pt-2">
                            <form onSubmit={(e) => handlesearchsubmit(e)} className="relative mx-auto max-w-xl">
                                <input type="text" name="search"
                                    value={search}
                                    onChange={handlesearch} id="help" className=" input ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" placeholder="Search your questions or topic..." />
                                <button type="button"
                                    onClick={handlesearchsubmit} className="btn absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full searchButton">Search</button>
                            </form>
                        </div>
                    </div>
                </div> 


            </section>
            <div className="relative">
                <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>






        </>
    )
}

export default Hero
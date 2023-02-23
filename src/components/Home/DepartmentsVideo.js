import React from 'react'
import { BsPlayCircle } from 'react-icons/bs';

const DepartmentsVideo = () => {
    return (
        <>
        


            <div className="container md:mt-24 mt-16 mb-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-28">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <img src="https://res.cloudinary.com/dlsxq98fr/image/upload/v1676737018/compress_department_ja3mpg.png" className="mx-auto" alt="10" />
                            <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="https://drive.google.com/file/d/1PQDj4Nf4q-V3TKBJgdEsD8g6zWqzl646/view?usp=share_link" target="_blank" data-type="youtube" data-id="yba7hPeTSjk"
                                    className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white">

                                    <BsPlayCircle className='text-5xl inline-flex items-center justify-center '></BsPlayCircle>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="ltr:lg:ml-4 rtl:lg:mr-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">Department of <br /> Computer Engineering </h4>
                            <p className="text-slate-400 max-w-xl">Computer Engineers venture into various fields such as web-development, Computer Support Specialist, Computer Systems Analyst ,Computer Systems Designer, Database Administrator, Network Administrator and much more. Future opportunities in this field are beyond boundaries. Computer Engineering Department in L.D.C.E covers a wide spectrum of topics in data communication, computer networking, operating systems, microprocessor programming and applications, parallel processing, compiler design, system programming, software engineering, simulation and modeling, distributed systems, graphics and image processing, various packages and softwares like ORACLE, JAVA, VC++ etc. </p>


                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DepartmentsVideo
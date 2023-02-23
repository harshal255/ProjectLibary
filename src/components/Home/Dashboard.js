import React from 'react'
import './Dashboard.css'
import Pie1 from './Charts/Pie1';
import Pie2 from './Charts/Pie2';
import BarChart from './Charts/BarChart';
import { GrProjects } from 'react-icons/gr';
import Box from './Charts/Box';

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 pb-8 text-center pt-14 dashboardheading">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Welcome to the Project Library.</h3>

                <p className="text-slate-400 w-2/3 mx-auto">This Plateform is designed to showcase the projects completed by students in the Computer Department. This platform offers a comprehensive collection of projects that were completed by our talented students over the years.</p>
            </div>

            <div className="dashboard">

                <div className="boxes">


                    <Box type="Projects"></Box>
                    <Box type="UDP"></Box>
                    <Box type="IDP"></Box>
                    <div className="box">

                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-gray-600'>Project Area</div>
                                <div className='text-3xl'>9</div>
                            </div>
                            <div className='m-4 text-2xl'>

                                <GrProjects></GrProjects>


                            </div>
                        </div>


                    </div>


                </div>

                <div className="pie">
                    <div className="chart">Pie Chart (Language wise)
                        <Pie1></Pie1>


                    </div>
                    <div className="chart">Pie chart (Project Area wise)
                        <Pie2></Pie2></div>
                </div>
                <div className="bar">
                    <div className="bar-chart">
                        Academic Year Wise BarChart
                        <BarChart></BarChart>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
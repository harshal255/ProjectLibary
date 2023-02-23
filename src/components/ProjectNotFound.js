import React from 'react'
import './AllProjects/Project.css';

const ProjectNotFound = () => {
    return (

        <>

            <div className="flex flex-col mb-20 projectnotfound">
                <div className="flex-grow"></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Project Not Found</h1>
                    <p className="text-xl text-gray-600 mb-8">The Project you are looking for cannot be found.</p>
                    <a href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Back to Home</a>
                </div>
                <div className="flex-grow"></div>
            </div>


        </>
    )
}

export default ProjectNotFound
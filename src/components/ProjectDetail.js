import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Header from "./Header";

const ProjectDetail = () => {
  const { betch, id } = useParams();

  const [data, setdata] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    let projectdata = async () => {
      await fetch(
        `https://department-website.onrender.com/Project_${betch}/${id}`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonres) => {
          setdata(jsonres);
        });
    };
    projectdata();


  }, [betch, id]);

  // let language_array = data["Langauge"].split(", ");
  // console.log(language_array);

  // language_array.forEach((language) => {
  //   console.log(language);

  // })



  return (
    <>
      <Header />
      <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            {/* Right Side */}
            <div className="lg:col-span-8 md:col-span-6">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <img
                  src={data.Preview_URL}
                  className="rounded-md"
                  alt={data.Project_name}
                />

                <div className="text-center mt-12">
                  <span className="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">
                    {data.Project_id}
                  </span>
                  <h3 className="my-3 text-[26px] font-semibold">
                    {data.Project_name}
                  </h3>

                  <ul className="list-none mt-6">
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Batch :
                      </span>{" "}
                      <span className="block">{data.Batch}</span>
                    </li>
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Leader name :
                      </span>{" "}
                      <span className="block">{data.Leader_name}</span>
                    </li>
                    <li className="inline-block font-semibold text-slate-400 mx-4">
                      {" "}
                      <span className="text-slate-900 dark:text-white block">
                        Internal Guide :
                      </span>{" "}
                      <span className="block">{data.Internal_guide}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-slate-400">
                    {data.Abstract}
                  </p>

                </div>
              </div>
            </div>

            {/* Left side */}

            <div className="lg:col-span-4 md:col-span-6">
              <div className="lg:col-span-4 md:col-span-5">
                <div className="sticky top-20">
                  <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                    Project Info :
                  </h5>
                  <dl className="grid grid-cols-12 mb-0 mt-4">
                    <dt className="md:col-span-4 col-span-5 mt-2">Academic Year:</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Batch}
                    </dd>

                    <dt className="md:col-span-4 col-span-5 mt-2">Project type:</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Project_type}
                    </dd>

                    <dt className="md:col-span-4 col-span-5 mt-2">Project Area:</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Project_area}
                    </dd>

                    <dt className="md:col-span-4 col-span-5 mt-2">Internal guide :</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Internal_guide}
                    </dd>

                    <dt className="md:col-span-4 col-span-5 mt-2">Leader name :</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Leader_name}
                    </dd>
                    <dt className="md:col-span-4 col-span-5 mt-2">Leader Email :</dt>
                    <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">
                      {data.Leader_email}
                    </dd>
                  </dl>

                  <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                    Languages :
                  </h5>



                  {data.Langauge && (
                    <ul className="list-none text-center mt-6">
                      {data.Langauge.split(",").map((language) => (
                        <li key={language} className="inline-block m-2">
                          <a className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                            {language}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                    Download :
                  </h5>
                  <div className="flex p-4 justify-around">
                    <div>
                      <a href={data.Poster_URL} target="_blank" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Poster
                      </a>
                    </div>
                    <div>
                      <a href={data.Document_URL} target="_blank" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Report
                      </a>
                    </div>
                    <div>
                      <a href={data.Video_URL} target="_blank" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md cursor-pointer">
                        Video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;

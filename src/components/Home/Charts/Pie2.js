import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts';
// import data from './data.json';
import axios from "axios";
// import ChartContext from '../../../context/ChartContext';
import ChartContext from '../../../context/ChartContext'
import { useContext } from 'react';

const Pie2 = () => {
    let { setfilter } = useContext(ChartContext)

    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [data, setData] = useState([]);

    const data01 = [
        {
            "Project_area": "AI/Machine Learning/Data Mining",

        },
        {
            "Project_area": "IoT",

        },
        {
            "Project_area": "Website/Online Portal",

        },
        {
            "Project_area": "Natural Language Processing",

        },
        {
            "Project_area": "Mobile Application",

        },
        {
            "Project_area": "PERSON RE-IDENTIFICATION",

        },
        {
            "Project_area": "Image Processing",

        },
        {
            "Project_area": "HealthCare/Medical",

        },
        {
            "Project_area": "Robotics",

        }

    ];

    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"



    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {
        // getMyPostData();
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            // console.log(responses)
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);


    const count_fre = (Area) => {
        let count = 0;
        data.map((datas) => {


            if (datas.Project_area.includes(Area)) {

                count += 1;
            }
        })
        return count

    }

    const chartdata = []
    // console.log(typeof chartdata);
    // eslint-disable-next-line array-callback-return
    data01.map((data01) => { chartdata.push({ 'Project_area': data01.Project_area, 'value': count_fre(data01.Project_area) }) })

    return (
        <>
            {/* <div>Pie2</div> */}
            {isError !== "" && <h2>{isError}</h2>}

            <Chart type='pie' className="pie hover:cursor-pointer" series={chartdata.map((data) => data.value)}
                options={{
                    chart: {
                        type: 'pie',
                        width: '100%',
                        height: '100%',
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: '50%'
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    },
                    labels: chartdata.map((data) => data.Project_area),


                    chart: {
                        events: {
                            dataPointSelection: (event, chartContext, config) => {
                                switch (config.w.config.labels[config.dataPointIndex]) {
                                    case 'AI/Machine Learning/Data Mining':
                                        setfilter('AI/Machine Learning/Data Mining');
                                        break;
                                    case 'IoT':
                                        setfilter('IoT');
                                        break;
                                    case 'Website/Online Portal':
                                        setfilter('Website/Online Portal');
                                        break;
                                    case 'Natural Language Processing':
                                        setfilter('Natural Language Processing');
                                        break;
                                    case 'Mobile Application':
                                        setfilter('Mobile Application');
                                        break;
                                    case 'PERSON RE-IDENTIFICATION':
                                        setfilter('PERSON RE-IDENTIFICATION');
                                        break;
                                    case 'Image Processing':
                                        setfilter('Image Processing');
                                        break;
                                    case 'HealthCare/Medical':
                                        setfilter('HealthCare/Medical');
                                        break;
                                    case 'Robotics':
                                        setfilter('Robotics');
                                        break;

                                }
                            }
                        }
                    },
                }}
            >
            </Chart>
        </>
    )
}

export default Pie2
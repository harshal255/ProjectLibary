import React, { useState, useEffect } from 'react'
import axios from "axios";
import { GrProjects } from 'react-icons/gr';

const Box = ({ type }) => {

    const [UserData, setUserData] = useState([]);
    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");


    let data;
    const amount = 130;


    function count_projects(project_type) {
        let cnt = 0;
        UserData.map((info) => { if (info.Project_type === project_type) cnt += 1; });
        return cnt;
    }
    let UDP_projects = count_projects("UDP"), IDP_projects = count_projects("IDP");


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
            setUserData(responseData)


        })).catch((error) => setIsError(error.message));
    }, []);

    switch (type) {
        case "Projects":
            data = {
                title: "Projects",
                isMoney: false,
                link: "see all Students",
                // amount: IDP_projects + UDP_projects,
                amount: 89

            };
            break;
        case "IDP":
            data = {
                title: "IDP",
                isMoney: false,
                // amount: IDP_projects,
                amount: 74,
                fullform: "Industry Defined Project"

            };
            break;
        case "UDP":
            data = {
                title: "UDP",
                isMoney: false,
                // amount: UDP_projects,
                amount: 15,
                fullform: "User Defined Project"
            };
            break;
        default:
            break;

    }

    return (
        <div className="box">

            <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='text-gray-600 '>{data.title}</div>
                    <div className='text-3xl'>{data.amount}</div>
                </div>
                <div className='m-4 text-2xl'>

                    <GrProjects></GrProjects>


                </div>
            </div>


        </div>
    )
}

export default Box
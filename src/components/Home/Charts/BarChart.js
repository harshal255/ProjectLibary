import React, { useState, useEffect } from 'react';
import axios from "axios";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
    const [myData, setMyData] = useState([]);
    const [myData2, setMyData2] = useState([]);
    const [isError, setIsError] = useState("");
    const [userData, setUserData] = useState([]);

    let batches = [];
    userData.map((info) => {
        if (!batches.includes(info.Batch)) {
            batches.push(info.Batch);
        }
    });

    function sortByProperty(property) {
        return function (a, b) {
            if (a[property] > b[property]) return 1;
            else if (a[property] < b[property]) return -1;
            return 0;
        }
    }

    function count_frq(project_type, batch) {
        let cnt = 0;
        userData.map((info) => {
            if (info.Project_type === project_type && info.Batch === batch) cnt += 1;
        })
        return cnt;
    }

    const data = [];
    batches.map((batch) => { data.push({ 'batch': batch, 'udp': count_frq('UDP', batch), 'idp': count_frq('IDP', batch) }) });
    data.sort(sortByProperty('batch'));

    const chartOptions = {
        chart: {
            type: 'bar',
            // width: '600', // Set the width of the chart to 600 pixels
            // height: 350,
            toolbar: {
                show: false,
            },


        },
        stroke: {
            colors: ['transparent'],
            width: 4,
        },
        xaxis: {
            categories: data.map((info) => info.batch),
        },
        colors: ['#475BE8', '#CFC8FF'],
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: true,
                columnWidth: '20%',

            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        series: [{
            name: 'UDP',
            data: data.map((info) => info.udp),
        },
        {
            name: 'IDP',
            data: data.map((info) => info.idp),
        }],

        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
    };

    let first = "https://department-website.onrender.com/Project_2019-2020/?format=json"
    let second = "https://department-website.onrender.com/Project_2020-2021/?format=json"

    const res = axios.get(first);
    const res2 = axios.get(second);

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.all([res, res2]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseData = [...responseOne.data, ...responseTwo.data]

            setMyData(responseOne.data)
            setMyData2(responseTwo.data)
            setUserData(responseData)

        })).catch((error) => setIsError(error.message));
    }, []);

    return (
        <div>
            <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={300} />
        </div>
    );
}

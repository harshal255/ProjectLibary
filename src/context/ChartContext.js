import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ChartContext = createContext()

export default ChartContext;

export const ChartProvider = ({children}) => {

    let [languages,setLanguages]=useState('');
    let [hsearch,setHsearch]=useState('');
    let [filteredData,setFilteredData]=useState([]);
    let [yfilteredData,setYFilteredData]=useState([]);

    let [gfilteredData,setGFilteredData]=useState([]);
    let [afilteredData,setAFilteredData]=useState([]);

    const navigate = useNavigate();

    let setFData=(f)=>{
        setFilteredData(f);
    }
    
    let setYFData=(f)=>{
        setYFilteredData(f);
    }
    
    let setGFData=(f)=>{
        setGFilteredData(f);
    }
    
    let setAFData=(f)=>{
        setAFilteredData(f);
    }

    let setfilter=(lang)=>{
        setLanguages(lang);
        navigate('/allprojects')

    }

    let setHfilter=(Hsearch)=>{
        setHsearch(Hsearch);
        navigate('/allprojects')

    }
    let contextData = {
        languages:languages,
        setfilter:setfilter,
        hsearch:hsearch,
        setHfilter:setHfilter,
        filteredData:filteredData,
        setFData:setFData,
        yfilteredData:yfilteredData,
        setYFData:setYFData,
        gfilteredData:gfilteredData,
        setGFData:setGFData,
        afilteredData:afilteredData,
        setAFData:setAFData,


        
    }
    return(
        <ChartContext.Provider value={contextData} >
            {children}
        </ChartContext.Provider>
    )

}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import ChartContext from "../../context/ChartContext";
import { useParams } from "react-router-dom";
import './Project.css';
import ProjectNotFound from "../ProjectNotFound";
import { GrFormPrevious } from 'react-icons/gr';
import { GrFormNext } from 'react-icons/gr';




const Project = () => {
  let { languages, setfilter, yfilteredData, setYFData } = useContext(ChartContext);
  const { fbetch } = useParams();

  const key='AIzaSyA7YULueLE-e7mIO2uc6u4WOVBadOayXPA';


  const buttonStyle = {
    background: "linear-gradient(#009FFD, #2A2A72)",
    color: "#fff",
  };
  const spanStyle = {
    color: "#fff",
  };

  const [myData, setMyData] = useState([]);
  const [myData2, setMyData2] = useState([]);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(9);
  const [notfound, setNotfound] = useState(false);


  //this is for react paginate
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  //Let one usestate for filterdata

  const [OriginalData, setOriginalData] = useState([]);
  const [query, setQuery] = useState("");

  //modal filter
  const [formdata, setFormdata] = useState({
    batch: "",
    type: "",
    area: "",
    language: "",
    professor: "",
  });
  const { batch, type, area, language, professor } = formdata;

  //search data
  const [searchform, setSearchform] = useState({ search: "" });
  const { search } = searchform;

  //Let 2 variable to store api for multiple api roting

  let first =
    "https://department-website.onrender.com/Project_2019-2020/?format=json";
  let second =
    "https://department-website.onrender.com/Project_2020-2021/?format=json";

  const res = axios.get(first);
  const res2 = axios.get(second);

  const handlesearchsubmit = (event) => {
    event.preventDefault();
    const filters2 = {
      search: searchform.search.toLowerCase(),
    };

    // console.log(getSearch);

    const searchdata = OriginalData.filter(
      (item) =>
        item.Project_name.toLowerCase().includes(filters2.search) ||
        item.Batch.toString().includes(filters2.search.toString()) ||
        item.Abstract.toLowerCase().includes(filters2.search) ||
        item.Internal_guide.toLowerCase().includes(filters2.search) ||
        item.Leader_name.toLowerCase().includes(filters2.search) ||
        item.Project_type.toLowerCase().includes(filters2.search) ||
        item.Langauge.toLowerCase().includes(filters2.search) ||
        item.Project_area.toLowerCase().includes(filters2.search)
    );

    setData(searchdata);
    setYFData(searchdata);
    searchdata.length === 0 ? setNotfound(true) : setNotfound(false);

  };
  //this is for filter by chart click
  const searchbyBetch = (l, rdata) => {
    const filters3 = {
      search2: l.toLowerCase(),
    };

    // console.log(getSearch);

    const searchdata2 = rdata.filter(
      (item) =>
        item.Batch.toString().includes(filters3.search2.toString())
    );
    setOriginalData(searchdata2);
    setData(searchdata2);
    setYFData(searchdata2);

  };

  //for filter
  const handlesearch = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setSearchform({ ...searchform, [name]: value });
  };

  const handleChangeInput = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    console.log(name,value.toLowerCase());
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filters = {
      batch: formdata.batch.toString(),
      type: formdata.type.toLowerCase(),
      area: formdata.area.toLowerCase(),
      language: formdata.language.toLowerCase(),
      professor: formdata.professor.toLowerCase(),
    };

    const out = OriginalData.filter(
      (item) =>
        item.Batch.toString().includes(filters.batch) &&
        item.Project_type.toLowerCase().includes(filters.type) &&
        item.Project_area.toLowerCase().includes(filters.area) &&
        item.Langauge.toLowerCase().includes(filters.language) &&
        item.Internal_guide.toLowerCase().includes(filters.professor)
    );

    setData(out);
    setYFData(out);
    out.length === 0 ? setNotfound(true) : setNotfound(false);
    setShowModal(false);
  };

  // NOTE:  calling the function
  useEffect(() => {
    // getMyPostData();
    window.scrollTo(0, 0);

    axios
      .all([res, res2])
      .then(
        axios.spread((...responses) => {
          // console.log(responses)
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responseData = [...responseOne.data, ...responseTwo.data];

          setMyData(responseOne.data);
          setMyData2(responseTwo.data);

          const filters3 = {
            search2: fbetch.toLowerCase(),
          };

          // console.log(getSearch);

          const searchdata2 = responseData.filter(
            (item) =>
              item.Batch.toString().includes(filters3.search2.toString())
          );
          if (yfilteredData.length === 0) {
            setData(searchdata2);


          }
          else if (yfilteredData.length != 0) {

            setData(yfilteredData);

          }
          setOriginalData(searchdata2);
          // setData(searchdata2);


        })
      )
      .catch((error) => setIsError(error.message));
  }, [fbetch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  // for modal
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove('blur');

  }

  const handleOpenModal = () => {
    setShowModal(true);

    // document.body.classList.add('overflow');


  }


  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.className === "modal") {
        setShowModal(false);
        // document.body.classList.remove('overflow');



      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  return (
    <>
      <section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">All Projects
            </h3>
            <div className="text-center subcribe-form mt-4 pt-2">
              <form
                onSubmit={(e) => handlesearchsubmit(e)}
                className="relative mx-auto max-w-xl"
              >
                <input
                  type="text"
                  id="help"
                  className=" input ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700"
                  placeholder="Search your questions or topic..."
                  name="search"
                  value={search}
                  onChange={handlesearch}
                />
                <button
                  type="button"
                  onClick={handlesearchsubmit}
                  className="btn absolute top-[2px] ltr:right-[3px] rtl:left-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full searchButton"
                >
                  Search
                </button>
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

      <div>

        {/* Modal Button */}

        <div className="grid grid-cols-1 m-4 ml-10">

          <button type="submit" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-52" onClick={handleOpenModal}>Filter Your Search</button>
        </div>

        {showModal &&
          <div className="modal">
            <div className="modal-content">
              <span className="close -mt-5" onClick={handleCloseModal}>&times;</span>


              <div className="section-title ">

                <h4 className="text-1xl font-semibold uppercase">Filter your Projects</h4>

              </div>

              <form onSubmit={e => handleSubmit(e)}>
                <div className="grid md:grid-cols-2 gap-8 mt-6 px-8">
                  <div className="flex flex-col">
                    <label className="font-semibold">Select Batch</label>


                    <select name='batch' value={batch} onChange={handleChangeInput} className="form-select mt-2">
                      <option value="">Select Batch</option>
                      <option value="2019-2020">2019-20</option>
                      <option value="2020-2021">2020-21</option>


                    </select>





                  </div>

                  <div className="flex flex-col">
                    <label className="font-semibold">Project Type</label>

                    <select name='type' value={type} onChange={handleChangeInput} className="form-select mt-2">
                      <option value="">Select Project Type</option>
                      <option value="UDP">IDP</option>
                      <option value="IDP" >UDP</option>

                    </select>



                  </div>



                  <div className="flex flex-col">
                    <label className="font-semibold">Project Area</label>


                    <select name='area' value={area} onChange={handleChangeInput} className="form-select mt-2">

                      <option value=" ">Select Project Area</option>
                      <option value="Application">Application</option>
                      <option value="Application Software">Application Software
                      </option>
                      <option value="Computer Vision">Computer Vision</option>
                      <option value="Data Science/ Data Mining">Data Science/ Data Mining
                      </option>
                      <option value="Desktop Application">Desktop Application
                      </option>
                      <option value="Holographic Technology">Holographic Technology
                      </option>
                      <option value="Image Processing using AI">Image Processing using AI
                      </option>
                      <option value="IOT">IOT</option>
                      <option value="Mobile App">Mobile App
                      </option>
                      <option value="Natural Language Processing">Natural Language Processing
                      </option>

                      <option value="Network Security">Network Security
                      </option>
                      <option value="Portal">Portal
                      </option>
                      <option value="Software">Software</option>
                      <option value="Website">Website</option>


                    </select>


                  </div>


                  <div className="flex flex-col">
                    <label className="font-semibold">language</label>

                    <select name='language' value={language} onChange={handleChangeInput} className="form-select mt-2">
                      <option value=" ">Select Language</option>
                      <option value="Android">Android</option>
                      <option value="C/C++">C/C++</option>
                      <option value="Flutter">Flutter</option>
                      <option value="HTML">HTML</option>
                      <option value="IOS">IOS</option>
                      <option value="JAVA">JAVA</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="Node JS">Node JS</option>
                      <option value="Python">Python</option>
                      <option value="PHP">PHP</option>
                    </select>


                  </div>


                  <div className="flex flex-col">
                    <label className="font-semibold">Professor Name</label>


                    <select name='professor' value={professor} onChange={handleChangeInput} className="form-select mt-2 start">
                      <option value=" ">Select Professor Name</option>

                      <option value="bhavesh oza">Prof Bhavesh Oza
                      </option>

                      <option value="hetal pandya">Prof Hetal Pandya
                      </option>
                      <option value="hetal joshiyara">Prof Hetal joshiyara
                      </option>
                      <option value="hetal ghevariya">Prof Hetal Gevariya
                      </option>
                      <option value="hitesh rajpoot">Prof Hitesh Rajpoot
                      </option>

                      <option value="jay dave">Prof Jay Dave
                      </option>
                      <option value="kalpesh patel">Prof Kalpesh Patel
                      </option>

                      <option value="maitrik shah">Prof Maitrik Shah
                      </option>
                      <option value="tushar champaneria">Prof Tushar Champaneria
                      </option>
                      <option value="nikunj domadiya">Prof Nikunj Domadiya
                      </option>
                      <option value="pragnesh patel">Prof Pragnesh Patel
                      </option>
                      <option value="pinal salot">Prof Pinal Salot
                      </option>
                      <option value="parth dave">Prof Parth Dave
                      </option>
                      <option value="dutta mam">POOJA Dutta Mam
                      </option>


                      <option value="rjayswal">Prof R. Jayswal
                      </option>
                      <option value="yogesh patel">Prof Yogesh Patel
                      </option>
                    </select>


                  </div>

                  <div className="grid grid-cols-1">
                    <button type="submit" onClick={e => handleSubmit(e)} className="btn h-10 text-center item-center justify-content-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-60 mx-auto mt-7">Find Your Project</button>

                  </div>




                </div>




              </form>
              {/* </div> */}


            </div>
          </div>
        }
      </div>







      {isError !== "" && <h1>{isError}</h1>}
      <div className="container md:mt-24 mt-16 mb-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {currentItems &&
            currentItems.map((post) => {
              const {
                Batch,
                id,
                Project_id,
                Project_name,
                Abstract,
                Project_area,
                Langauge,
                Leader_enroll,
                Leader_name,
                Leader_email,
                Internal_guide,
                Preview_URL,
              } = post;
              const key='AIzaSyA7YULueLE-e7mIO2uc6u4WOVBadOayXPA';
              return (
                <div
                  className="group relative rounded hover:-mt-1 shadow hover:shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-300"
                  key={id}
                >
                  <div style={{
                    "height": "234px", "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                  }} className="relative  overflow-hidden">
                    <img style={{ "height": "234px" }} src={`${Preview_URL}&${key}`} alt="" />

                    <div className="absolute p-4 right-0 left-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 transition-all duration-300">
                      <Link to={`/details/${Batch}/${id}`} className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">

                        View More

                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <Link
                      to={`/details/${Batch}/${id}`}
                      className="text-indigo-600  hover:text-indigo-600 text-3xl font-semibold"
                    >
                      {Project_name}
                    </Link>
                    <div className="flex flex-col text-slate-500 mt-2">
                      <div className="text-base text-left">Batch : {Batch}</div>
                      <div className="text-base text-left">
                        Project Area :{Project_area}
                      </div>
                      <div className="text-base text-left">Langauge : {Langauge}</div>
                      <div className="text-base text-left">
                        Internal_guide : {Internal_guide}
                      </div>
                    </div>
                    <p className=" mt-2 text-start">{Abstract.slice(0, 200)}</p>

                    <div className=" pr-4 pt-4 pb-4 pl-0  text-start   ">
                      <Link
                        to={`/details/${Batch}/${id}`}
                        className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}


        </div>
      </div>

      <div className="grid md:grid-cols-12 grid-cols-1 mt-8 mb-16">
        <div className="md:col-span-12 text-center">
          <nav aria-label="Page navigation example">



            <ReactPaginate
              breakLabel="..."
              breakClassName={"w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"}
              nextLabel={<GrFormNext className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1 " />}

              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<GrFormPrevious className="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1 " />}
              renderOnZeroPageCount={null}
              containerClassName={
                "inline-flex items-center -space-x-px"
              }
              nextLinkClassName={"w-[40px] h-[40px] inline-flex justify-center items-center text-indigo-400 bg-white dark:bg-slate-900 ltr:rounded-r-lg rtl:rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"}
              previousLinkClassName={"w-[40px] h-[40px] inline-flex justify-center items-center text-indigo-400 bg-white dark:bg-slate-900 ltr:rounded-l-lg rtl:rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"}
              activeClassName={"z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600"}
              pageClassName={"w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"}

            />
          </nav>
        </div>
      </div>

      {notfound && (<>  <ProjectNotFound /></>)}
    </>
  );
};

export default Project;

import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProjects from "./components/AllProjects/AllProjects";
import ProjectDetail from "./components/ProjectDetail";
import About from "./components/About/About";
import YearWiseAllProjects from "./components/YearWiseProjects/YearWiseAllProjects";
import GuideWiseAllProjects from "./components/GuideWiseProjects/GuideWiseAllProjects";
import AreaWiseAllProjects from "./components/AreaWiseProjects/AreaWiseAllProjects";
import { ChartProvider } from './context/ChartContext'
import ProjectNotFound from "./components/ProjectNotFound";


function App() {
  return (
    <div className="App">

      <ChartProvider>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/notfound" element={<ProjectNotFound></ProjectNotFound>} />
          <Route
            path="/allprojects"
            element={<AllProjects />}
          />
          <Route
            path="/details/:betch/:id"
            element={<ProjectDetail />}
          ></Route>
          <Route
            path="/yearwiseallprojects/:fbetch"
            element={<YearWiseAllProjects></YearWiseAllProjects>}
          ></Route>
          <Route
            path="/guidewiseallprojects/:fname"
            element={<GuideWiseAllProjects></GuideWiseAllProjects>}
          ></Route>
          <Route
            path="/areawiseallprojects/:farea"
            element={<AreaWiseAllProjects></AreaWiseAllProjects>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>

        </Routes>
      </ChartProvider>

    </div>
  );
}

export default App;

import Home from "./componentes/home";
import AboutUs from "./componentes/aboutus";
import solutions from "./componentes/solutions";
import contactus from "./componentes/contactUs";
import processes from "./componentes/processes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () =>(
  <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/processes" Component={processes} />
      <Route path="/aboutus" Component={AboutUs} />
      <Route path="/solutions" Component={solutions} />
      <Route path="/contactus" Component={contactus} />
    </Routes>
  </Router>
)

export default App

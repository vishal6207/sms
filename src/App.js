import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Component/Students/Buspanel/HomePage/HomePage";
import TimeTable from "./Component/Students/TimeTable/Timetable";
import RegistrationForm from "./Component/Students/Buspanel/RegistrationForm/RegistrationForm";
import StudentHome from "./Component/Students/StudentHome/StudentHome";
import FeePanel from "./Component/Students/FeePanel/FeePanel";
import Workspace from "./Component/Students/WorkSpace/Workspace";
import ExaminationPanel from "./Component/Students/examinationpannel/ExaminationPanel";
import CreateRoot from "./Component/Admin/Transport/CreateRoot/CreateRoot";
import BusStop from "./Component/Admin/Transport/BusStop/BusStop";
// import NavBar from "./Component/Students/Buspanel/NavBar/NavBar";
// import Feehead from "./Component/Admin/FeeHead/Feehead";
 

const App = () => {
  return (
    <>  
    <Router>
      
      <Routes>
        <Route path="/" element={<StudentHome />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/examination" element={<ExaminationPanel />} />
        <Route path="/fee-panel" element={<FeePanel />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/bus-route" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* <Route path="/bus-route" element={<NavBar />} /> */}
       

      </Routes>
      {/* <VehicleMaster/> */}
    </Router>
    {/* <CreateRoot />
    <BusStop /> */}
    </>
  );
};

export default App;

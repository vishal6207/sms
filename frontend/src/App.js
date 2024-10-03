import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./Component/LoginForm/LoginForm";
import StudentHome from "./Component/Students/StudentHome/StudentHome";
import TimeTable from "./Component/Students/TimeTable/Timetable";
import ExaminationPanel from "./Component/Students/examinationpannel/ExaminationPanel";
import FeePanel from "./Component/Students/FeePanel/FeePanel";
import Workspace from "./Component/Students/WorkSpace/Workspace";
import HomePage from "./Component/Students/Buspanel/HomePage/HomePage";
import RegistrationForm from "./Component/Students/Buspanel/RegistrationForm/RegistrationForm";
import CreateRoot from "./Component/Admin/Transport/CreateRoot/CreateRoot";
import BusStop from "./Component/Admin/Transport/BusStop/BusStop";
import VehicleMaster from "./Component/Admin/Transport/CreateVehicale/VehicleMaster";
import StudentBusStop from "./Component/Admin/Transport/StudentBusStop/StudentBusStop";
import TeacherSidebar from "./Component/Teacher/TeacherSidebaar/TeacherSidebar";
import Layout from "./Component/Teacher/TeacherSidebaar/LayOut/Layout";
import Navbar from "./Component/Students/Navbar/Navbar";
import "./App.css";
import StudentInfo from "./Component/Students/StudentHome/StudentInfo/StudentInfo";
import Student from "./Component/Teacher/Student/Student";
import NoticeBoard from "./Component/Students/StudentHome/NoticeBoard/NoticeBoard";
import TeacherNotice from './Component/Teacher/TeacherNotice/TeacherNotice'

import Attandance from "./Component/Teacher/Attandance/Attandance";
import Syllabus from "./Component/Students/StudentHome/Syllabus/Syllabus";
import Notes from "./Component/Teacher/Notes/Notes";
import Feedback from "./Component/Teacher/Feedback/Feedback";
import Mark from './Component/Teacher/Mark/Mark'
import Setting from "./Component/Teacher/Setting/Setting";
import Timetable from "./Component/Students/TimeTable/Timetable";
import StudentSylabus from "./Component/Teacher/Sylabus/StudentSylabus";
import Dashbord from "./Component/Teacher/Dashbord/Dashbord";
import StudentLayout from "./Component/Teacher/StudentLayout/StudentLayout";
import TeacherUploadMarks from './Component/Teacher/TeacherUploadMarks/TeacherUploadMarks'
import Subjects from "./Component/Teacher/Subject/Subjects"
import AddStudent from './Component/Admin/AddStudent/AddStudent'
import Exams from "./Component/Teacher/Exams/Exams";
import Attendence from "./Component/Students/Attendence/Attendence";
import StudLayout from "./Component/Students/StudentLayout/StudLayout";
import AdminLayout from "./Component/Admin/AdminLayout/AdminLayout";
import AddTeacher from "./Component/Admin/AddTeachers/AddTeachers";
import TakeAttendence from "./Component/Teacher/TakeAttendence/TakeAttendence";
import AdminSetting from "./Component/Admin/Settingadmin/AdminSetting";
import Busservices from './Component/Admin/Transport/Adminbusadd/Busservices'
import AdminStudent from "./Component/Admin/AdminStudent/AdminStuden";
import Master from "./Component/Admin/Master/Master";


function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [role, setRole] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [theme, setTheme] = useState()


  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  const handleLogin = (userRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            {role === "admin" && (


              <Route path="/admin" element={<AdminLayout />}>

                <Route index element={<Dashbord />} />
                <Route path="master" element={<Master />} />
                <Route path="teacher" element={<AddTeacher />} />
                <Route path="student" element={<AdminStudent />} />
                <Route path="subject" element={<Subjects />} />
                <Route path="Attandance" element={<TakeAttendence />} />
                <Route path="Noticeboard" element={<TeacherNotice />} />
                <Route path="Timetable" element={<TimeTable />} />
                <Route path="sylabus" element={<StudentSylabus />} />
                <Route path="bus-service" element={<VehicleMaster />} />
                <Route path="setting" element={<AdminSetting />} />

              </Route>
            )}
            {role === "Student" && (
              <>
                <Route path="/" element={<StudLayout />}>
                  <Route index element={<StudentHome />} />
                  <Route path="/timetable" element={<TimeTable />} />
                  <Route path="/examination" element={<ExaminationPanel />} />
                  <Route path="/fee-panel" element={<FeePanel />} />
                  <Route path="/workspace" element={<Workspace />} />
                  <Route path="/bus-route" element={<HomePage />} />
                  <Route path="/register" element={<RegistrationForm />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Route>
              </>
            )}
            {role === "Teacher" && (
              <Route path="/teacher" element={<Layout />}>
                <Route index element={<StudentHome />} />
                <Route path="dashbord" element={<Dashbord />} />
                <Route path="student" element={<StudentLayout />}>
                  <Route path="student" element={<AddStudent />} />
                  <Route path="attendence" element={<Attendence />} />
                  <Route path="notice" element={<TeacherNotice />} />
                  <Route path="timetable" element={<Timetable />} />
                  <Route path="sylabus" element={<StudentSylabus />} />
                  <Route path="subject" element={<Subjects />} />
                  <Route path="notes" element={<Notes />} />
                  <Route path="exams" element={<Exams />} />
                  <Route path="mark" element={<TeacherUploadMarks />} />

                </Route>

                <Route path="setting" element={<AdminSetting />} />


              </Route>
            )}
            {role === "Parent" && (
              <Route path="/ParentDashboard" element={<Dashbord />}>
                <Route path="sylabus" element={<StudentSylabus />} />
              </Route>
            )}
          </>
        ) : (
          <Route path="*" element={<LoginForm onLogin={handleLogin} />} />
        )}
      </Routes>

    </Router>
  );
}

export default App;

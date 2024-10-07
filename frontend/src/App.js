import React, { useContext, useState, useMemo, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import LoginForm from "./Component/LoginForm/LoginForm";
import "./App.css";

// Lazy-loaded components for better performance
const StudentHome = React.lazy(() => import("./Component/Students/StudentHome/StudentHome"));
const TimeTable = React.lazy(() => import("./Component/Students/TimeTable/Timetable"));
const ExaminationPanel = React.lazy(() => import("./Component/Students/examinationpannel/ExaminationPanel"));
const FeePanel = React.lazy(() => import("./Component/Students/FeePanel/FeePanel"));
const Workspace = React.lazy(() => import("./Component/Students/WorkSpace/Workspace"));
const HomePage = React.lazy(() => import("./Component/Students/Buspanel/HomePage/HomePage"));
const RegistrationForm = React.lazy(() => import("./Component/Students/Buspanel/RegistrationForm/RegistrationForm"));
const Attendence = React.lazy(() => import("./Component/Students/Attendence/Attendence"));
const StudLayout = React.lazy(() => import("./Component/Students/StudentLayout/StudLayout"));

// Teacher components
const Layout = React.lazy(() => import("./Component/Teacher/TeacherSidebaar/LayOut/Layout"));
const Dashbord = React.lazy(() => import("./Component/Teacher/Dashbord/Dashbord"));
const StudentLayout = React.lazy(() => import("./Component/Teacher/StudentLayout/StudentLayout"));
const Notes = React.lazy(() => import("./Component/Teacher/Notes/Notes"));
const Feedback = React.lazy(() => import("./Component/Teacher/Feedback/Feedback"));
const TeacherUploadMarks = React.lazy(() => import("./Component/Teacher/TeacherUploadMarks/TeacherUploadMarks"));
const Exams = React.lazy(() => import("./Component/Teacher/Exams/Exams"));
const Subjects = React.lazy(() => import("./Component/Teacher/Subject/Subjects"));
const TakeAttendence = React.lazy(() => import("./Component/Teacher/TakeAttendence/TakeAttendence"));
const Setting = React.lazy(() => import("./Component/Teacher/Setting/Setting"));

// Admin components
const AdminLayout = React.lazy(() => import("./Component/Admin/AdminLayout/AdminLayout"));
const Master = React.lazy(() => import("./Component/Admin/Master/Master"));
const AddTeacher = React.lazy(() => import("./Component/Admin/AddTeachers/AddTeachers"));
const AdminStudent = React.lazy(() => import("./Component/Admin/AdminStudent/AdminStuden"));
const AdminSetting = React.lazy(() => import("./Component/Admin/Settingadmin/AdminSetting"));
const VehicleMaster = React.lazy(() => import("./Component/Admin/Transport/CreateVehicale/VehicleMaster"));
const Busservices = React.lazy(() => import("./Component/Admin/Transport/Adminbusadd/Busservices"));

// make later utility Component for Suspense UI
const Loading = () => <div>Loading...</div>;

function App() {

  console.log("app rendring......")
  const { currentUser } = useContext(AppContext);

  const [userLoggedIn, setUserLoggedIn] = useState(currentUser?.isLoggedIn || false)


  const userRole = currentUser?.userRole;


  console.log("============>", currentUser)


  // const appContextValue = useMemo(() => ({
  //   currentUser: localStorage.getItem("current_user"),
  //   currentTheme: localStorage.getItem("current_theme"),
  //   userRole: "Admin",
  //   userLoggedIn: false,
  //   apiUrl: "",
  //   hostUrl: "",
  // }), [userLoggedIn]);

  const roleBasedRoutes = (role) => {
    console.log("route role: ", role)
    switch (role) {
      case "admin":
        return (
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="master" element={<Master />} />
            <Route path="teacher" element={<AddTeacher />} />
            <Route path="student" element={<AdminStudent />} />
            <Route path="subject" element={<Subjects />} />
            <Route path="attendence" element={<TakeAttendence />} />
            <Route path="bus-service" element={<VehicleMaster />} />
            <Route path="bus-management" element={<Busservices />} />
            <Route path="setting" element={<AdminSetting />} />
          </Route>
        );
      case "student":
        return (
          <Route path="/" element={<StudLayout />}>
            <Route index element={<StudentHome />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/examination" element={<ExaminationPanel />} />
            <Route path="/fee-panel" element={<FeePanel />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/bus-route" element={<HomePage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/attendence" element={<Attendence />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        );
      case "teacher":
        return (
          <Route path="/teacher" element={<Layout />}>
            <Route index element={<Dashbord />} />
            <Route path="student" element={<StudentLayout />}>
              <Route path="add-student" element={<AdminStudent />} />
              <Route path="attendence" element={<Attendence />} />
              <Route path="notes" element={<Notes />} />
              <Route path="exams" element={<Exams />} />
              <Route path="mark" element={<TeacherUploadMarks />} />
            </Route>
            <Route path="feedback" element={<Feedback />} />
            <Route path="subject" element={<Subjects />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        );
      case "parent":
        return (
          <Route path="/ParentDashboard" element={<Dashbord />}>
            <Route path="sylabus" element={<Subjects />} />
          </Route>
        );
      default:
        return <Route path="*" element={<Navigate to="/" />} />
    }
  };

  return (
    <AppContext.Provider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {userLoggedIn ? roleBasedRoutes(userRole) : (
              <Route path="*" element={<LoginForm setUserLoggedIn={setUserLoggedIn} />} />
            )}
          </Routes>
        </Suspense>
      </Router>
    </AppContext.Provider>
  );

}

export default App;

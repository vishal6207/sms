import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TeacherSidebarMenu from './TeacherSidebarMenu';
import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { SiWindows } from 'react-icons/si';
import { PiStudentBold } from 'react-icons/pi';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
import { GiTimeBomb } from 'react-icons/gi';
import { SiBookstack } from 'react-icons/si';
import { FaNotesMedical } from 'react-icons/fa6';
import { VscFeedback } from 'react-icons/vsc';
import { PiListNumbersFill } from 'react-icons/pi';
import { RiSettings4Fill } from 'react-icons/ri';
import { MdSubject } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
 

 
import './TeacherSidebaar.css'

const routes = [
  { path: "/teacher/dashbord", name: "Dashboard", icon: <SiWindows /> },
  {
    path: "/teacher/student", name: "Teacher", icon: <PiStudentBold />,
    subRoutes: [
      { path: "/teacher/student/student", name: "Student", icon: <PiStudentBold /> },
      { path: "/teacher/student/attendence", name: "Attendance", icon: <MdMessage /> },
      { path: "/teacher/student/notice", name: "Noticeboard", icon: <BiAnalyse /> },
      { path: "/teacher/student/timetable", name: "Timetable", icon: <GiTimeBomb /> },
      { path: "/teacher/student/sylabus", name: "Syllabus", icon: <SiBookstack /> },
      { path: "/teacher/student/subject", name: "Subject", icon: <MdSubject/> },
      { path: "/teacher/student/exams", name: "Exams", icon: <GrNotes/> },
      { path: "/teacher/student/notes", name: "Notes", icon: <FaNotesMedical /> },
      { path: "/teacher/student/feedback", name: "Feedback", icon: <VscFeedback /> },
      { path: "/teacher/student/mark", name: "Mark", icon: <PiListNumbersFill /> },
       
    ],
  },
  
  { path: "/teacher/setting", name: "Settings", icon: <RiSettings4Fill /> },
];

const TeacherSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: { width: 0, padding: 0, transition: { duration: 0.2 } },
    show: { width: "140px", padding: "5px 15px", transition: { duration: 0.2 } },
  };

  const showAnimation = {
    hidden: { width: 0, opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, width: "auto", transition: { duration: 0.5 } },
  };

  return (
    <div className="main-container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "45px", transition: { duration: 0.5, type: "spring", damping: 10 } }}
        className={`sidebar`}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Samar
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="bars" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <TeacherSidebarMenu
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                  key={index}
                />
              );
            }
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>

      <main>{children}</main>
    </div>
  );
};

export default TeacherSidebar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { SiWindows } from 'react-icons/si';
import { PiStudentBold } from 'react-icons/pi';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
import { GiTimeBomb } from 'react-icons/gi';
import { SiBookstack } from 'react-icons/si';
import { RiSettings4Fill } from 'react-icons/ri';
import { MdSubject } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { FaBusAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { GiRingmaster } from "react-icons/gi";
 
import './AdminSidebar.css';

const routes = [
  { path: "/admin", name: "Dashboard", icon: <SiWindows /> },
  { path: "/admin/master", name: "Master", icon: <GiRingmaster />},
  { path: "/admin/teacher", name: "Teacher", icon: <GiTeacher /> },
  { path: "/admin/student", name: "Student", icon: <PiStudentBold /> },
  { path: "/admin/subject", name: "Subject", icon: <MdSubject /> },
  { path: "/admin/attandance", name: "Attendance", icon: <MdMessage /> },
  { path: "/admin/noticeboard", name: "Noticeboard", icon: <BiAnalyse /> },
  { path: "/admin/timetable", name: "Timetable", icon: <GiTimeBomb /> },
  { path: "/admin/sylabus", name: "Syllabus", icon: <SiBookstack /> },
  { path: "/admin/bus-service", name: "Bus-Service", icon: <FaBusAlt /> },
  { path: "/admin/setting", name: "Settings", icon: <RiSettings4Fill /> },
];

const AdminSidebaar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

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
        className="sidebar"
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
            return (
              <NavLink
                to={route.path}
                key={index}
                className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                activeClassName="active"
                end
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

export default AdminSidebaar;

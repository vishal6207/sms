import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
 import StudentSidebaarMenu from './StudentSidebaarMenu';
import { FaBars } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { SiWindows } from 'react-icons/si';
import { IoTimer } from "react-icons/io5";

import { PiExamDuotone } from "react-icons/pi";

import { MdWork } from "react-icons/md";
 
import { FaBusAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogOutSharp } from "react-icons/io5";
 
 
import "./StudentSidebar.css"
 
 

const routes = [
  { path: "/", name: "Dashboard", icon: <SiWindows /> },
  {
    path:'/timetable',name:'Time Table',icon:<IoTimer />
  },
  {
    path:'/examination',name:'Examination',icon:<PiExamDuotone />
  },
  {
    path:'/fee-panel',name:'WorkSpace',icon:<MdWork />
  },
  {
    path:'/workspace',name:'Bus Route',icon:<FaBusAlt />
  },
  {
    path:'/bus-route',name:'Fee Panel',icon:<GiTakeMyMoney />
  },
  {
    path:'/register',name:'Change password',icon:<RiLockPasswordFill />
  },
  {
    path:'/register',name:'logout',icon:<IoLogOutSharp />
  },
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
                <StudentSidebaarMenu
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

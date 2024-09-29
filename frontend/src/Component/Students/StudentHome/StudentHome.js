import React from "react";
import StudentInfo from "./StudentInfo/StudentInfo";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import Syllabus from "./Syllabus/Syllabus";
import Feedbacks from "./Feedbacks/Feedbacks";
import style from "./StudentHome.module.css";
import AttendanceChart from "./AttendanceChart/AttendanceChart";
import Navbar from ".././Navbar/Navbar";
 
import TeacherSidebar from "../../Teacher/TeacherSidebaar/TeacherSidebar";
 

function StudentHome() {
  return (
    <> 
        
        <div className={`container ${style.container}`}>
          <div className={style.row}>
            <div className={style.studentInfo}>
              <StudentInfo />
            </div>
            <div className={style.attendanceChart}>
              <div className={`card p-3 mb-4 ${style.card}`}>
                <AttendanceChart />
              </div>
              <Syllabus />
            </div>
            <div className={style.noticeBoard}>
              <NoticeBoard />
              <Feedbacks />
            </div>
          </div>
        </div>
      </>
  );
}

export default StudentHome;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import "./FeatureSection.css";
// import icon1 from '../../assets/icon-1.png';
// import icon2 from '../../assets/icon-2.png';
// import icon3 from '../../assets/icon-3.png';
// import icon4 from '../../assets/icon-4.png';
// import icon5 from '../../assets/icon-5.png';
// import icon6 from '../../assets/icon-6.png';
// import icon7 from '../../assets/icon-7.png';
// import icon8 from '../../assets/icon-8.png';

const FeatureSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      // icon: icon1,
      title: "Super Admin",
      description: "Take Full Control With All Features",
      color: "light-yellow",
    },
    {
      // icon: icon2,
      title: "Admin",
      description: "Manage All Activities Almost All Features.",
      color: "navi-blue",
    },
    {
      // icon: icon3,
      title: "Teacher",
      description: "Manage Students And Academies Activities",
      color: "green",
    },
    {
      // icon: icon4,
      title: "Accountant",
      description: "Trace Students Fees Expenses all at a Place",
      color: "orange",
    },
    {
      // icon: icon5,
      title: "Receptionist",
      description: "Manage all Fronts office relative Activities",
      color: "light-orange",
    },
    {
      // icon: icon6,
      title: "Student",
      description: "Collaborate With School Teacher, Activities at All.",
      color: "light-pink",
    },
    {
      // icon: icon8,
      title: "Parents",
      description: "Panel for parents to monitor students performance",
      color: "green",
    },
    {
      // icon: icon7,
      title: "Librarian",
      description: "Manage library books, Generate library cards, Issue books to students and more..",
      color: "black",
    },
  ];

  const handleFeatureClick = () => {
    navigate("/LoginForm");
  };

  return (
    <section className="feature-area mainc mt-0" id="role">
      <div className="container fc">
        <div className="row">
          <div className="col-lg-12">
            <div className="feature-title">
              <h3 className="title">We Have Exclusive Features</h3>
              <p>
                School Management is all in one solution for educational
                institutes with different types of users
              </p>
            </div>
          </div>
        </div>
        <div className="row overflow">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-12 ${feature.color} fade-in`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              onClick={handleFeatureClick} // Add click handler here
            >
              <div className="feature-box-one">
                <span className="icon">
                  {/* <img src={feature.icon} alt={feature.title} /> */}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

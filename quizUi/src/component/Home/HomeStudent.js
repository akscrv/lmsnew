import React, { useState } from "react";
import Teacher from "./studentnobg1.png";
import Enverus from "./Enveruslogo.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

function HomeStudent() {
  const [studentData, SetStudentData] = useState({
    email: "",

    password: "",
  });

  const [errMsg, seterrorMsg] = useState("");

  const handelData = (event) => {
    SetStudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  const submitStudentLogin = (e) => {
    e.preventDefault();

    const studentFormData = new FormData();
    studentFormData.append("email", studentData.email);
    studentFormData.append("password", studentData.password);

    try {
      axios.post(baseURL + "/student-login", studentFormData).then((res) => {
        
        if (res.data.bool == true) {
          console.log("check= "+res.data.student_id)
          localStorage.setItem('studentLoginStatus', true)
          localStorage.setItem('studentId', res.data.student_id)
          window.location.href = "/student-dashboard";
        } else {
          seterrorMsg("Invalid Username Or Password");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  

   //if login it will redirect to dashboard
  const studentLoginStatus=localStorage.getItem('studentLoginStatus')
  if(studentLoginStatus=='true'){
    
    window.location.href='/student-dashboard'
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-12 col-lg-11 col-xl-10">
            <div className="card d-flex mx-auto my-5">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12 c1 p-5">
                  <div className="row mb-5 m-3">
                    <img src={Enverus} width="70vw" height="55vh" alt="" />{" "}
                  </div>{" "}
                  <img
                    src={Teacher}
                    width="120vw"
                    height="210vh"
                    className="mx-auto d-flex"
                    alt="Teacher"
                  />
                  <div className="row justify-content-center">
                    <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 className="wlcm">Hello Champ</h1>{" "}
                      <span className="sp1">
                        <span className="px-3 bg-danger rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                        <span className="ml-2 px-1 rounded-pill"></span>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5 input_div_form">
                  <div className="row student_teacher_center">
                    <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5">
                      {" "}
                      <Link className="nav-link stu_tec" to="/teacher-login">
                        Teacher
                      </Link>{" "}
                      <Link className="nav-link ac stu_tec" to="/student-login">
                        Students
                      </Link>{" "}
                    </nav>
                  </div>
                  <form
                    onsubmit="event.preventDefault()"
                    name="myform"
                    className="px-5 pb-5"
                  >
                    {errMsg && (
                      <h6 className="Failed_registration">{errMsg}</h6>
                    )}
                    <div className="d-flex">
                     
                      <img
                        src="http://www.galaxyskills.org/wp-content/uploads/2019/02/dummy-350x350.png"
                        height="50px"
                        width="50px"
                        alt=""
                        className="mr-3 mt-2"
                      />
                      <h6 className="font-weight-bold">Log in as Student</h6>
                    </div>
                    <input
                      className="widthto100"
                      type="text"
                      value={studentData.email}
                      onChange={handelData}
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      className="widthto100"
                      value={studentData .password}
                      onChange={handelData}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <a>
                      <button onClick={submitStudentLogin}  className="text-white text-weight-bold bt widthto100 mb-3 mt-2">
                        Log In
                      </button>
                    </a>
                    <Link to="/student-registration">
                      <button className="text-white text-weight-bold bt widthto100 mb-3 btnx">
                        Student Registration
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default HomeStudent;

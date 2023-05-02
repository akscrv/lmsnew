import React, { useEffect, useState } from "react";
import Teacher from "./teachernobg1.png";
import Enverus from "./Enveruslogo.png";
import { json, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";

import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";
function TeacherRegister() {
  // const [teacherdata,setTeacherdata]=useState(null);
  // useEffect(()=>{
  //   axios.get(baseURL+'/teacher/').then((res)=>{
  //     console.log(res.data);
  //   })
  // },[]);

  const [teacherData, SetTeacherData] = useState({
    full_name: "",
    email: "",
    subject: "",
    qualification: "",
    mobile_no: "",
    password: "",
    status: "",
  });
  // useEffect(()=>{

  //     axios.get(baseURL+'/teacher/').then((response)=>{
  //       SetTeacherData(response.data)
  //     })

  // },[]);

  const handelData = (event) => {
    console.log([event.target.name], event.target.value);

    SetTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };
  // console.log(teacherData);
  const submitTeacherForm = (e) => {
    e.preventDefault();
    const teacherFormData = new FormData();

    teacherFormData.append("full_name", teacherData.full_name);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("subject", teacherData.subject);
    teacherFormData.append("qulification", teacherData.qulification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("password", teacherData.password);

    try {
      axios.post(baseURL+'/teacher/', teacherFormData).then((response) => {
        SetTeacherData({
          full_name: "",
          email: "",
          subject: "",
          qualification: "",
          mobile_no: "",
          password: "",
          status: "success",
        });
      });
    } catch (error) {
      console.log(error);
      SetTeacherData({
        status: "error",
      });
    }
  };

      // const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
      // if(teacherLoginStatus=='true'){
      //   window.location.href='/teacher-dashboard'
      // }

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
                    <img src={Enverus} width="70vw" height="55vh" alt="" />
                  </div>
                  <img
                    src={Teacher}
                    width="120vw"
                    height="210vh"
                    className="mx-auto d-flex"
                    alt="Teacher"
                  />
                  <div className="row justify-content-center">
                    <div className="w-75 mx-md-5 mx-1 mx-sm-2 mb-5 mt-4 px-sm-5 px-md-2 px-xl-1 px-2">
                      <h1 className="wlcm">Hello Master</h1>
                      <span className="sp1">
                        <span className="px-3 bg-danger rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                        <span className="ml-2 px-1 rounded-pill"></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12 c2 px-5 pt-5 input_div_form">
                  <div className="row student_teacher_center">
                    <nav className="nav font-weight-500 mb-1 mb-sm-2 mb-lg-5 px-sm-2 px-lg-5">
                      <Link className="nav-link stu_tec" to="/teacher-login">
                        Teacher
                      </Link>
                      <Link className="nav-link ac stu_tec" to="/student-login">
                        Students
                      </Link>
                    </nav>
                  </div>
                  <form name="myform" className="px-5 pb-5">
                    {teacherData.status=='success'&&<h6 className="Sucess_registration">Thank You For The Registration</h6>}
                    {teacherData.status=='error'&&<h6 className="Failed_registration">Something Went Wron Please Try Again</h6>}
                    <div className="d-flex">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/196/196369.png"
                        height="50px"
                        width="50px"
                        alt=""
                        className="mr-3 mt-2"
                      />
                      <h6 className="font-weight-bold">
                        Teacher Registration Form
                      </h6>
                    </div>
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.full_name}
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                    />
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.email}
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.subject}
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.qualification}
                      type="text"
                      name="qualification"
                      placeholder="Qulification"
                    />
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.mobile_no}
                      type="number"
                      name="mobile_no"
                      placeholder="Mobile Number"
                    />
                    <input
                      className="widthto100"
                      onChange={handelData}
                      value={teacherData.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <a>
                      <button
                        onClick={submitTeacherForm}
                        className="text-white text-weight-bold bt widthto100 mb-3 mt-2"
                      >
                        Register me as Teacher
                      </button>
                    </a>
                    <Link to="/teacher-login">
                      <button className="text-white text-weight-bold bt widthto100 mb-3 btnx">
                        Teacher Login
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

export default TeacherRegister;

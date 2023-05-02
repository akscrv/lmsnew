import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./stylestudent.css";
import axios from "axios";
import { Link } from "react-router-dom";
function StudentDashboard() {

  const studentId = localStorage.getItem('studentId');

  console.log('Local Storage=  '+studentId)

    const baseUrl = "http://127.0.0.1:8000/api";


    const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher/" ).then((res) => {
        setTeacher(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  

//   const [quizCatogeries, setquizCatogeries] = useState([]);
//   useEffect(() => {
//     try {
//       axios.get(baseUrl + "/teacher-quiz/" ).then((res) => {
//         setquizCatogeries(res.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);




  return (
    <React.Fragment>
      <NavBar />
      <div className="student_container">
        <h2>Student dashboard</h2>
        <div class="container">
  <div class="row">
    {
        teacher.map((row, index) => (
            <div key={index} class="col-md-6">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Name: {row.full_name}</h5>
          <h6 class="card-title">Sub: {row.subject}</h6>
          <Link type="button" to={`/student-dashboard/questions-catogeries/`+row.id} class="btn btn-success link_btn_suc">Check Quiz</Link>
        </div>
      </div>
    </div>

        ))

    }
    
    
  </div>
</div>

        

        
      </div>
    </React.Fragment>
  );
}

export default StudentDashboard;

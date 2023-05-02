import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import "./stylestudent.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function StudentViewQuizCatogeries() {


    const baseUrl = "http://127.0.0.1:8000/api";
    const {id}=useParams();


    const [teacherQuizCatogeries, setTeacherQuizCatogeries] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher-quiz/" + id ).then((res) => {
        setTeacherQuizCatogeries(res.data);
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
        teacherQuizCatogeries.map((row, index) => (
            <div key={index} class="col-md-6">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Title: {row.title}</h5>
          <h6 class="card-title">Details: {row.detail}</h6>
          <Link type="button" to={`/student-dashboard/questions-catogeries/attempt-quiz/`+row.id} class="btn btn-danger link_btn_suc">Attempt Quiz</Link>
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

export default StudentViewQuizCatogeries;

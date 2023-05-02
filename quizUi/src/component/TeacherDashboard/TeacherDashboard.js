import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import "./stylex.css";
import axios from "axios";
import Swal from "sweetalert2";

function TeacherDashboard() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const teacherId = localStorage.getItem("teacherId");

  console.log('Local Storage=  '+teacherId)

  const [quizData, setquizData] = useState([]);
  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
        setquizData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


//Delete Quiz
// const handleDeleteClick=(quiz_id)=>{
//   axios.delete(baseUrl+'/quiz/'+quiz_id).then((response) => {
//     console.log(response.data);
//     window.location.href = "/teacher-dashboard";
//   })
//   .catch((error) => {
//     console.log(error);
//     // handle error
//   });
// }

const handleDeleteClick=(quiz_id)=>{
  Swal.fire({
    title:"Confirm",
    text:"Are You Sure want to delete",
    icon:'info',
    confirmButtonText:'Continue',
    showCancelButton:true
  
  }).then((result)=>{
if(result.isConfirmed){
  try{

    axios.delete(baseUrl+'/quiz/'+quiz_id).then((response) => {
      Swal.fire('success', 'Data has been deleted.')
      try{
        axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
          setquizData(res.data);
        });


      }catch(error){
        console.log(error);
      }
      
    })
    .catch((error) => {
      console.log(error);
      // handle error
    });
    

  }catch(error){
    console.log(error);
  }
}

  })

 
}


  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <div className="col">
          <div className="row-md-4 mt-3 option_field">
            <Link to="/teacher-dashboard">
              <button type="button" className="btn btn-info">
                All Quiz
              </button>
            </Link>
            <Link to="/add-quiz">
              <button type="button" className="btn btn-warning">
                Create Quiz
              </button>
            </Link>
            <Link to="/student-dashboard/marks">
              <button type="button" className="btn btn-success">
              All Analytics 
              </button>
            </Link>
            
          </div>
        </div>
        <div className="col">
          <div className="row-md-4 mt-3">
            <h3>Posted Quiz</h3>

            <div className="row row-cols-2 g-2">
              <div className="card">
                <div className="card-header">
                  <h5>All Quiz</h5>
                </div>
                <div className="card-body">
                  <table className=" table table-bordered">
                    <thead>
                      <tr>
                        <th>Quiz Name</th>
                        <th>Details</th>
                        
                        <th>Actions</th>
                        <th>Created On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.title}</td>
                          <td>{row.detail}</td>
                          
                          <td>
                            
                            
                            <Link
                            to={`/add-quiz-question/`+row.id}
                              type="button"
                              className="btn btn-primary mr-1 mt-1"
                            >
                              Add Question
                            </Link>
                            <Link
                            to={`/view-questions/`+row.id}
                              type="button"
                              className="btn btn-success mr-1 mt-1"
                            >
                              View Questions
                            </Link>
                            <Link to={`/edit-quiz/`+row.id} type="button" className="btn btn-danger mr-1 mt-1">
                              Edit
                            </Link>
                            <Link type="button" onClick={()=>handleDeleteClick(row.id)} className="btn btn-info mr-2 mt-1">
                              Delete
                            </Link>
                            <Link
                            to={`/show-result/`+row.id}
                              type="button"
                              className="btn btn-warning mr-1 mt-1"
                            >
                              Show Result
                            </Link>
                            
                            
                          </td>
                          <td>{row.add_time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* <button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button> */}
    </React.Fragment>
  );
}

export default TeacherDashboard;

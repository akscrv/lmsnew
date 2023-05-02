import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

import axios from "axios";
import Swal from "sweetalert2";

function ViewQuestion() {
  const baseUrl = "http://127.0.0.1:8000/api";
  


  const [questionData, setQuestionData] = useState([]);
  const {quiz_id}=useParams();
  useEffect(() => {
    try {
      axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/').then((res) => {
        setQuestionData(res.data);
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

const handleDeleteClick=(question_id)=>{
  Swal.fire({
    title:"Confirm",
    text:"Are You Sure want to delete",
    icon:'info',
    confirmButtonText:'Continue',
    showCancelButton:true
  
  }).then((result)=>{
if(result.isConfirmed){
  try{

    axios.delete(baseUrl+'/question/'+question_id+'/').then((response) => {
      Swal.fire('success', 'Data has been deleted.')
      try{
        axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/').then((res) => {
            setQuestionData(res.data);
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
                Check Result
              </button>
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row-md-4 mt-3">
            <h3>All Questions</h3>

            <div className="row row-cols-2 g-2">
              <div className="card">
                <div className="card-header">
                  <h5>Question List</h5>
                </div>
                <div className="card-body">
                  <table className=" table table-bordered">
                    <thead>
                      <tr>
                        <th>Quiz Name</th>
                        
                        <th>Actions</th>
                        <th>Created On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {questionData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.question}</td>
                          {/* <td>{row.detail}</td>
                          <td>{Math.floor(Math.random() * 10)}</td> */}
                          <td>
                            
                            
                            {/* <Link
                            to={`/add-quiz-question/`+row.id}
                              type="button"
                              className="btn btn-warning mr-1 mt-1"
                            >
                              Add Question
                            </Link> */}
                            {/* <Link
                            to="view-questions"
                              type="button"
                              className="btn btn-success mr-1 mt-1"
                            >
                              Edit Question
                            </Link>
                            <Link to={`/edit-question/`+row.id} type="button" className="btn btn-danger mr-1 mt-1">
                              Edit
                            </Link> */}
                            <Link type="button" onClick={()=>handleDeleteClick(row.id)} className="btn btn-info mr-2 mt-1">
                              Delete
                            </Link>
                          </td>
                          <td>{row.add_time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* {quizData.map((row, index) => (
                <div key={index} className="col col-card">
                  <div className="card">
                    <div>
                      <h5 className="pl-3 pt-3">{row.title}</h5>
                    </div>
                    <div className="card-body bodyOfCard ">
                      <h6 className="card-title">{row.detail}</h6>
                      <Link type="button" className="btn btn-success mt-2">
                        Success
                      </Link>
                      <Link type="button" className="btn btn-danger mt-2">
                        Edit
                      </Link>
                      <Link type="button" className="btn btn-warning mt-2">
                        Add Question
                      </Link>
                      <Link type="button" className="btn btn-info mt-2">
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* <button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button> */}
    </React.Fragment>
  );
}

export default ViewQuestion;

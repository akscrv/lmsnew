import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

import axios from "axios";
import Swal from "sweetalert2";

function ShowResult() {
  const baseUrl = "http://127.0.0.1:8000/api";
  


  const [showResultData, setshowResultData] = useState([]);
  const {id}=useParams();
  useEffect(() => {
    try {
      axios.get(baseUrl+'/show-result/'+id+'/').then((res) => {
        setshowResultData(res.data);
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

// const handleDeleteClick=(question_id)=>{
//   Swal.fire({
//     title:"Confirm",
//     text:"Are You Sure want to delete",
//     icon:'info',
//     confirmButtonText:'Continue',
//     showCancelButton:true
  
//   }).then((result)=>{
// if(result.isConfirmed){
//   try{

//     axios.delete(baseUrl+'/question/'+question_id+'/').then((response) => {
//       Swal.fire('success', 'Data has been deleted.')
//       try{
//         axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/').then((res) => {
//             setQuestionData(res.data);
//         });


//       }catch(error){
//         console.log(error);
//       }
      
//     })
//     .catch((error) => {
//       console.log(error);
//       // handle error
//     });
    

//   }catch(error){
//     console.log(error);
//   }
// }

//   })

 
// }


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
            <h3>Results</h3>

            <div className="row row-cols-2 g-2">
              <div className="card">
                <div className="card-header">
                  <h5>Question List</h5>
                </div>
                <div className="card-body">
                  <table className=" table table-bordered">
                    <thead>
                      <tr>
                        <th>Student Id </th>
                        
                        <th>marks </th>
                        <th>attempted on</th>
                      </tr>
                    </thead>
                    <tbody>
                      {showResultData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.studentName}</td>
                          <td>{row.score}</td>
                          
                         
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

export default ShowResult;

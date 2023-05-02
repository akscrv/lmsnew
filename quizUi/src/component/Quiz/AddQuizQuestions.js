import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl='http://127.0.0.1:8000/api'
function AddQuizQuestions() {

        const[questionData,setQuestionzData]=useState({
            quiz:'',
            question:'',
            and1:'',
            and2:'',
            and3:'',
            and4:'',
            right_ans:'',
            
        });

        const handleChange=(e)=>{
            setQuestionzData({
                ...questionData,
                [e.target.name]:e.target.value
            })
        }
        
        const {quiz_id}=useParams();
        const formSubmit=()=>{
            // const teacherId=localStorage.getItem('teacherId');
            const _formData=new FormData();
            _formData.append('quiz',quiz_id);
            _formData.append('question',questionData.question);
            _formData.append('and1',questionData.and1)
            _formData.append('and2',questionData.and2);
            _formData.append('and3',questionData.and3);
            _formData.append('and4',questionData.and4)
            _formData.append('right_ans',questionData.right_ans);
            
           

            try{
                axios.post(baseUrl+'/quiz-questions/'+quiz_id+'/',_formData,{
                    headers:{
                        'Content-type':'multipart/form-data'
                    }
                }).then((res)=>{
                    if((res.status==200||res.status==201)){
                        Swal.fire({
                            title:'Question is Added',
                            icon:'success',
                            toast:true,
                            timer:3000,
                            position:'top-right',
                            timerProgressBar:true,
                            showConfirmButton:false
                        })

                        // window.location.href='/add-quiz'
                        window.location.reload();
                    }
                    
                });
            }catch(error){
                    console.log(error)
                }
            
        }



  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        
        <div className="col mt-3">
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
            <h2>Add Quiz Question</h2>
          </div>
          <div className="card-body">
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">
                        Question
                    </label>
                    <input type="text" onChange={handleChange} name="question" className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Option 1
                    </label>
                    <textarea type="text" onChange={handleChange} name="and1" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Option 2
                    </label>
                    <textarea type="text" onChange={handleChange} name="and2" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Option 3
                    </label>
                    <textarea type="text" onChange={handleChange} name="and3" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Option 4
                    </label>
                    <textarea type="text" onChange={handleChange} name="and4" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Correct Option
                    </label>
                    <textarea type="text" onChange={handleChange} name="right_ans" className="form-control"></textarea>
                </div>
                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddQuizQuestions;

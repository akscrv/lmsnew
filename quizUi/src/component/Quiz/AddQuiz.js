import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import axios from "axios";

const baseUrl='http://127.0.0.1:8000/api'
function AddQuiz() {

        const[quizData,setQuizData]=useState({
            title:'',
            detail:''
        });

        const handleChange=(e)=>{
            setQuizData({
                ...quizData,
                [e.target.name]:e.target.value
            })
        }

        const formSubmit=()=>{
            const teacherId=localStorage.getItem('teacherId');
            const _formData=new FormData();
            _formData.append('teacher',teacherId);
            _formData.append('title',quizData.title);
            _formData.append('detail',quizData.detail)

            try{
                axios.post(baseUrl+'/quiz/',_formData,{}).then((res)=>{
                    window.location.href='/add-quiz'
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
            <h2>Create Quiz</h2>
          </div>
          <div className="card-body">
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">
                        Titile
                    </label>
                    <input type="text" onChange={handleChange} name="title" className="form-control" id="title"/>
                </div>
                <div className="mb-3">
                    <label for="detail" className="form-label" id="detail">
                        Detail
                    </label>
                    <textarea type="text" onChange={handleChange} name="detail" className="form-control"></textarea>
                </div>
                <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddQuiz;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import "./stylestudent.css";

import axios from "axios";
import Swal from "sweetalert2";

function AttemptQuiz() {
  const baseUrl = "http://127.0.0.1:8000/api";

  const [questionData, setQuestionData] = useState([]);
  const [countScore, setCountScore] = useState(0);

  const { id } = useParams();
  const studentId = localStorage.getItem("studentId");
  const check_value = "2626262";
  console.log("Local Storage=  " + studentId);

  const [showResultData, setshowResultData] = useState([]);

  useEffect(() => {
    try {
      axios.get(baseUrl + "/quiz-questions/" + id + "/").then((res) => {
        setQuestionData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [disabledQuestions, setDisabledQuestions] = useState([]);

  const checkAnswer = (row, selectedOption) => {
    console.log("selected" + selectedOption);
    console.log(row.right_ans);
    if (selectedOption === row.right_ans) {
      // if answer is correct, do something here
      console.log("Answer is correct!");

      setCountScore(countScore + 1);

      console.log(id);
      console.log(check_value);
      console.log(studentId);
    } else {
      // if answer is incorrect, do something here
      console.log("Answer is incorrect!");
    }
    setDisabledQuestions([...disabledQuestions, row.id]);
  };

  //const firstId = data[0].id   teacher_id_s[16];

  const formSubmit = () => {
    const _formData = new FormData();
    _formData.append("student", studentId);
    _formData.append("quiz", id);
    _formData.append("score", countScore);
    _formData.append("attempted", check_value);

    try {
      axios.post(baseUrl + "/attempted-quizx/", _formData, {}).then((res) => {
        alert("Your Score is =" + countScore + "/" + questionData.length)
        window.location.href = "/student-dashboard/";

      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="container mt-4">
        <h2>All Questions</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
          {questionData.map((row, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title mb-3">{row.question}</h5>
                  <div className="mb-3">
                    <button
                      onClick={() => checkAnswer(row, row.and1)}
                      className={`btn btn-dark mr-2 mt-2 optino_btn_ ${
                        disabledQuestions.includes(row.id) && "disabled"
                      }`}
                      disabled={disabledQuestions.includes(row.id)}
                    >
                      1. {row.and1}
                    </button>
                    <button
                      onClick={() => checkAnswer(row, row.and2)}
                      className={`btn btn-dark mr-2 mt-2 optino_btn_ ${
                        disabledQuestions.includes(row.id) && "disabled"
                      }`}
                      disabled={disabledQuestions.includes(row.id)}
                    >
                      2. {row.and2}
                    </button>
                    <button
                      onClick={() => checkAnswer(row, row.and3)}
                      className={`btn btn-dark mr-2 mt-2 optino_btn_ ${
                        disabledQuestions.includes(row.id) && "disabled"
                      }`}
                      disabled={disabledQuestions.includes(row.id)}
                    >
                      3. {row.and3}
                    </button>
                    <button
                      onClick={() => checkAnswer(row, row.and4)}
                      className={`btn btn-dark mr-2 mt-2 optino_btn_ ${
                        disabledQuestions.includes(row.id) && "disabled"
                      }`}
                      disabled={disabledQuestions.includes(row.id)}
                    >
                      4. {row.and4}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="mt-2">
          <h4>Your Score is = {countScore} / {questionData.length}</h4>  
          </button>
          <button className="redred">
            <h6>**Attempt all the Question for the final Result.</h6>
          </button>
          <button onClick={formSubmit} className="btn btn-success mt-4">
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AttemptQuiz;

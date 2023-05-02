import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTooltip,
  VictoryTheme,
  VictoryBar,
  VictoryPie,
  VictoryLabel,
} from "victory";
// import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

import Footer from "../Footer/Footer";
import NavBar from "../Navbar/NavBar";
import { Chart } from "react-google-charts";
import "./Marks.css";
import { Link } from "react-router-dom";
import ShowResult from "../Quiz/ShowResult";

function Marks() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const teacherId = localStorage.getItem("teacherId");

  const [quizData, setQuizData] = useState([]);
  

  useEffect(() => {
    try {
      axios.get(baseUrl + "/teacher-quiz/" + teacherId).then((res) => {
        setQuizData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [showResultData, setshowResultData] = useState([]);

  //const { id } = useParams();
  const [quizId, setquizId] = useState();

  const selectchange = (param) => {
    console.log("selectchange called");

    setquizId(param);
    // let id = e;
    try {
      axios.get(baseUrl + "/show-result/" + quizId + "/").then((res) => {
        setshowResultData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const graphdata = quizData.map((quiz) => ({
    x: new Date(quiz.add_time),
    y: quiz.title.slice(0, 6),
    label: quiz.title,
  }));

  const formattedData = quizData.map((quiz) => ({
    x: quiz.title.slice(0, 5),
    y: quiz.id,
    label: quiz.title,
  }));

  const customTheme = {
    ...VictoryTheme.material,
    axis: {
      ...VictoryTheme.material.axis,
      style: {
        ...VictoryTheme.material.axis.style,
        tickLabels: {
          ...VictoryTheme.material.axis.style.tickLabels,
          fontSize: 12,
          padding: 5,
        },
      },
    },
    colors: ["#4caf50", "#03a9f4", "#ff9800", "#f44336", "#9c27b0"],
  };

  // calculate pass/fail percentages
  // calculate pass/fail percentages
  const totalStudents = showResultData.length;
  const passCount = showResultData.filter((row) => row.score >= 1).length;
  const failCount = totalStudents - passCount;
  const passPercentage = parseFloat((passCount / totalStudents * 100).toFixed(2));
  const failPercentage = parseFloat((failCount / totalStudents * 100).toFixed(2));
  
  

  // calculate highest, lowest, and average scores
  const scores = showResultData.map((row) => row.score);
  const highestScore = Math.max(...scores);
  const lowestScore = Math.min(...scores);

  // const chartData = showResultData.filter(
  //   (row) => row.score === highestScore || row.score === lowestScore
  // );

  const Scoredata = showResultData.map((row) => ({
    x: row.studentName,
    y: row.score,
  }));
  const Topdata = showResultData
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((row) => ({ y: row.studentName.slice(0, 6), x: row.score }));

  const perdata = showResultData
    .sort((a, b) => b.score - a.score)
    .map((row, index, array) => ({
      y: row.studentName.slice(0, 8),
      x: row.score,
      label: `Percentile: ${
        (index / (array.length - 1)) * 100
      }%\nPercentage: ${((row.score / 100) * 100).toFixed(2)}%`,
    }));

  // Transform quizData into an array of arrays
  // const Quizdatedata = [["Quiz", "Date"]];
  // quizData.forEach((quizx) => {
  //   Quizdatedata.push([quizx.title, quizx.add_time]);
  // });

  // const QuizDateWithtitle = {
  //   title: "Quiz Created",
  //   hAxis: { title: "Question" },
  //   vAxis: { title: "Correct Answer" },
  // };
  const Quizdatedata = [["Quiz", "Date"]];
  quizData.forEach((quizx) => {
    const date = new Date(quizx.add_time); // convert the add_time to a date object
    Quizdatedata.push([quizx.title, date]); // push the quiz title and date object to the Quizdatedata array
  });

  const QuizDateWithtitle = {
    title: "Quiz Created",
    hAxis: { title: "Quiz" }, // update the horizontal axis title
    vAxis: { title: "Date" }, // update the vertical axis title
    legend: "none", // remove the chart legend
    
  };

  

  

  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg admin-nav-color">
      
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Admin Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
        </div>
      </nav>
      <div className="row mt-1">
        <h2 className="h2_center">Stats and Analytics</h2>
      </div>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Students</h5>
                <h6 class="card-subtitle mb-2 text-muted">12</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Quizs</h5>
                <h6 class="card-subtitle mb-2 text-muted">{quizData.length}</h6>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Questions</h5>
                <h6 class="card-subtitle mb-2 text-muted">26</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <div class="card row-height-fjix">
              <VictoryChart domainPadding={{ x: 20 }}>
                <VictoryAxis label="Quiz Titles" />
                <VictoryAxis dependentAxis label="Quiz Id" />
                <VictoryBar
                  data={formattedData}
                  labels={({ datum }) => datum.label}
                  labelComponent={<VictoryTooltip />}
                  style={{ data: { fill: "#ebe415" } }}
                />
              </VictoryChart>
              <div class="card-body">
                <h5 class="card-title">Quiz data Bar graph</h5>
                <p class="card-text">With number of quiz</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="card row-height-fjix">
              <VictoryChart theme={customTheme} zoom={true}>
                <VictoryAxis
                  label="Created On"
                  tickFormat={(date) => new Date(date).toLocaleDateString()}
                  style={{
                    axisLabel: { fontSize: 14, padding: 30 },
                  }}
                />
                <VictoryAxis dependentAxis label="" />
                <VictoryLine
                  data={graphdata}
                  x="x"
                  y="y"
                  labels={({ datum }) => datum.label}
                  labelComponent={<VictoryTooltip />}
                  style={{ data: { strokeWidth: 2, strokeLinecap: "round" } }}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Quiz Created On.</h5>
                <p class="card-text display_hiden">
                  -------------------------------------------------------------
                  ---------------------------------------------------------------------
                </p>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created On</th>
                  </tr>
                </thead>

                <tbody>
                  {quizData.map((quiz) => (
                    <tr key={quiz.id}>
                      <td>{quiz.id}</td>
                      <td>{quiz.title}</td>
                      <td>
                        <span class="badge bg-warning text-dark">
                          <h5>
                            {new Date(quiz.add_time).toLocaleDateString()}
                          </h5>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div class="card-footer">
                <small class="text-muted">Last updated 0 mins ago</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <h3 className="card-title">Choose Quiz Name</h3>

            <div class="card">
              <div className="card-body">
                <select onChange={(e) => selectchange(e.target.value)}>
                  <option value="">Select Quiz</option>
                  {quizData.map((quiz) => (
                    <option key={quiz.id} value={quiz.id}>
                      {quiz.title}
                    </option>
                  ))}
                </select>
              </div>

              <div class="row">
                <div class="col-md-8">
                  <div class="pie-chart-container">
                    <VictoryPie
                      data={[
                        { x: "Pass", y: passPercentage },
                        { x: "Fail", y: failPercentage },
                      ]}
                      colorScale={["green", "red"]}
                      innerRadius={80}
                      labelRadius={100}
                      style={{ labels: { fill: "white", fontSize: 16 } }}
                    />
                  </div>
                </div>
                <div class="col-md-4 highest_lowest">
                  <div class="score-container">
                    <div class="score-item">
                      <div class="score-value">{highestScore}</div>
                      <div class="score-label">Highest Score</div>
                    </div>
                    <div class="score-item">
                      <div class="score-value">{lowestScore}</div>
                      <div class="score-label">Lowest Score</div>
                    </div>
                  </div>
                </div>
              </div>

              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Marks</th>
                    <th>Attempted on</th>
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
            {/* ---------- */}
            <div className="card-deck">
              <div className="card">
                <div className="card-header">
                  <h5>Student Name vs Score</h5>
                </div>
                <div className="card-body">
                  <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ x: 20 }}
                    height={300}
                  >
                    <VictoryAxis tickFormat={(name) => name} />
                    <VictoryAxis dependentAxis />
                    <VictoryBar
                      data={Scoredata}
                      x="x"
                      y="y"
                      style={{ data: { fill: "#a315eb" } }}
                    />
                  </VictoryChart>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5>Top 3 Students</h5>
                </div>
                <div className="card-body">
                  <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{ y: 20 }}
                    height={150}
                  >
                    <VictoryAxis dependentAxis />
                    <VictoryAxis />
                    <VictoryBar
                      data={Topdata}
                      x="x"
                      y="y"
                      horizontal
                      style={{ data: { fill: "#c43a31", barWidth: 50 } }}
                    />
                  </VictoryChart>
                </div>
              </div>
            </div>
            <br></br>
            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h5>Percentage VS Percentile of Every Studentss</h5>
                </div>
                <div className="card-body"></div>

                <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ y: 20 }}
  height={150}
>
  <VictoryAxis dependentAxis />
  <VictoryAxis />
  <VictoryBar
    data={perdata}
    x="x"
    y="y"
    horizontal
    labelComponent={
      <VictoryLabel
        dx={-30}
        text={(datum) => {
          const percentile = ((datum.index / (perdata.length - 1)) * 100).toFixed(2);
          const percentage = (parseFloat(datum.datum.x) * 100).toFixed(2);
          return `Percentile: ${percentile}%\nPercentage: ${percentage}%`;
        }}
      />
    }
    
    style={{
      data: { fill: "#03fc8c" },
      labels: { fontSize: 6, barWidth: 20 },
    }}
  />
</VictoryChart>


              </div>
            </div>

            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h5>Percentage VS Percentile of Every Students</h5>
                </div>
                <div className="card-body">
                  <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={Quizdatedata}
                    options={QuizDateWithtitle}
                  />
                </div>
              </div>
            </div>
            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h5>Percentage VS Percentile of Every Students</h5>
                </div>
                <div className="card-body">
                <Chart
            chartType="ScatterChart"
            width="100%"
            height="400px"
            data={Quizdatedata}
            options={QuizDateWithtitle}
          />
                </div>
              </div>
            </div>

            <div className="card-deck mt-3">
              <div className="card">
                <div className="card-header">
                  <h5>Percentage VS Percentile of Every Students</h5>
                </div>
                <div className="card-body">
                <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={Quizdatedata}
            options={QuizDateWithtitle}
          />
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Marks;

//

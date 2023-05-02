
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import HomeStudent from './component/Home/HomeStudent';
import NavBar from './component/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllIncludes from './component/AllIncludes/AllIncludes';
import StudentRegister from './component/Home/StudentRegister';
import TeacherRegister from './component/Home/TeacherRegister';
import TeacherDashboard from './component/TeacherDashboard/TeacherDashboard';
import StudentDashboard from './component/StudentDashboard/StudentDashboard';
import Marks from './component/Marks/Marks';
import TeacherLogout from './component/TeacherDashboard/TeacherLogout';
import Quiz from './component/Quiz/Quiz';
import AddQuiz from './component/Quiz/AddQuiz';
import EditQuiz from './component/Quiz/EditQuiz';
import AddQuizQuestions from './component/Quiz/AddQuizQuestions';
import ViewQuestion from './component/Quiz/ViewQuestion';
import StudentLogout from './component/StudentDashboard/StudentLogout';
import StudentViewQuizCatogeries from './component/StudentDashboard/StudentViewQuizCatogeries';
import AttemptQuiz from './component/StudentDashboard/AttemptQuiz';
import ShowResult from './component/Quiz/ShowResult';

function App() {
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={<AllIncludes />}/>

          <Route path="/student-login" element={<HomeStudent />} />
          <Route path="/teacher-login" element={<Home />} />
          <Route path="/student-registration" element={<StudentRegister />} />
          <Route path="/teacher-registration" element={<TeacherRegister />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-dashboard/marks" element={<Marks />} />
          <Route path='/teacher-logout' element={<TeacherLogout/>} />
          <Route path='/student-logout' element={<StudentLogout/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/add-quiz' element={<AddQuiz/>} />
          <Route path='/edit-quiz/:quiz_id' element={<EditQuiz/>} />
          <Route path='/add-quiz-question/:quiz_id' element={<AddQuizQuestions/>}/>
         
          <Route path='/view-questions/:quiz_id' element={<ViewQuestion/>}/>

          <Route path='/student-dashboard/questions-catogeries/:id' element={<StudentViewQuizCatogeries/>}/>
          <Route path='/student-dashboard/questions-catogeries/attempt-quiz/:id' element={<AttemptQuiz/>}/>
          

          <Route path='/show-result/:id' element={<ShowResult/>}/>
          

       


      </Routes>


     
    </div>
  );
}

export default App;

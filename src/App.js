import Login from "./components/Login";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";



const App = () => {
  return (
    <Router>
      <div className='webapp-home'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/student" element={<Layout><Student /></Layout>} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

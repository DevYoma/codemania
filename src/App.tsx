import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tournament from './pages/Tournament/Tournament';
import LeaderBoard from './pages/LeaderBoard/LeaderBoard';

function App() {

  return (
    <Router>
      <div className="app">
        <div className="appHeader">
          <Navbar />
        </div>
        <div className="appBody">
          <Sidebar />
          <div
            style={{
              overflowY: "auto",
              marginLeft: "15%",
              zIndex: "0",
              width: "100%",
              // border: "1px solid red  ",
              padding: "24px 64px 0 64px"
            }}
          >
            <Routes>
              <Route path="/" element={<Tournament />} />
              <Route path="/leaderBoard" element={<LeaderBoard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App

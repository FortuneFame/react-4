import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './index.css';
import HomeworkPage from './HomeworkPage';
import HomeworkPageClass from './HomeworkPageClass';

class App extends React.Component {
  render() {
    const data = [
      {name: "Header", description: "This is Header"},
      {name: "Footer", description: "This is Footer"},
      {name: "Sidebar", description: "This is Sidebar"},
    ];

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/functional">Functional App</Link></li>
              <li><Link to="/class">Class App</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/functional" element={<HomeworkPage data={data} />} />
            <Route path="/class" element={<HomeworkPageClass data={data} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

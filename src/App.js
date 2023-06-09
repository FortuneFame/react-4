import React from 'react';
import HomeworkPage from './HomeworkPage';
import './index.css';

function App() {
  const data = [
    {name: "Header", description: "This is Header"},
    {name: "Footer", description: "This is Footer"},
    {name: "Sidebar", description: "This is Sidebar"},
  ];

  return (
    <>
      <HomeworkPage data={data} />
    </>
  );
}

export default App;

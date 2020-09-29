import React from 'react';
import './App.css';
import Search from './Components/Search';
import Category from './Components/Category';
import allButton1 from './Assets/img/all-button1.png'
import allButton2 from './Assets/img/all-button2.png'
import pollsButon1 from './Assets/img/polls-button1.png'
import pollsButon2 from './Assets/img/polls-button2.png'
import interviewButton1 from './Assets/img/interview-button1.png'
import interviewButton2 from './Assets/img/interview-button2.png'
import reportsButton1 from './Assets/img/reports-button1.png'
import reportsButton2 from './Assets/img/reports-button2.png'
import Options from './Components/Options';
import ViewTable from './Components/ViewTable';
import Pagination from './Components/Pagination';
const categories = [
  {
    title: 'All',
    score: '480',
    button1: allButton1,
    button2: allButton2
  },
  {
    title: 'Polls',
    score: '300',
    button1: pollsButon1,
    button2: pollsButon2
  },
  {
    title: 'Interview',
    score: '80',
    button1: interviewButton1,
    button2: interviewButton2
  },
  {
    title: 'Reports',
    score: '100',
    button1: reportsButton1,
    button2: reportsButton2
  },
]
function App() {
  return (
    <div className="container">
      <Search />
      <div className="categoryOptions">
        {
          categories.map(category => {
            return <Category title={category.title} score={category.score} button1={category.button1} button2={category.button2} />
          })
        }
        <Options />
      </div>
      <ViewTable />
      <Pagination />
    </div>
  );
}
export default App;

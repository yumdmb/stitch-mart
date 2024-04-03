import logo from './logo.svg';
import './App.css';
import JobList from './components/JobList/JobList';

function App() {
  return (
    <div className='Job-list'>
      <h2>Jobs</h2>
      <JobList />
    </div>
  );
}

export default App;

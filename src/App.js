import logo from './logo.svg';
import './App.css';
import JobList from './components/JobList/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='Job-list'>
      <h2>Jobs</h2>
      <JobList />
      <button className='btn btn-primary'>Apply</button>
    </div>
  );
}

export default App;

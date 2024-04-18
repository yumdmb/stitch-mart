import logo from './logo.svg';
import './App.css';
import JobList from './components/JobList/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Breadcrumb, Card } from 'react-bootstrap';



function App() {
  return (
    <div className='Job-list'>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/jobs'>Products</Breadcrumb.Item>
        <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
      </Breadcrumb>      
      <h2>Jobs</h2>
      <JobList />
      <Alert variant='primary'>You have successfully applied for the job</Alert>
      <Card>
        <Card.Header>Job Description</Card.Header>
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </Card.Text>
        </Card.Body>
      </Card>
      <button className='btn btn-primary'>Apply</button>
    </div>
  );
}

export default App;

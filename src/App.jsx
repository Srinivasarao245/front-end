import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
export default App;

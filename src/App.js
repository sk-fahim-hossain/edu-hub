import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Courses from './Component/Courses/Courses';
import NotMatched from './Component/NotMatched/NotMatched';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import ContactUs from './Component/ContactUs/ContactUs';
import CourseDetails from './Component/CourseDetails/CourseDetails';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/about_us" element={<About/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/courses/:course_id" element={<CourseDetails/>}></Route>
          <Route path="*" element={<NotMatched/>}></Route>
        </Routes>

      <Footer></Footer>
     

      
    </div>
  );
}

export default App;

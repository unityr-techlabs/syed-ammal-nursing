import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import DepartmentDetail from './pages/academics/DepartmentDetail'
import Curriculam from './pages/academics/Curriculam'
import Admission from './pages/academics/Admission'
import Scholarship from './pages/academics/Scholarship'
import BlogList from './pages/blog/BlogList'
import BlogDetail from './pages/blog/BlogDetail'
import EventList from './pages/event/EventList'
import EventDetail from './pages/event/EventDetail'
import FacultyList from './pages/faculty/FacultyList'
import FacultyDetail from './pages/faculty/FacultyDetail'
import Footer from './components/Footer'
import {AnimatePresence,motion} from 'framer-motion'
import Facilty from './pages/facilities/Facility'
import Student from './pages/student/Student'
import ActivityDetail from './pages/student/ActivityDetail'
import ScrollToTop from './components/ScrollToTop'
import DocumentDetail from './pages/DocumentDetail'
import Contact from './pages/Contact'
function App() {
  const location = useLocation()

  return (
   <>
   <ScrollToTop/>
    <Navbar/>
    <AnimatePresence mode='wait'>
      <motion.div
      key={location.pathname}
      location={location}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
      className="h-full w-full relative"
      >
        <Routes location={location}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/facility' element={<Facilty/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/student/activity/:name' element={<ActivityDetail/>}/>
          <Route path='/department/:name' element={<DepartmentDetail/>}/>
          <Route path='/department/:name/admission' element={<Admission/>}/>
          <Route path='/department/:name/scholarship' element={<Scholarship/>}/>
          <Route path='/department/:name/curriculam' element={<Curriculam/>}/>
          <Route path='/blog' element={<BlogList/>}/>
          <Route path='/blog/:name' element={<BlogDetail/>}/>
          <Route path='/event' element={<EventList/>}/>
          <Route path='/event/:name' element={<EventDetail/>}/>
          <Route path='/event' element={<EventList/>}/>
          <Route path='/event/:name' element={<EventDetail/>}/>
          <Route path='/faculty' element={<FacultyList/>}/>
          <Route path='/faculty/:name' element={<FacultyDetail/>}/>
          <Route path='/document/:name' element={<DocumentDetail/>}/>
        </Routes>
        <Footer/>
      </motion.div>
    </AnimatePresence>
   </>
  )
}

export default App

import { useState,useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cookies from "universal-cookie";
import AppContext from "./context/AppContext";


// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar"

// pages 
import Home from "./pages/Home";
import Search from "./pages/Search";
import Gig from "./pages/Gig";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import AddGig from "./pages/AddGig";


function App() {
 const [user,setUser] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  
  const cookies = new Cookies();
  
  useEffect(()=>{
  setUser(cookies.get('user'))
  console.log(user)
 },[])
 
  return (
    <>
   <AppContext.Provider value={{user}}>
  <Router>
  
 <Header sideBarOpen={sideBarOpen}
 setSideBarOpen={setSideBarOpen}/> 
 
 {sideBarOpen ? <SideBar sideBarOpen={sideBarOpen}
 setSideBarOpen={setSideBarOpen}/> : ""}
 
 <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/search/:searchTerm" element={<Search/>}/>
 <Route path="/gig/:id" element={<Gig/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/*" element={<NoPage/>}/>
 <Route path="/addgig" element={<AddGig/>}/>
 
 </Routes>
 
  <Footer/>
 </Router>
 </AppContext.Provider>
    </>
  )
}

export default App

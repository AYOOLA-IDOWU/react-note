// import React from 'react'
import Animated from './components/Animation/Animated'
// import {Routes, Route}from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Up from './components/Up'
import Backpic from './components/Backpic'
import FirstCard from './components/FirstCard'
import SecondCard from './components/SecondCard'
import Third from './components/Third'
import ThirdCard from './components/ThirdCard'
import Button from './components/Button'
import FormikSingup from './components/FormikSingup'
import Eventesting from './components/Eventesting'
import Signup from './components/Signup'
import FileUpload from './components/FileUpload'




const App = () => {
  return (
    <>
     <Navbar></Navbar>
    <Up></Up>
    <Backpic></Backpic>
    <FirstCard></FirstCard>
    <SecondCard></SecondCard>
    <Third></Third>
    <ThirdCard></ThirdCard>
    <Button style='rounded btn btn-danger  mx-5 mt-5' title="EDIT"></Button>
    <Button style='rounded btn btn-warning mx-5 mt-5' title="DELETE"></Button>
    <Button style='rounded btn btn-primary mx-5 mt-5' title="CREATE"></Button> 
    <Eventesting/>
    <Signup/>
    <FormikSingup></FormikSingup>
    <FileUpload></FileUpload>
    <Animated></Animated>
   
    </>
  )
}

export default App
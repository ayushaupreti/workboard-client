import * as React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../components/Login';
import Task from '../components/Task';
import Comments from '../components/Comments';


const IndexPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/task' element={<Task />} />
        <Route path='/comments/:category/:id' element={<Comments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default IndexPage

export const Head = () => <title>Hello there</title>

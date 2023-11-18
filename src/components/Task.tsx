import React from "react"
import * as socketIO from "socket.io-client";
import AddTask from "./AddTask";
import TasksContainer from "./TasksContainer";
import Nav from "./Nav";

const socket = socketIO.connect("http://localhost:4000");

const Task= () => {
  return (
    <>
        <Nav />
        <AddTask socket={socket}/>
        <TasksContainer socket={socket}/>
    </>
  )
}

export default Task;

export const Head = () => <title>Hello there</title>

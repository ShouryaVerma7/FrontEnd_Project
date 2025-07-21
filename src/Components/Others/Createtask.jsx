import React, { useState } from 'react'
import NewTask from '../TaskList/NewTask'

const Createtask = ()=> {

const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [asignTo, setAsignTo] = useState('')
const [category, setCategory] = useState('')

const [newtask, setNewTask] = useState({})

const submitHandler = (e)=>{
e.preventDefault()

setNewTask({taskTitle,taskDescription,taskDate, asignTo, active:false, NewTask:true,failed:false,completed:false})
const data = JSON.parse(localStorage.getItem('employees'))
// console.log(data)

data.forEach(function(elem){
  if(asignTo == elem.firstname){
   elem.tasks.push(newtask)
   elem.taskCounts.NewTask = elem.taskCounts.newTask+1
   console.log(elem)

  }
})
localStorage.setItem('employees', JSON.stringify(data))

setTaskTitle('')
setCategory('')
setAsignTo('')
setTaskDate('')
setTaskDescription('')

}

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full  items-start justify-between'>
            <div className='w-1/2'>
            <div> <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='text-sm py-1 w4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a UI design' /></div>


            <div><h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
             value={taskDate}
             onChange={(e)=>{
               setTaskDate(e.target.value)
             }}
            className='text-sm py-1 w4/5 rounded outline-none bg-transparent border-[1px]' type="date" /></div>


           <div> <h3 className='text-sm text-gray-300 mb-0.5'>Asignn to</h3>
           <input
            value={asignTo}
            onChange={(e)=>{
              setAsignTo(e.target.value)
            }}
           className='text-sm py-1 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' type="text" placeholder='employee name' /></div>
           
           
           <div> <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
           <input 
           value={category}
           onChange={(e)=>{
             setCategory(e.target.value)
           }}
           
           className='text-sm py-1 w4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, dev, etc'/></div>
            </div>
          

           <div className='w-2/5 flex flex-col items-start'> <h3 className='text-sm text-gray-300 mb-0.5' >Descprition</h3>
        
           <textarea
           value={taskDescription}
           onChange={(e)=>{
             setTaskDescription(e.target.value)
           }}  className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10" ></textarea></div>
            
            <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </form>
      </div>
  )
}

export default Createtask

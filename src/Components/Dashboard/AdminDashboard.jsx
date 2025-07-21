import React from 'react'
import Header from '../Others/Header'
import Createtask from '../Others/Createtask'
import AllTask from '../TaskList/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser = {props.changeUser}/>
      <Createtask/>
      <AllTask/>


     
    </div>
    

    
  )
}

export default AdminDashboard

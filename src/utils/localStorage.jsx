
localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Complete the project report",
        "taskDate": "2025-01-26",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Attend the team meeting",
        "taskDate": "2025-01-27",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Fix UI bugs in the dashboard",
        "taskDate": "2025-01-28",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": { "active": 2, "completed": 1, "failed": 0, "newTask": 1 }
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Prepare for the client presentation",
        "taskDate": "2025-01-26",
        "category": "Presentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Submit monthly performance report",
        "taskDate": "2025-01-29",
        "category": "Reports",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumber": { "active": 1, "completed": 0, "failed": 1, "newTask": 1 }
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Plan the team-building activity",
        "taskDate": "2025-02-01",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Fix backend API errors",
        "taskDate": "2025-01-30",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumber": { "active": 1, "completed": 1, "failed": 0, "newTask": 1 }
  },
  {
    "id": 4,
    "firstname": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Update project documentation",
        "taskDate": "2025-01-28",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Conduct a code review",
        "taskDate": "2025-01-29",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Prepare budget estimates",
        "taskDate": "2025-02-02",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": { "active": 2, "completed": 1, "failed": 0, "newTask": 2 }
  },
  {
    "id": 5,
    "firstname": "Vikas",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Task 1",
        "taskDescription": "Resolve customer complaints",
        "taskDate": "2025-01-27",
        "category": "Customer Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Task 2",
        "taskDescription": "Optimize database queries",
        "taskDate": "2025-01-30",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Task 3",
        "taskDescription": "Train the new intern",
        "taskDate": "2025-01-31",
        "category": "Training",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumber": { "active": 2, "completed": 1, "failed": 0, "newTask": 1 }
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
  }
];

  

  
  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        
        return {employees,admin};
  } 

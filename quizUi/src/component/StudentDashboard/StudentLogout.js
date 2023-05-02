import React from 'react'

function StudentLogout() {
    localStorage.removeItem('studentLoginStatus')
    
      window.location.href='/student-login'
    

  return (
    <div>Student Logout</div>
  )
}

export default StudentLogout
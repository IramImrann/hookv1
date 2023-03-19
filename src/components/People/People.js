import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


import './people.css'
export const People = ({list}) => {
  return (
    <>
    <div className="results">
    <h2>People List</h2>
    {list.length === 0 && <p>No people...</p>}
    {list.map((item, index) => (
      <p key={item.name}>
        <NavLink  to={`/people/${index + 1}`} className={({isActive})=>(isActive ? 'activeLink':'none')}>
          {item.name}
        </NavLink>
       
      </p>
    ))}
    
  </div>
   <Outlet/>
   </>
   
  )
}

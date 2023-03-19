import React from 'react'
import './films.css'
import { NavLink, Outlet } from 'react-router-dom';

export const Films = (props) => {
  const { list } = props;
  return (
    <>
    <div className="results">
      <h2>Film List</h2>

      {list.length === 0 && <p>No films...</p>}
      {list.map((film, index) => (
        <p key={film.title}>
           <NavLink  to={`/films/${index + 1}`} className={({isActive})=>(isActive ? 'activeLinkF':'none')}>
          {film.title}
        </NavLink>
        </p>
      ))}
    </div>
    <Outlet/>
  </>
  )
}

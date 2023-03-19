import React from 'react'
import './planets.css'

import {NavLink, Outlet} from 'react-router-dom'

//import { Planet } from '../Planet/Planet'




export const Planets = (props) => {
const {list}= props;
  

  return (
    <>


<div className="results">
        <h2>Planet List</h2>

        {list.length === 0 && <p>No planets...</p>}
        {list.map((planet, index) => (
          <p key={planet.name}>
            <NavLink to={`/planets/${index + 1}`} className={({isActive})=>(isActive ? "activeLink":'none')}>
              {planet.name}
            </NavLink>
          </p>
        ))}
      </div>
      <Outlet/>
     
 
  </>
  )
}


/** <div className="details">
    <Routes>
        <Route path="/planets/:id" element={<Planet findPlanet={findPlanet}/>}>
        
        </Route>
        </Routes>
      </div> 
      --------------------------------
      function findPlanet(id) {
    return list.find((item, index) => parseInt(id) === index + 1);
  }

      
       <NavLink to = {`/planets/${index + 1}`} className={({isActive})=>(isActive ? "activeLink":'none')}>
          {planet.title}
        </NavLink>
      */
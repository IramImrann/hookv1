import React from 'react'
import {PropTypes} from 'prop-types'
import {Outlet} from 'react-router-dom'

export const Home = (props) => {
 const {time,active,name}= props
 let nms = Array.isArray(name)? name.join('and') : name
  return (
    <>
<div>
  <h3> Welcome {nms}, to your domain</h3>
  <p>The time is{new Date(time).toLocaleTimeString()}</p>
  <p>The Component is {active ? 'active': 'Notactive'}</p>
  {props.children}
  
</div>   
<Outlet/>  
</> 
  )
}


Home.defaultProps={
  time: Date.now(),

}
Home.propTypes={
  name:PropTypes.oneOfType([PropTypes.string,PropTypes.array]).isRequired,
  time:PropTypes.number,
  active:PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
 
  

}
// {/** children: PropTypes.element.isRequired,*/}
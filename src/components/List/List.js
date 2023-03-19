import './list.css'
import React from 'react'
import { ListItem } from '../ListItem/ListItem'

export const List = (props) => {
  return (
    <ul className='list'>
        {props.data.map((item)=>(
            <ListItem key={item.title} data={item} />
        ))}
    </ul>
    
  )
}

import React from 'react'
import { useParams } from 'react-router-dom';
export const Person = ({list}) => {

    const { id } = useParams();
  // let loc = useLocation();
  // let hist = useHistory();
  // const id = params.id;
  //synchronous search through the list array
  let person = list.find((item, index) => parseInt(id) === index + 1);
  return (
    <div>
    <h2>Person Details {id}</h2>
    {person && <p>{person.name}</p>}
    {person && <p>{person.birth_year}</p>}
  </div>
  )
}

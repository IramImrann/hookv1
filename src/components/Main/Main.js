
import {Routes,Route, useLocation} from 'react-router-dom'
//import {Redirect} from 'react'

import { People } from '../People/People'
//import { Planet } from '../Planet/Planet'
import {useState,useEffect} from 'react'
import { Person } from '../Person/Person'
import { Home } from '../Home/Home'
import { Sub } from '../Sub/Sub'
import { Films } from '../Films/Films'
import { Film } from '../Film/Film'
import { Planets } from '../Planets/Planets'
import { Planet } from '../Planet/Planet'




export const Main = (props) => {

  const { pathname } = useLocation();
  const { keyword } = props;
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]); //list of films
  const [planets, setPlanets] = useState([]); //list of planets


  let name = ['Kylo','Ray','Luke'];
 

  useEffect(() => {
    (async function () {
      let url = 'https://swapi.dev/api';
      if (pathname.indexOf('/people') > -1) {
        let resp = await fetch(`${url}/people?search=${keyword}`);
        let data = await resp.json();
        setPeople(data.results);
      }
     
      if (pathname.indexOf('/films') > -1) {
        let resp = await fetch(`${url}/films?search=${keyword}`);
        let data = await resp.json();
        setFilms(data.results);
      }

      if (pathname.indexOf('/planets') > -1) {
        let resp = await fetch(`${url}/planets?search=${keyword}`);
        let data = await resp.json();
        setPlanets(data.results);
      }
    })();
  }, [pathname, keyword]); //run this each time the route changes
      
      
   


  return (
    <div className='mainContent content'>

      <Routes>
      
        <Route path="/people" element={<People list={people} />}>
       
          <Route path="/people/:id" element={<Person list={people} />}/>
        
            {/* Person is passed prop with fetch results */}
          </Route> 
          
          <Route path="/films" element={<Films list={films} />}>
       
          <Route path="/films/:id" element={<Film list={films} />}/>
        
            {/* Person is passed prop with fetch results */}
          </Route> 
          <Route path="/planets" element={<Planets list={planets} />}>
       
       <Route path="/planets/:id" element={<Planet list={planets} />}/>
     
         {/* Person is passed prop with fetch results */}
       </Route> 

         
       
     

         
          <Route path="*" element={<Home name = {name}active={false}time={new Date()-50000000}>
            {/**Its children */}
            <Sub/>
      
          </Home>}
         
          />
          
          
      
         
        
          </Routes>
       
         </div>
  )
}

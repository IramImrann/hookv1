import { List } from '../List/List';
import './searchhistory.css';

export default function SearchHistory(props) {
  const {terms} = {...props}
  let formattedData = terms.map((item,index)=>{
    return{
      ref:index,
      title:item,
      txt:null
    }
  })
  return (
    <div className='history'>
      <List data={formattedData}/>
    </div>
   
  );
}


/** <ul>
      {props.terms.map((term) => (
        <li key={term}>{term}</li>
      ))}
    </ul> */
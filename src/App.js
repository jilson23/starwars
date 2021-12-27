import './App.css';
import { useEffect, useState } from 'react';
import {getPeople} from './servicios/people'

function App() {
  const [peoples, setPeoples] = useState([])
  useEffect(() =>{
    async function axiosProduct(url){
      const data = await getPeople(url);
      setPeoples(data.data.results);
      console.log(data)
    }
    axiosProduct('https://swapi.dev/api/people/');
  },[])

  function hanlderClickPrevius(){
    alert('previus')
  }
  function hanlderClickNext(){
    alert('Next')
  }

  return (
    <div className="App">
      {peoples?.map(people => (
        <div key={people.name} className='characters'>
          <h1>{people.name}</h1>
          <p>{people.gender}</p>
          <p>{people.birth_year}</p>
          <p>{people.height} Cms</p>
          <p>{people.mass} Kilos</p>
        </div>
      ) )}
      <button onClick={hanlderClickPrevius}>Previus</button><button onClick={hanlderClickNext}>Next</button>
    </div>
  );
}

export default App;

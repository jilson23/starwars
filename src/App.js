import './App.css';
import { useEffect, useState } from 'react';
import {getPeople} from './servicios/people'

function App() {
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://swapi.dev/api/people/')
  useEffect(() =>{
    async function axiosProduct(url){
      const data = await getPeople(url);
      setData(data.data);
      console.log(data)
    }
    axiosProduct(url);
  },[url])

  function hanlderClickPrevious(){
    setUrl(data.previous)
  }
  function hanlderClickNext(){
    setUrl(data.next)
  }

  return (
    <div className="App">
      {data?.results?.map(people => (
        <div key={people.name} className='characters'>
          <h1>{people.name}</h1>
          <p>{people.gender}</p>
          <p>{people.birth_year}</p>
          <p>{people.height} Cm</p>
          <p>{people.mass} K</p>
        </div>
      ) )}
      {data.previous ? <button type="button" onClick={hanlderClickPrevious}>Previus</button> : <button type="button" disabled>Previus</button>}
      {data.next ? <button type="button" onClick={hanlderClickNext}>Next</button> : <button type="button" disabled>Next</button>}
    </div>
  );
}

export default App;

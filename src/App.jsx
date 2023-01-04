import { useEffect, useState } from 'react'
import {Card, CardContent} from '@mui/material';
import { getAreaData } from './api'

import './App.css'
import SearchBar from './SearchBar';

function App() {

  const [areas, setAreas] = useState([]),
    [searchValue, setSearchValue] = useState('BB10')

  const load = async () => {
    try {
      const areaData = await getAreaData(searchValue)
  
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app")
    }
  }

  useEffect(() => {
    load();
  }, [searchValue]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <SearchBar setSearchValue={setSearchValue} />
      <h2>{`Areas for ${searchValue}: ${areas.length}`}</h2>
        {areas.map(area => (
          <Card key={area['place name']} style={{ margin: '5px', display: 'flex', justifyContent: 'space-around'}} >
            <CardContent >
              {area['place name']}
            </CardContent>
            <CardContent>
              {` ${area.state}(${area['state abbreviation']}) `}
            </CardContent>
            <CardContent>
              {` Longitude: ${area.longitude}  Latitude: ${area.latitude}`}
            </CardContent>
          </Card>
        ))}
      
    </div>
  )
}

export default App

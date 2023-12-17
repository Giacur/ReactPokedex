import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import Card from './components/Card';

function App() {

  const [list , setList] = useState([]);

  useEffect( ()=>{
      for (let index = 1; index < 101; index++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${index}/`;
        const getPokemon = async ()=>{
            const response = await fetch(url);
            const data = await response.json();
            setList(prevState=>{
              return [
                ...prevState, data
              ]
            })
        }

        getPokemon();
    }
  }, []);

  console.log(list[0])


  return (
    <>
      <Header>
        <NavBar />
      </Header>

      <MainSection>
        {list.map(pokemon=>{
            return  <Card key={pokemon.name} pokemon={pokemon}/>
          })}
      </MainSection>
    </>
  )
}

export default App

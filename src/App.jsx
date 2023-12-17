import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [list , setList] = useState([]);

  useEffect( ()=>{
      for (let index = 1; index < 13; index++) {
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

  // console.log(list)


  return (
    <>
      <section className='container mx-auto flex flex-wrap'>
        {list.map(pokemon=>{
          return  <article key={pokemon.name} className='w-1/4 shadow-md p-4 flex flex-col justify-center'>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" className='w-full h-2/3'/>
                    <h2 className='text-center font-bold italic capitalize mt-5 text-2xl'>{pokemon.name}</h2>
                  </article>
        })}
      </section>
    </>
  )
}

export default App

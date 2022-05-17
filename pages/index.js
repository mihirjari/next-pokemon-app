import styles from "../styles/Home.module.css";
import {useState} from "react";
import Pokemon from "../components/Pokemon";

const Home = ({pokemons}) => {

const [pokemon, setPokemon] = useState(pokemons);

const [offset, setOffset] = useState(0);


const fetchPokemon = async (url, next) => {

  const res = await fetch(url);
  const nextPokemon = await res.json();
  setOffset(next ? offset+20 : offset-20)
  setPokemon(nextPokemon);
  
}

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 ${styles.container}`}>
          {
            pokemon.results.map((pokemon, index) => (
              
                <Pokemon key={index} pokemon={pokemon} index={index+offset} />
            ))
          }
      </div>

      <div className="flex justify-center mt-5 gap-5">
        <button disabled={(!pokemon.previous)} onClick={() => fetchPokemon(pokemon.previous, false)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button disabled={(!pokemon.next)} onClick={() => fetchPokemon(pokemon.next, true)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(process.env.API);
  const pokemons = await res.json();
  return {
    props: {
      pokemons,
    },
  }
}

export default Home;
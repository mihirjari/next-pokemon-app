import Image from "next/image";
import Link from "next/link";

const Pokemon = ({pokemon, index}) => {

    const pokeIndex = ('000'+ (index + 1)).slice(-3); 
    return (
    <>
        <Link href={`/pokemon/${pokemon.name}`}>
            <div className="shadow hover:shadow-xl p-5 flex flex-col justify-center items-center relative cursor-pointer">
                <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`} height={150} width={150} alt={pokemon.name} />
                <span className=" z-0 absolute text-4xl text-slate-500 top-0 right-3">#{pokeIndex}</span>
                {pokemon.name}
            </div>
        </Link>
    </>
    )
}

export default Pokemon;
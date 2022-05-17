import Image from "next/image"
import Link from "next/link"

const Pokemon = ({pokemon}) => {

    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    

    return (

        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" height={400} width={400} alt={pokemon.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{pokemon.name}
                    </h1>
                    <p className="mb-1 leading-relaxed"><strong>Abilities:</strong> {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
                    <p className="mb-1 leading-relaxed"><strong>Types:</strong> {pokemon.types.map((type) => type.type.name).join(", ")}</p>

                    <p className="mb-1 leading-relaxed">{pokemon.stats.map((stat, index) => (

                        <div key={index}>
                            <strong>{stat.stat.name}:</strong> {stat.base_stat}
                        </div>

                    ))}</p>
                    
                    <p className="mb-1 leading-relaxed"><strong>Height:</strong> {pokemon.height}" <span><strong>Weight:</strong> {pokemon.weight} Kg</span></p>
                    <div className="flex justify-center">
                        <Link href="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button></Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export const getServerSideProps = async (context) => {

    const {name} = context.query;
    //const res = await fetch(`${process.env.API}/${name}`);
    const res = await fetch(process.env.API+"/"+name);
    const pokemon = await res.json();

    return {
        props: {
            pokemon,
        },
    }
}

export default Pokemon;
export default function Card({pokemon, ...props}){
    return <article {...props} className='w-1/4 px-2 mb-4'>
                <div className="shadow-md bg-slate-50/25 backdrop-blur-xl shadow-amber-200 flex flex-col h-[20rem] justify-center rounded-md">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" className='h-2/3'/>
                    <h2 className='text-center text-neutral-200 drop-shadow-md font-bold italic capitalize mt-5 text-2xl'>{pokemon.name}</h2>
                </div>
            </article>
}
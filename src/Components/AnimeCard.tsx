import {Link} from "react-router";

function AnimeCard({id, title, image}: {id: number, title: string, image: string}) {
    return (
        <Link to={`/anime/${id}`} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[3/4.2] overflow-hidden rounded-2xl bg-white p-2 shadow-md border border-[#eee8dd] group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img className="w-full h-full object-cover rounded-xl" src={image} alt={title}/>
            </div>
            <h3 className="mt-4 text-sm font-bold text-[#7a726a] text-center px-2 line-clamp-2 group-hover:text-[#c4a484] transition-colors">{title}</h3>
        </Link>
    );
}

export default AnimeCard;
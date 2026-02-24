import { useParams } from "react-router";
import BackButton from "../Components/BackButton.tsx";
import { useQuery } from "@tanstack/react-query";

function Detail() {
    const { id } = useParams();

    const fetchFn = (id: string) => {
        return fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then((data: any) => data.data)
    }

    const { data: anime, isLoading } = useQuery({
        queryKey: ["Detail", id],
        queryFn: () => fetchFn(id || ""),
    });

    if (isLoading) return <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center text-[#a09383]">LOADING...</div>;
    if (!anime) return <p>UNDEFINED</p>;

    return (
        <div className="min-h-screen bg-[#f8f5f0] py-12 px-6 text-[#5d544d]">
            <div className="max-w-3xl mx-auto">
                <BackButton />

                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[#eee8dd]">
                    <div className="flex flex-col items-center">
                        <img
                            src={anime.images.jpg.large_image_url}
                            className="w-64 h-auto rounded-xl shadow-lg border-[10px] border-[#fdfbf7]"
                            alt={anime.title}
                        />

                        <div className="text-center mt-8">
                            <span className="inline-block px-3 py-1 bg-[#f0ede6] text-[#a09383] text-[11px] font-bold rounded-full mb-4 uppercase tracking-[0.2em]">
                                Rank #{anime.rank} • Score {anime.score}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4a443f] mb-6 leading-tight">{anime.title}</h2>
                        </div>

                        <div className="w-full h-[1px] bg-[#eee8dd] my-8" />

                        <div className="w-full grid grid-cols-3 gap-4 mb-10">
                            <div className="text-center">
                                <p className="text-[10px] text-[#ccc2b5] font-bold uppercase mb-1">Year</p>
                                <p className="font-serif text-[#5d544d]">{anime.year || "N/A"}</p>
                            </div>
                            <div className="text-center border-x border-[#eee8dd]">
                                <p className="text-[10px] text-[#ccc2b5] font-bold uppercase mb-1">Favorites</p>
                                <p className="font-serif text-[#5d544d]">{anime.favorites.toLocaleString()}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] text-[#ccc2b5] font-bold uppercase mb-1">Status</p>
                                <p className="font-serif text-[#5d544d]">{anime.status || "N/A"}</p>
                            </div>
                        </div>

                        <div className="w-full">
                            <h4 className="font-serif font-bold text-[#8c7b6c] mb-3 text-lg italic">PLOT</h4>
                            <p className="text-[#7a726a] leading-[1.8] text-sm md:text-base whitespace-pre-wrap">
                                {anime.synopsis || "UNKNOWNS"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
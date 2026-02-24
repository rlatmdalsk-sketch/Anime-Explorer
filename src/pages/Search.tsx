import { useState } from "react";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import AnimeCard from "../Components/AnimeCard.tsx";
import BackButton from "../Components/BackButton.tsx"; // 백버튼 임포트

const fetchFn = (keyword: string) => {
    return fetch(`https://api.jikan.moe/v4/anime?q=${keyword}`)
        .then((res) => res.json())
        .then((data: any) => data.data);
};

function Search() {
    const [params, setParams] = useSearchParams();
    const keyword = params.get("keyword") || "";
    const [query, setQuery] = useState(keyword);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["search", keyword],
        queryFn: () => fetchFn(keyword),
    });

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-[#5d544d] p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-start">
                    <BackButton />
                </div>

                <header className="mb-12">
                    <h1 className="text-3xl font-serif font-bold text-center mb-8 italic text-[#8c7b6c]">
                        " {keyword} "
                    </h1>

                    <form
                        className="flex justify-center gap-2 max-w-lg mx-auto"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setParams({ keyword: query });
                        }}
                    >
                        <input
                            className="flex-1 px-5 py-2.5 rounded-full border-2 border-[#eee8dd] bg-white outline-none focus:border-[#c4a484] transition-all"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="title"
                        />
                        <button className="px-6 py-2.5 bg-[#c4a484] cursor-pointer text-white rounded-full font-bold hover:bg-[#b39373] transition-colors shadow-md">
                            SEARCH
                        </button>
                    </form>
                </header>

                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-10 h-10 border-4 border-[#e2d7c5] border-t-[#c4a484] rounded-full animate-spin mb-4"></div>
                        <p className="font-serif italic text-[#a09383]">LOADING...</p>
                    </div>
                )}

                {!isError && data && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {data.map((item: any) => (
                            <AnimeCard
                                key={item.mal_id}
                                id={item.mal_id}
                                title={item.title}
                                image={item.images.jpg.image_url}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
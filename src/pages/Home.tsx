import {type ChangeEvent, type FormEvent, useState} from "react";
import {useNavigate} from "react-router";

function Home() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const Onsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate(`/Search?keyword=${input}`)
    }

    const Onchange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className="w-screen h-dvh flex flex-col justify-center items-center bg-[#f8f5f0] text-[#4a443f]">
            <div className="absolute top-10 w-32 h-32 bg-[#e8dcc4] rounded-full opacity-50 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl font-serif font-bold mb-2 text-[#5d544d]">
                    Anime Explorer
                </h1>
                <p className="text-[#a09383] mb-12 font-medium tracking-wide">Search Anime</p>

                <form onSubmit={Onsubmit} className="w-full max-w-[400px] px-6">
                    <div className="relative">
                        <input
                            className="w-full p-4 rounded-full bg-white border-2 border-[#e2d7c5] text-[#5d544d] focus:outline-none focus:border-[#c4a484] transition-all duration-300 shadow-sm placeholder:text-[#ccc2b5]"
                            onChange={Onchange}
                            placeholder="title"
                        />
                        <button className="absolute right-5 top-1/2 -translate-y-1/2 text-[#c4a484] font-bold hover:text-[#a6896a]">
                            SEARCH
                        </button>
                    </div>
                </form>
            </div>

            <div className="absolute bottom-0 w-full h-4 bg-[#dccfb4]" />
        </div>
    );
}

export default Home;
import { useNavigate } from "react-router";

function BackButton() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white border-2 border-[#eee8dd] text-[#a09383] rounded-full font-bold text-sm hover:bg-[#fdfbf7] hover:border-[#c4a484] hover:text-[#c4a484] transition-all duration-300 shadow-sm mb-6 group"
        >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK</span>
        </button>
    );
}

export default BackButton;
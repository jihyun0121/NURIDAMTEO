import SquareArroIcon from "../ui/icons/SquareArrowIcon";
import SquareNumber from "../ui/icons/SquareNumber";

export default function Pagination({ currentPage, totalPages, onChange }) {
    const goFirst = () => onChange(1);
    const goLast = () => onChange(totalPages);
    const goPrev = () => onChange((prev) => Math.max(prev - 1, 1));
    const goNext = () => onChange((prev) => Math.min(prev + 1, totalPages));

    if (totalPages <= 1) return null;

    return (
        <div className="pagination">
            <SquareArroIcon size={44} variant="double" direction="left" onClick={goFirst} style={{ cursor: "pointer" }} />

            <SquareArroIcon size={44} direction="left" onClick={goPrev} style={{ cursor: "pointer" }} />

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <SquareNumber key={page} value={page} type={page === currentPage ? "hover" : "default"} onClick={() => onChange(page)} />
            ))}

            <SquareArroIcon size={44} direction="right" onClick={goNext} style={{ cursor: "pointer" }} />

            <SquareArroIcon size={44} variant="double" direction="right" onClick={goLast} style={{ cursor: "pointer" }} />
        </div>
    );
}

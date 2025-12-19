import FaqList from "./FaqList";
import NewsList from "./NewsList";
import NoticeList from "./NoticeList";
import ResultList from "./ResultList";

export default function NurisodamContent({ category }) {
    switch (category) {
        case "공지사항":
            return <NoticeList />;
        case "동네소식":
            return <NewsList />;
        case "FAQ":
            return <FaqList />;
        case "결과 게시판":
            return <ResultList />;
        default:
            return null;
    }
}

import { useEffect, useState } from "react";
import { ResultAPI } from "../../../api/api";

export default function useResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadResults = async () => {
            try {
                setLoading(true);
                const res = await ResultAPI.getResults();
                setResults(res.data || []);
            } catch (e) {
                console.log("결과 목록 로딩 실패", e);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        loadResults();
    }, []);

    return { results, loading };
}

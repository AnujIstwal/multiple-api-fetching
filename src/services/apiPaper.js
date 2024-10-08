import axios from "axios";

export async function getPapers(query) {
    try {
        const res = await axios.get("https://temp-proxy-server.vercel.app/api/scholar", {
            params: { q: query },
        });

        // console.log(res);
        if (res.status === 200) {
            return res.data.organic_results;
        }
    } catch (error) {
        console.error(error.message || error);
        throw new Error(error.message || error);
    }
}

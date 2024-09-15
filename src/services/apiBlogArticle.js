import axios from "axios";

const BING_WEB_API_KEY = "8db0cfe036db4499a28fbaa2494bb463";

export async function getBlogArticle(query) {
    try {
        const res = await axios.get(
            "https://api.bing.microsoft.com/v7.0/search",
            {
                params: { q: query, count: 5 },
                headers: { "Ocp-Apim-Subscription-Key": BING_WEB_API_KEY },
            }
        );

        if (res.status === 200) {
            return res.data?.webPages?.value;
        }
    } catch (error) {
        console.error(error.message || error);
        throw new Error(error.message || "Unable to fetch blog articles");
    }
}

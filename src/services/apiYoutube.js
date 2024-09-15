import axios from "axios";

const api_key = "AIzaSyDWoZXJ_iTRa6XREVA7q8tO9NnhAOFQRrg";

export async function getYtData(query) {
    try {
        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
                params: {
                    part: "snippet",
                    q: query,
                    key: api_key,
                    maxResult: 5,
                    type: "video",
                },
            }
        );

        // console.log(response);

        if (response.status === 200) {
            const videoIds = response.data.items
                .map((item) => item.id.videoId)
                .join(",");

            //fetching multiple ids statistics
            const videoDetailsResponse = await axios.get(
                `https://www.googleapis.com/youtube/v3/videos`,
                {
                    params: {
                        part: "snippet,statistics",
                        id: videoIds,
                        key: api_key,
                    },
                }
            );

            //console.log(videoDetailsResponse);
            return videoDetailsResponse.data.items;
        }
    } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
    }
}

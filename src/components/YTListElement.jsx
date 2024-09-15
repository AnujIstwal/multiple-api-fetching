import { formatNumber } from "../helper/uitility";
import { FaImage, FaPlay } from "react-icons/fa6";
import { FaEye, FaHeart } from "react-icons/fa";
import { truncateTitle } from "../helper/uitility";

export default function YTListElement({ obj }) {
    const { channelTitle, title, thumbnails } = obj?.snippet;
    const { viewCount, likeCount } = obj?.statistics;
    const url = `https://www.youtube.com/watch?v=${obj.id}`;
    const smallTitle = truncateTitle(title, 8);

    return (
        <li className="flex sm:flex-row flex-col gap-y-4 justify-between sm:gap-x-10 py-5 px-6 rounded-lg bg-white border border-slate-300 mt-6">
            <div>
                {thumbnails?.default?.url ? (
                    <div className="flex flex-col gap-y-4">
                        <img
                            src={thumbnails.default.url}
                            alt="Video"
                            className="w-[128px] rounded-md self-center"
                        />
                        <a
                            href={url}
                            target="_blank"
                            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
                        >
                            <FaPlay className="text-red-50 mx-auto" />
                        </a>
                    </div>
                ) : (
                    <div className="flex h-[96px] w-[128px] items-center justify-center bg-gray-200">
                        <FaImage className="text-center text-3xl text-gray-400" />
                    </div>
                )}
            </div>

            <div className=" sm:flex sm:flex-col sm:items-end font-bold text-slate-800 w-96 ">
                <p className=" text-base font-semibold leading-6 text-gray-700 border-b pb-2 self-start w-full">
                    {smallTitle}
                </p>

                <div className="flex gap-4 text-sm self-start mt-4 font-normal">
                    <p className="text-slate-600 w-20 ">Channel</p>
                    <p className="min-w-40 w-40">{channelTitle}</p>
                </div>

                <div className="flex gap-4 text-sm self-start font-normal mt-2">
                    <p className="text-slate-600 w-20">Views</p>
                    <p className="min-w-40 w-40 flex gap-2 items-center">
                        <FaEye className="text-slate-500" />{" "}
                        {formatNumber(viewCount)}
                    </p>
                </div>

                <div className="flex gap-4 text-sm self-start font-normal mt-2">
                    <p className="text-slate-600 w-20">Likes</p>
                    <p className="min-w-40 w-40 flex gap-2 items-center">
                        <FaHeart className=" text-red-500" />{" "}
                        {formatNumber(likeCount)}
                    </p>
                </div>
            </div>
        </li>
    );
}

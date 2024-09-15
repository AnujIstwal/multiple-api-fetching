import React from "react";

export default function RadioGroup({ option, setOption }) {
    return (
        <div
            role="form"
            className="flex flex-col gap-4  items-start text-sm bg-white rounded-lg px-4 py-4 mt-6 max-w-xs mx-auto"
        >
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="all"
                    name="choice"
                    id="all"
                    onChange={() => setOption("all")}
                    checked={option === "all"}
                    className="w-4 h-4 accent-violet-600  bg-gray-100 border-gray-300 "
                />
                <label htmlFor="all">All</label>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="yt"
                    name="choice"
                    id="yt"
                    onChange={() => setOption("yt")}
                    checked={option === "yt"}
                    className="w-4 h-4 accent-violet-600 bg-gray-100 border-gray-300 "
                />
                <label htmlFor="yt">Only Youtube Videos</label>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="blog"
                    name="choice"
                    id="blog"
                    onChange={() => setOption("blog")}
                    checked={option === "blog"}
                    className="w-4 h-4 accent-violet-600 bg-gray-100 border-gray-300 "
                />
                <label htmlFor="blog">Only Blogs & Articles</label>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="radio"
                    value="paper"
                    name="choice"
                    id="paper"
                    onChange={() => setOption("paper")}
                    checked={option === "paper"}
                    className="w-4 h-4 accent-violet-600 bg-gray-100 border-gray-300 "
                />
                <label htmlFor="paper">Only Academic Papers</label>
            </div>
            <input type="submit" hidden />
        </div>
    );
}

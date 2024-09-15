import React from "react";

export default function AcademicPaperListElement({ obj }) {
    const {
        title,
        link,
        publication_info: { summary, authors },
    } = ({} = obj);

    return (
        <li className=" px-4 py-4 rounded-md mt-6 border border-slate-300 bg-white">
            <div className="flex gap-x-6 gap-y-4 flex-wrap justify-between items-center pb-2 border-b-2 border-slate-100">
                <h1 className="text-lg font-bold text-slate-700 max-w-96">
                    {title}
                </h1>
                <a
                    href={link}
                    target="_blank"
                    className="text-xs font-semibold bg-violet-100 text-violet-600 py-1 rounded-full px-3 truncate"
                >
                    Visit paper
                </a>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4 text-sm">
                    <p className="text-slate-600 w-20">Authors</p>
                    <ul>
                        {authors?.map((author) => (
                            <li key={author.author_id}>{author.name}</li>
                        )) || "Not Available"}
                    </ul>
                </div>
                <div className="flex gap-4 text-sm">
                    <p className="text-slate-600 w-20">Summary</p>
                    <p className="min-w-40 w-60">{summary}</p>
                </div>
            </div>
        </li>
    );
}

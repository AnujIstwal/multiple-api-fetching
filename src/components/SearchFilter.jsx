import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getYtData } from "../services/apiYoutube";

export default function SearchFilter({ query, setQuery, onSubmit }) {
    function handle(e) {
        e.preventDefault();
        onSubmit(e);
    }
    return (
        <div className="flex justify-center" onSubmit={handle}>
            <form className="flex gap-4">
                <input
                    className="w-[20rem] h-10 text-base text-slate-600 tracking-wider rounded-lg px-4 py-3  border border-violet-500 outline-none focus:ring-2 focus:ring-offset-1 focus:ring-violet-200"
                    placeholder="Search Query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-violet-500 text-violet-50 shadow-md rounded-lg hover:bg-violet-600"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

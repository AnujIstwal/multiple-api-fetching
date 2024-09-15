import axios from "axios";
import { useState } from "react";
import BlogArticlesListElement from "./BlogArticlesListElement";

export default function BlogArticlesList({ blogArticleData = [] }) {
    return (
        <div className="w-full">
            <ul role="list" className="pb-6">
                {blogArticleData?.map((obj) => (
                    <BlogArticlesListElement obj={obj} key={obj.id} />
                ))}
            </ul>
        </div>
    );
}

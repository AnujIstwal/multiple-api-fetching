import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AcademicPaperList from "./components/AcademicPaperList";
import BlogArticlesList from "./components/BlogArticlesList";
import SearchFilter from "./components/SearchFilter";
import YTList from "./components/YTList";
import { getYtData } from "./services/apiYoutube";
import { useState } from "react";
import { getBlogArticle } from "./services/apiBlogArticle";
import { getPapers } from "./services/apiPaper";
import Spinner from "./components/Spinner";
import RadioGroup from "./components/RadioGroup";

function App() {
    const [query, setQuery] = useState("");
    const [option, setOption] = useState("all");
    const [searchTerm, setSearchTerm] = useState(""); // Store the term when search is submitted

    const {
        data: ytData,
        refetch: refetchYt,
        isFetching: isYtFetching,
    } = useQuery({
        queryKey: ["youtube"],
        queryFn: () => getYtData(query),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30, // 30 minutes
        enabled: false, // Fetching is disabled until refetch is called
    });

    const {
        data: blogArticleData,
        refetch: refetchBlog,
        isFetching: isBlogFetching,
    } = useQuery({
        queryKey: ["blog-article"],
        queryFn: () => getBlogArticle(query),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30, // 30 minutes
        enabled: false, // Fetching is disabled until refetch is called
    });

    const {
        data: paperData,
        refetch: refetchPaper,
        isFetching: isPaperFetching,
    } = useQuery({
        queryKey: ["paper"],
        queryFn: () => getPapers(query),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 30, // 30 minutes
        enabled: false, // Fetching is disabled until refetch is called
    });

    const isFetching = isYtFetching || isBlogFetching || isPaperFetching;

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(query); // Set the search term to trigger data fetching
        refetchYt(); // Manually refetch the YouTube data
        refetchBlog(); // Manually refetch the blog and article data
        refetchPaper(); // Manually refetch the paper data
    };

    return (
        <>
            <div className="flex  mx-auto max-w-2xl bg-zinc-100 font-mono h-full min-h-screen ">
                <div className="mx-auto my-6">
                    <SearchFilter
                        query={query}
                        setQuery={setQuery}
                        onSubmit={handleSearch}
                    />
                    <RadioGroup option={option} setOption={setOption} />

                    {isFetching ? (
                        <Spinner />
                    ) : (
                        <div className="flex flex-col items-center px-6 py-4 ">
                            {option === "all" && (
                                <>
                                    <YTList ytData={ytData} />
                                    <BlogArticlesList
                                        blogArticleData={blogArticleData}
                                    />
                                    <AcademicPaperList paperData={paperData} />
                                </>
                            )}
                            {option === "yt" && <YTList ytData={ytData} />}
                            {option === "blog" && (
                                <BlogArticlesList
                                    blogArticleData={blogArticleData}
                                />
                            )}
                            {option === "paper" && (
                                <AcademicPaperList paperData={paperData} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;

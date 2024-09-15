export default function BlogArticlesListElement({ obj }) {
    const { name, siteName, url } = obj;

    return (
        <li className="flex sm:flex-row flex-col gap-y-4 justify-between sm:gap-x-10 py-5 px-6 rounded-lg bg-white border border-slate-300 mt-6">
            <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-700">
                    {name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {siteName}
                </p>
            </div>

            <div className=" shrink-0 sm:flex sm:flex-col sm:items-end font-bold text-slate-800">
                <a
                    className="text-xl leading-6 font-extrabold "
                    href={url}
                    target="_blank"
                >
                    &rarr;
                </a>
            </div>
        </li>
    );
}

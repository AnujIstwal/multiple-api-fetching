import YTListElement from "./YTListElement";

export default function YTList({ ytData = [] }) {
    return (
        <div className="w-full">
            <ul role="list" className="flex flex-col pb-6">
                {ytData?.map((obj) => (
                    <YTListElement obj={obj} key={obj.id} />
                ))}
            </ul>
        </div>
    );
}

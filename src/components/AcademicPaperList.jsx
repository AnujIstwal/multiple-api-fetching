import { useState } from "react";
import AcademicPaperListElement from "./AcademicPaperListElement";

export default function AcademicPaperList({ paperData = [] }) {
    return (
        <div className="w-full">
            <ul>
                {paperData?.map((obj) => (
                    <AcademicPaperListElement obj={obj} key={obj.position} />
                ))}
            </ul>
        </div>
    );
}

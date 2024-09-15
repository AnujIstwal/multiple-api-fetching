import React from "react";
import { HashLoader } from "react-spinners";

export default function Spinner() {
    return (
        <div className=" h-[50%] flex items-center justify-center ">
            <HashLoader size={50} color="#7531f4" />
        </div>
    );
}

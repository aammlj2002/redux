import React from "react";

function DetailList({ label, detail }) {
    return (
        <>
            <div className="flex felx-row">
                <div className="w-2/12 ">
                    <p className="text-white">{label}</p>
                </div>
                <div className="w-10/12 ">
                    <p className="text-blue-500 ">{detail}</p>
                </div>
            </div>
        </>
    );
}

export default DetailList;

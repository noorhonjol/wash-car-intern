import React, { useState, useEffect } from "react";
import axios from "axios";

const DynamicTable = ({ columns, data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-dark-blue uppercase bg-gray-50">
                    <tr>
                        {columns.map((column) => (
                            <th scope="col" className="px-6 py-3" key={column}>{column}</th>
                        ))}
                        <th scope="col" className="px-6 py-3"></th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr className="bg-white border-b" key={index}>
                        {columns.map((column) => (
                            <td className="px-6 py-4" key={column}>{row[column]}</td>
                        ))}
                        <td class="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-bblue hover:underline">Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div >
    );
};

export default DynamicTable;
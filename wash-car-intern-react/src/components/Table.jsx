/* eslint-disable react/prop-types */
import {  Link } from "react-router-dom";
const DynamicTable = ({ columns, data,actionsUrl}) => {
  return (
    <> 

      <div className="w-3/5 sm:rounded-lg md:w2/5 mt-10">
        <table className="text-sm text-left text-gray-500">
          <thead className="text-xs text-dark-blue uppercase bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th scope="col" className="px-6 py-3" key={column}>
                  {column}
                </th>
              ))}
              {actionsUrl&&actionsUrl.map((action,index)=><th scope="col" key={index} className="px-6 py-3"></th>)}
              
            </tr>

          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr className="bg-white border-b" key={index}>
                {columns.map((column) => (
                  <td className="px-6 py-4" key={column}>
                    {row[column]}
                  </td>
                ))}
                {actionsUrl&&actionsUrl.map((actionUrl,i)=>{

                  return (
                  <td key={i} className="px-6 py-4 text-right">

                      <Link
                        to={`../${actionUrl}/${row.id}`}
                        className="font-medium text-bblue hover:underline"
                      >
                        {actionUrl}
                      </Link>

                  </td>)
                })
                }
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DynamicTable;

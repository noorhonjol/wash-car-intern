/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const DynamicTable = ({ columns, data,action,url}) => {
  return (
    <> 
      <Link to="/dashboard/addvehicle" className="text-white bg-bblue hover:bg-White-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 " >
        Add New elements
      </Link>
      <div className="w-3/5 sm:rounded-lg md:w2/5 mt-10">
        <table className="text-sm text-left text-gray-500">
          <thead className="text-xs text-dark-blue uppercase bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th scope="col" className="px-6 py-3" key={column}>
                  {column}
                </th>
              ))}
              <th scope="col" className="px-6 py-3"></th>
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
                <td className="px-6 py-4 text-right">
                  <Link
                    to={`/${url}/${row["id"]}`}
                    className="font-medium text-bblue hover:underline"
                  >
                    {action}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DynamicTable;

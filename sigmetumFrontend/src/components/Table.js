import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }

  const columnNames = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto w-full">
    <table className="w-full">
      <thead>
        <tr className="bg-[#15B659]">
          {columnNames.map((col) => (
            <th
              key={col}
              className="px-4 py-2 text-left text-sm font-bold text-[#F9FBFA] border-b border-[#99BBA8]"
            >
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-[#99BBA8]">
            {columnNames.map((col) => {
              if (col === 'image') {
                return (
                  <td
                    key={col}
                    className="px-4 py-2 text-sm text-[#0C1811] border-b border-[#99BBA8]"
                  >
                    <div
                      className="bg-center bg-no-repeat bg-cover aspect-square rounded-lg min-w-14 min-h-14"
                      style={{
                        backgroundImage: `url("${row[col]}")`,
                      }}
                    ></div>
                  </td>
                );
              }
              return (
                <td
                  key={col}
                  className="px-4 py-2 text-sm text-[#0C1811] border-b border-[#99BBA8]"
                >
                  {row[col]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Table;
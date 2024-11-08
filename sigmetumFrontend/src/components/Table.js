import React, { useState } from "react";
import ButtonPrincipal from "./ButtonPrincipal";

const Table = ({ data, rowsPerPage = 5  }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  if (!data || data.length === 0) {
    return <p>No hay datos disponibles.</p>;
  }


  const columnNames = Object.keys(data[0]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
        if (prevConfig.key === key) {
            return {
                key,
                direction: prevConfig.direction === 'asc' ? 'desc' : 'asc'
            };
        } else {
            return { key, direction: 'asc' };
        }
    });
  };
/*
  const sortedData = [...data].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (key === null) return 0;

    const aValue = a[key];
    const bValue = b[key];
    const order = direction === 'asc' ? 1 : -1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * order;
    } else {
        return aValue.toString().localeCompare(bValue.toString()) * order;
    }
  });
  */

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full">
        <thead>
          <tr className="bg-[#15B659]">
            {columnNames.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-left text-sm font-bold text-[#F9FBFA] border-b border-[#99BBA8]"
                onClick={() => handleSort(col)}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
                {sortConfig.key === col && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-[#99BBA8]">
              {columnNames.map((col) => (
                <td
                  key={col}
                  className="px-4 py-2 text-sm text-[#0C1811] border-b border-[#99BBA8]"
                >
                  {Array.isArray(row[col]) ? (
                            row[col].map((item, index) => (
                                <span key={index}>
                                    {item}
                                    <br />
                                </span>
                            ))
                        ) : (
                            row[col]
                        )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">

      <ButtonPrincipal text="Anterior" onClick={handlePreviousPage} disabled={currentPage === totalPages}/>

        <span>Página {currentPage} de {totalPages}</span>
        <ButtonPrincipal text="Anterior" onClick={handleNextPage} disabled={currentPage === totalPages}/>
      </div>
    </div>
  );
};

export default Table;
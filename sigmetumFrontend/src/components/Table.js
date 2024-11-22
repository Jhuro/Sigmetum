import React, { useState } from "react";
import Pagination from "./Pagination";
import { useTranslation } from 'react-i18next';

const Table = ({ data, rowsPerPage = 5  }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return (
    <p className="text-[#0C1811] text-lg font-semibold">
      {t('dataManagement.table.noDataFoundPlaceholder')}
    </p>
    );
  }

  const columnNames = Object.keys(data[0]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

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
                                    <br/>
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

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(direction) => {
          if (direction === "next" && currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
          } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        }}
      />
    </div>
  );
};

export default Table;
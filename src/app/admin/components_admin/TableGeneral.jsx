import React from "react";

export default function TablesParameters({ columns, data, multiHeader }) {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12 p-0 d-flex flex-column">
          <div
            className="table-responsive w-100"
            style={{
              maxHeight: "400px", 
            }}
          >
            <table className="table table-hover table-sm mb-0">
              <thead
                className="border-bottom"
                style={{
                  backgroundColor: "transparent", 
                  color: "var(--primary-color)", 
                }}
              >
                {multiHeader ? (
                  <>
                    {multiHeader.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <th
                            key={cellIndex}
                            colSpan={cell.colSpan}
                            rowSpan={cell.rowSpan}
                            style={cell.style}
                            className="text-center align-middle"
                          >
                            {cell.label}
                          </th>
                        ))}
                        {rowIndex === 0 &&
                          row.reduce(
                            (acc, cell) => acc + (cell.colSpan ?? 1),
                            0
                          ) < columns.length && (
                            <th
                              colSpan={
                                columns.length -
                                row.reduce(
                                  (acc, cell) => acc + (cell.colSpan ?? 1),
                                  0
                                )
                              }
                              className="text-center align-middle"
                            />
                          )}
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.field}
                        className="text-center align-middle"
                        style={col.headerStyle}
                      >
                        {col.headerName}
                      </th>
                    ))}
                  </tr>
                )}
              </thead>

              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((col) => (
                      <td
                        key={col.field}
                        className="text-center align-middle"
                        style={{
                          padding: "2px",
                          minWidth: "100px", 
                        }}
                      >
                        {col.renderCell ? col.renderCell(row) : row[col.field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

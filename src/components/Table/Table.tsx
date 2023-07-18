import React, { useState } from 'react';

interface TableData {
  id: number;
  name: string;
  age: number;
}

const Table: React.FC = () => {
  const initialData: TableData[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 22 },
  ];

  const [tableData, setTableData] = useState<TableData[]>(initialData);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (event.target.checked) {
      setSelectedRows((prevSelected) => [...prevSelected, id]);
    } else {
      setSelectedRows((prevSelected) => prevSelected.filter((rowId) => rowId !== id));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Checkbox</th>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={(e) => handleCheckboxChange(e, row.id)}
              />
            </td>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

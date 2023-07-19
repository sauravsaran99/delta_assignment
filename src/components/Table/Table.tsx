import React, { useState } from 'react';
import styles from './Table.module.css'
import { useDispatch } from 'react-redux';
import { deleteRow } from '../../redux/actions';

interface TableRow {
  id: number;
  name: string;
  company: string;
  status: string;
  lastUpdated: string;
  notes: string;
}

interface TableProps {
  data: TableRow[];
  company: any[];
  status: string
}

const Table: React.FC<TableProps> = ({ data, company, status }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  if (company.length !== 0) {
    data = data.filter((data: any) => company.includes(data.company))
  }

  if(status !== '') {
    data = data.filter((item) => item.status === status)
  }

  const handleCheckboxChange = (rowId: number) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const handleDelete = (rowId: number) => {
    dispatch(deleteRow(rowId));
    console.log(`Deleting row with ID: ${rowId}`);
  };

  return (
    <table className={styles.custom_table}>
      <thead>
        <tr>
          <th><input
            type="checkbox"
          /></th>
          <th>Name</th>
          <th>Company</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Notes</th>
          {/* <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (

          <tr key={row.id} className={i % 2 == 0 ? styles.col_bgcolorsecondary : styles.col_bgcolorprime}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={() => handleCheckboxChange(row.id)}
              />
            </td>
            <td>{row.name}</td>
            <td>{row.company}</td>
            <td>{row.status}</td>
            <td>{row.lastUpdated}</td>
            <td>{row.notes}</td>
            <td>
              <img src="/delete.svg" width={'25px'} height={'25px'} onClick={() => handleDelete(row.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

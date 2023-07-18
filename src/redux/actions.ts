export const ADD_ROW = 'ADD_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export interface RowData {
  id: number;
  name: string;
  company: string;
  status: string;
  lastUpdated: string;
  notes: string;
}

export interface AddRowAction {
  type: typeof ADD_ROW;
  payload: RowData;
}

export interface DeleteRowAction {
  type: typeof DELETE_ROW;
  payload: number; // Row ID to be deleted
}

export type AppActionTypes = AddRowAction | DeleteRowAction;

export const addRow = (row: RowData): AppActionTypes => ({
  type: ADD_ROW,
  payload: row,
});

export const deleteRow = (rowId: number): AppActionTypes => ({
  type: DELETE_ROW,
  payload: rowId,
});

import { RowData, AppActionTypes, ADD_ROW, DELETE_ROW } from './actions';

export interface AppState {
  data: RowData[];
}

const initialState: AppState = {
  data: [
  { id: 1, name: 'John Doe', company: 'ABC Corp', status: 'Active', lastUpdated: '2023-07-18', notes: 'Lorem ipsum' },
  { id: 2, name: 'Jane Smith', company: 'XYZ Inc', status: 'Inactive', lastUpdated: '2023-07-17', notes: 'Dolor sit amet' },
  // Add more initial data rows as needed
],
};

const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_ROW:
      return {
        ...state,
        data: state.data.filter((row) => row.id !== action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;

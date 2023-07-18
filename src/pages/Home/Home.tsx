import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table"
import { AppState } from "../../redux/reducers";
import styles from './Home.module.css'
import { useDispatch } from 'react-redux';
import { RowData, addRow } from '../../redux/actions';



const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: AppState | any) => state.appReducer.data    );

    const handlePlusButtonClick = () => {
        const fakeData: RowData = {
          id: Date.now(), // Just a simple way to generate unique IDs for the example
          name: 'Sau Krp',
          company: 'ABC Corp',
          status: 'Active',
          lastUpdated: '2023-07-18',
          notes: 'Lorem ipsum',
        };
    
        dispatch(addRow(fakeData));
        const newData = {...data, fakeData}
        localStorage.setItem('formData', JSON.stringify({...newData}));
      };

      console.log('data', data)
    return (
        <div className={styles.home_container}>
            <div className={styles.addmembers_container}>
            <p style={{fontSize: '28px', fontWeight: 500, paddingRight: '20px'}}>Team Members</p>
            <Button onClick={handlePlusButtonClick} text={'Add Members'} />
            </div>
            <div className={styles.table_container}>
            <Table data={data} />
            </div>
        </div>
    )
}

export default Home;
import { useSelector } from 'react-redux';
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table"
import { AppState } from "../../redux/reducers";
import styles from './Home.module.css'
import { useDispatch } from 'react-redux';
import { RowData, addRow } from '../../redux/actions';
import { useEffect, useState } from 'react';
import LabelInput from '../../components/Option.tsx/LabelInput';
import AddMember from '../../components/Form/AddMember';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';



const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: AppState | any) => state.appReducer.data);
  const [status, setStatus] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [showCheckBox, setCheckBox] = useState<boolean>(false);
  const [allCheckbox, setAllCheckbox] = useState<boolean>(false)
  const [allStatus, setAllStatus] = useState<boolean>(false)
  const [selectedCompany, setSelectedCompany] = useState<any>([])
  const [formstatus, Setformstatus] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true);

  const uniqueCompanyObjects: AppState | any = [];
  const uniqueCompanyNames: Record<string, boolean> = {};

  data.forEach((item: any) => {
    if (!uniqueCompanyNames[item.company]) {
      uniqueCompanyNames[item.company] = true;
      uniqueCompanyObjects.push(item);
    }
  });

  function showOptions() {

    if (showCheckBox) {
      setCheckBox(false)
    } else {
      setCheckBox(true)
    }
  }

  function getOptions(val: string, stage: boolean | null) {
    setAllStatus(false);

    if (stage) {
      let newData = selectedCompany.filter((item: any) => item !== val);
      setSelectedCompany([...newData])
    } else {
      setSelectedCompany([...selectedCompany, val])
    }
  }

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1000); // Simulating 3 seconds of loading time
}, []);

  function logout() {
    setIsLoading(true);
    localStorage.removeItem('user');
    setIsLoading(false)
    navigate('/login');
  }

  console.log('selectedCompany', selectedCompany)

  return (
    <div className={styles.home_container}>
      {isLoading && <Loader />}
      <div className={styles.addmembers_container}>
        <div style={{ display: 'flex', alignItems: 'center' }}><p style={{ fontSize: '28px', fontWeight: 500, paddingRight: '20px' }}>Team Members</p>
          <Button onClick={() => Setformstatus(true)} source="/plus.svg" text={'Add Members'} bgColor={'rgb(28, 132, 236)'} color='#fff' /></div>
        <div>
          <Button onClick={logout} source="" text={'Logout'} bgColor={'#fff'} color='rgb(28, 132, 236)' />
        </div>
      </div>
      <div className={styles.table_container}>
        <div className={styles.com_sta_container}>
          <div className={styles.com_button}>
            <div className={styles.dropdown} onClick={showOptions}>
              company({uniqueCompanyObjects.length})
            </div>
            {showCheckBox && <div className={styles.options}>
              <label onClick={() => {
                setAllCheckbox(allCheckbox ? false : true)
                setAllStatus(true)
                setSelectedCompany(data.map((row: any) => row.company))
              }}>
                <input type="checkbox" value={company} checked={allCheckbox && allStatus} />
                All
              </label>
              {uniqueCompanyObjects.map((row: any) => (
                <LabelInput key={row.id} getOptions={getOptions} company={row.company} status={allCheckbox} />
              ))}
            </div>}
          </div>
          <div className={styles.sta_button}>
            <select className={styles.select_cont} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Status</option>
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
        <Table data={data} company={selectedCompany} status={status} />
      </div>
      {formstatus && <AddMember setStatus={Setformstatus} formstatus={formstatus} />}
    </div>
  )
}

export default Home;

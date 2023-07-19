
import React, { useState } from 'react'
import styles from './AddMember.module.css'
import { RowData, addRow } from '../../redux/actions'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'

interface AddMemberProps {
    setStatus: (val: boolean) => void,
    formstatus: boolean
}

const AddMember: React.FC<AddMemberProps> = ({ setStatus, formstatus }) => {

    const dispatch = useDispatch();
    const [inputField, setInputField] = useState<RowData>({
        id: Date.now(),
        name: '',
        company: '',
        status: '',
        lastUpdated:'',
        notes: '',
    })

    const inputsHandler = (e: any) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addRow(inputField));
        setInputField({
            id: Date.now(),
            name: '',
            company: '',
            status: '',
            lastUpdated: '',
            notes: '',
        })
    }

    function closeForm() {
        setStatus(formstatus ? false : true)
    }

    console.log(inputField);
    return (
        <div className={styles.form_container}>
            <p>Add Members</p>
            <form>
                <label>Name</label>
                <br />
                <input
                    onChange={inputsHandler}
                    name='name'
                    type='text'
                    value={inputField.name}
                />
                <br />
                <label>Company</label>
                <br />
                <input
                    onChange={inputsHandler}
                    name='company'
                    type='text'
                    value={inputField.company}
                />
                <br />
                <label>Status</label>
                <br />
                <input
                    onChange={inputsHandler}
                    name='status'
                    type='text'
                    value={inputField.status}
                />
                <br />
                <label>Notes</label>
                <br />
                <input
                    onChange={inputsHandler}
                    name='notes'
                    type='text'
                    value={inputField.notes}
                />
            </form>
            <div className={styles.button_contain}>
                <Button onClick={closeForm} text={'Cancel'} source={null} bgColor={'#fff'} color='rgb(28, 132, 236)' />
                <Button onClick={handleSubmit} text={'Save'} source={null} bgColor={'rgb(28, 132, 236)'} color='#fff' />
            </div>
            <div className={styles.croosImg} onClick={closeForm}>
                <img src="/plus.svg" width={'30px'} height={'20px'} />
            </div>
        </div>
    )
}

export default AddMember;
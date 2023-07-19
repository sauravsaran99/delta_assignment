

import React, { useState } from 'react';
import styles from '../Login/Login.module.css'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

interface FormProps {
    name: string,
    email: string,
    password: string
}

const Signup: React.FC = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(true);
    const [formData, setFormData] = useState<FormProps>({
        name: '',
        email: '',
        password: ''
    })

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulating 3 seconds of loading time
    }, []);

    function formSubmit(e:any) {
        setIsLoading(true)
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
            if(res?.user) {
                setIsLoading(false)
                navigate("/login")
            }
        }).catch((err) => {
            setIsLoading(false)
            alert(err.message);
            console.log('err', err);
        })
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <div className={styles.formWrapper}>
                <h2>Sign Up</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label>Name</label>
                        <input name='name' type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input name='email' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type="email" id="email" value={formData.email} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input name='password' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type="password" id="password" value={formData.password} required />
                    </div>

                    <button onClick={formSubmit} className={styles.submitButton}>
                        Sign Up
                    </button>
                </form>
                <div>
                <button onClick={() => navigate('/login')} className={styles.submitButton}>
                    Already have Account? Login
                    </button>
            </div>
            </div>
        </div>
    );
};

export default Signup;

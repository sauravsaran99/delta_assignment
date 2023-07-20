import React, { useState } from 'react';
import styles from './Login.module.css';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

interface FormProps {
    email: string,
    password: string
}

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(true);
    const [formData, setFormData] = useState<FormProps>({
        email: '',
        password: ''
    })

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simulating 3 seconds of loading time
    }, []);


    function formSubmit(e: any) {
        setIsLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, formData.email, formData.password).then((res) => {
            console.log('res', res.user
            )
            if (res.user) {
                localStorage.setItem("user", JSON.stringify({ role: "ADMIN", authenticate: true }))
                setIsLoading(false)
                navigate("/")
            }
        }).catch((err) => {
            setIsLoading(false)
            alert(err.message)
            console.log('err', err.message);
        })
    }
    return (
        <div className={styles.container}>
            {isLoading && <Loader />}
            <div className={styles.formWrapper}>
                <h2>Login In</h2>
                <form>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input name='email' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type="email" id="email" value={formData.email} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input name='password' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} type="password" id="password" value={formData.password} required />
                    </div>

                    <button onClick={formSubmit} className={styles.submitButton}>
                        Login In
                    </button>
                </form>
                <div>
                    <button onClick={() => navigate('/signup')} className={styles.submitButton}>
                        Don't have account? Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

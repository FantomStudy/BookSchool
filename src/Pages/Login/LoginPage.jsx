import styles from './LoginPage.module.css';
import Button from "../../Components/Buttons/Button.jsx";

function LoginPage() {
    return (
        <>
            <div className={styles.register}>
                <div className={styles.form}>
                    <h1 className={styles.head}>Authorization</h1>
                    <div className={styles.inputBlock}>
                        <input className={styles.inputEmail} type="text" placeholder="Enter email"/>
                        <input className={styles.inputEmail} type="text" placeholder="Enter password"/>
                        <Button type='fill'>Login</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
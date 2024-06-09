import styles from './RegistrationPage.module.css';
import Button from "../../Components/Buttons/Button.jsx";

function RegistrationPage() {
    return (
        <>
            <div className={styles.register}>
                <div className={styles.form}>
                    <h1 className={styles.head}>Registration</h1>
                    <div className={styles.inputBlock}>
                        <input className={styles.inputEmail} type="text" placeholder="Enter email"/>
                        <input className={styles.inputEmail} type="text" placeholder="Enter password"/>
                        <input className={styles.inputEmail} type="text" placeholder="Repeat password"/>
                        <Button type='fill'>Submit</Button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RegistrationPage;
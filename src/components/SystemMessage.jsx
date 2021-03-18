import styles from "../styles/SystemMessage.module.scss";

const SystemMessage = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <p className={styles.message}>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </>
    );
};

export default SystemMessage;

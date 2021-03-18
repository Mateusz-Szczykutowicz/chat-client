import styles from "../styles/UserMessage.module.scss";

const UserMessage = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <h4>{props.nick}</h4>
                <div className={styles.content}>
                    <p>{props.message}</p>
                    <p>{props.time}</p>
                </div>
            </div>
        </>
    );
};

export default UserMessage;

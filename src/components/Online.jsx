import styles from "../styles/Online.module.scss";

const Online = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.nick}>
                    <h3>Nick</h3>
                    <p>Psikut</p>
                </div>
                <div className={styles.online}>
                    <h3>Online</h3>
                    <div className={styles.users}>
                        <p>Psikut</p>
                        <p>Borowik Pospolity</p>
                        <p>Malinowa99</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Online;

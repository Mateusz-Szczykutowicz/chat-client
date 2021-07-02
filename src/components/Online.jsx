import { useEffect } from "react";
import styles from "../styles/Online.module.scss";

const Online = (props) => {
    const { nick } = props;
    const { online, list } = props.online;

    const getListOnline = () => {
        const newList = [];
        if (list === undefined) {
            return <></>;
        }
        for (const el of list) {
            newList.push(<p key={el}>{el}</p>);
        }
        return <>{newList}</>;
    };
    useEffect(() => {}, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.nick}>
                    <h3>Nick</h3>
                    <p>{nick}</p>
                </div>
                <div className={styles.online}>
                    <h3>Online: {online}</h3>
                    <div className={styles.users}>
                        {/* <p>Psikut</p>
                        <p>Borowik Pospolity</p>
                        <p>Malinowa99</p> */}
                        {getListOnline()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Online;

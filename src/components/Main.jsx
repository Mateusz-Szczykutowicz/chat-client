import Online from "./Online";
import Rooms from "./Rooms";
import Chat from "./Chat";

import styles from "../styles/Main.module.scss";

const Main = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <aside className={styles.left}>
                    <Rooms />
                </aside>

                <main>
                    <Chat />
                </main>

                <aside className={styles.right}>
                    <Online />
                </aside>
            </div>
        </>
    );
};

export default Main;

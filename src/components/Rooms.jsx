import styles from "../styles/Rooms.module.scss";

const Rooms = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.currentRoom}>
                    <h3>Pokój</h3>
                    <p>General</p>
                </div>
                <div className={styles.room}>
                    <h3>Pokoje</h3>
                    <div className={styles.rooms}>
                        <p>Pokój-1</p>
                        <p>Pokój-2</p>
                        <p>Pokój-3</p>
                        <p>Pokój-4</p>
                        <p>Pokój-5</p>
                        <p>Pokój-6</p>
                        <p>Pokój-7</p>
                        <p>Pokój-8</p>
                        <p>Pokój-9</p>
                        <p>Pokój-10</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rooms;

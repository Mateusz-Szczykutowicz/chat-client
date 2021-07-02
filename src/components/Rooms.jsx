import { useParams } from "react-router-dom";
import styles from "../styles/Rooms.module.scss";

const Rooms = () => {
    const { room } = useParams();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.currentRoom}>
                    <h3>Pokój</h3>
                    <p>{room === undefined ? "General" : room}</p>
                </div>
                <div className={styles.room}>
                    <h3>Pokoje</h3>
                    <div className={styles.rooms}>
                        <p
                            onClick={() => {
                                window.location = "/";
                            }}
                        >
                            General
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-1";
                            }}
                        >
                            Pokój-1
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-2";
                            }}
                        >
                            Pokój-2
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-3";
                            }}
                        >
                            Pokój-3
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-4";
                            }}
                        >
                            Pokój-4
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-5";
                            }}
                        >
                            Pokój-5
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-6";
                            }}
                        >
                            Pokój-6
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-7";
                            }}
                        >
                            Pokój-7
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-8";
                            }}
                        >
                            Pokój-8
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-9";
                            }}
                        >
                            Pokój-9
                        </p>
                        <p
                            onClick={() => {
                                window.location = "/Pokój-10";
                            }}
                        >
                            Pokój-10
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rooms;

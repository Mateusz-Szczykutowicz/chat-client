import Online from "./Online";
import Rooms from "./Rooms";
import Chat from "./Chat";

import styles from "../styles/Main.module.scss";
import { useEffect, useState } from "react";

import io from "socket.io-client";
import SystemMessage from "../components/SystemMessage";
import UserMessage from "../components/UserMessage";

import { useParams } from "react-router-dom";

const ENDPOINT = "http://localhost:3000/";

let socket = io(ENDPOINT);

export const sendUserMessage = (msg) => {
    socket.emit("message", msg);
};

const Main = (props) => {
    const { room } = useParams();
    const nick = props.nick;

    const [online, setOnline] = useState("");
    const [serverMessage, setServerMessage] = useState("");
    const [chat] = useState([]);

    const getServerMessage = (room, nick) => {
        if (room === undefined) {
            room = "general";
        }
        socket.emit("join", { nick, room });
        socket.on("join", (data) => {
            console.log(data);
            setServerMessage(
                <>
                    <SystemMessage
                        message={`${data.nick} dołączył do czatu`}
                        time={data.time}
                        key={Math.random()}
                    />
                </>
            );
        });
    };

    const getOnline = () => {
        socket.on("online", (data) => {
            setOnline(data);
        });
    };

    const getUserMessage = () => {
        socket.on("message", (data) => {
            setServerMessage(
                <UserMessage
                    message={data.message}
                    time={data.time}
                    nick={data.nick}
                    key={Math.random()}
                />
            );
        });
    };

    const getDisconection = () => {
        socket.on("disconnection", (data) => {
            setServerMessage(
                <>
                    <SystemMessage
                        message={data.message}
                        time={data.time}
                        key={Math.random()}
                    />
                </>
            );
        });
    };

    useEffect(() => {
        getServerMessage(room, nick);
        getUserMessage();
        getDisconection();
        getOnline();
    }, [room, nick]);

    // useEffect(() => {
    //     chat.push(userMessage);
    // }, [userMessage]);

    useEffect(() => {
        chat.push(serverMessage);
    }, [serverMessage]);

    return (
        <>
            <div className={styles.wrapper}>
                <aside className={styles.left}>
                    <Rooms />
                </aside>

                <main>
                    <Chat nick={nick} msg={chat} />
                </main>

                <aside className={styles.right}>
                    <Online nick={nick} online={online} />
                </aside>
            </div>
        </>
    );
};

export default Main;

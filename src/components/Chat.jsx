import styles from "../styles/Chat.module.scss";

import { sendUserMessage } from "./Main";
import { useState } from "react";

const Chat = (props) => {
    const msg = props.msg;
    const [message, setMessage] = useState("");
    const [chat] = useState(msg);

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendUserMessage(message);
        setMessage("");
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.chat}>{chat}</div>
                <div className={styles.sendMessage}>
                    <form action="" onSubmit={(e) => handleSendMessage(e)}>
                        <input
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Wyślij wiadomość..."
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></input>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;

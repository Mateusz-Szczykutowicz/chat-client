import SystemMessage from "./SystemMessage";
import UserMessage from "./UserMessage";

import styles from "../styles/Chat.module.scss";

const Chat = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.chat}>
                    <SystemMessage
                        message="Psikut dołączył do czatu"
                        time="11:23"
                    />
                    <UserMessage
                        nick="Psikut"
                        message="Cześć wszystkim! Co tam u was słychać?"
                        time="11:24"
                    />
                    <UserMessage
                        nick="Borowik Pospolity"
                        message="Siemaneczko, super! Jakoś leci, a co u Ciebie słychać? ^_^"
                        time="11:26"
                    />
                    <SystemMessage
                        message="Malinowa dołączył do czatu"
                        time="11:27"
                    />

                    <UserMessage
                        nick="Malinowa99"
                        message="Siemaaaaaa wszystkim!!!"
                        time="11:27"
                    />
                </div>
                <div className={styles.sendMessage}>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Wyślij wiadomość..."
                        ></textarea>
                        <button type="submit">Wyślij</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chat;

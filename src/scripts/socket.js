import { useEffect } from "react";
import io from "socket.io-client";

let socket;

const Socket = () => {
    const ENDPOINT = "https://localhost:3000/";

    useEffect(() => {
        socket = io(ENDPOINT);

        socket.emit("join", (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT]);
    return <></>;
};

export default Socket;

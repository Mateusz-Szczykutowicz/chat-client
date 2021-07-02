import io from "socket.io-client";
import { getOnlineList } from "../components/Online";
import SystemMessage from "../components/SystemMessage";

const ENDPOINT = "http://localhost:3000/";

let socket = io(ENDPOINT);

export const getServerMessage = (room, nick) => {
    if (room === undefined) {
        room = "general";
    }
    socket.emit("join", { nick, room });
    socket.on("join", (data) => {
        console.log(data);

        return (
            <>
                <SystemMessage
                    message={`${data.nick} dołączył do czatu`}
                    time={data.time}
                    key={data.nick}
                />
            </>
        );
    });
};

export const getOnline = () => {
    socket.on("online", (data) => {
        console.log(data);
        getOnlineList(data);
        return true;
    });
};

export const getUserMessage = () => {
    socket.on("message", (data) => {
        console.log(data);
    });
};

export const sendUserMessage = (msg) => {
    socket.emit("message", msg);
};

export const getDisconection = () => {
    socket.on("disconnection", (data) => {
        console.log(data);
        return data;
    });
};

// const Socket = () => {
//     useEffect(() => {
//         getServerMessage();
//         getOnline();
//         getUserMessage();
//         getDisconection();
//         sendUserMessage();
//     }, []);
//     return <></>;
// };

// export default Socket;

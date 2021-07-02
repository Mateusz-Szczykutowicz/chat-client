// import io from "socket.io-client";
// const URL = "http://localhost:3000";
// const socket = io(URL, { autoConnect: false });

// console.log("Socket connected");
// // socket.emit("join", "test");
// // socket.on("join", () => {
// //     console.log("test");
// // });

// let userName = "";

// const newUserConnected = (user) => {
//     userName = user || `User${Math.floor(Math.random() * 1000000)}`;
//     socket.emit("new user", userName);
//     addToUsersBox(userName);
// };

// const addToUsersBox = (userName) => {
//     if (!!document.querySelector(`.${userName}-userlist`)) {
//         return;
//     }

//     const userBox = `
//     <div class="chat_ib ${userName}-userlist">
//       <h5>${userName}</h5>
//     </div>
//   `;
//     console.log(userBox);
// };

// // new user is created so we generate nickname and emit event
// newUserConnected();

// socket.on("new user", function (data) {
//     data.map((user) => addToUsersBox(user));
// });

// socket.on("user disconnected", function (userName) {
//     document.querySelector(`.${userName}-userlist`).remove();
// });

// export default socket;

import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "http://127.0.0.0:3000";

function Socket() {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT, { secure: false });
        socket.on("FromAPI", (data) => {
            setResponse(data);
        });
    }, []);

    return (
        <p>
            It's <time dateTime={response}>{response}</time>
        </p>
    );
}

export default Socket;

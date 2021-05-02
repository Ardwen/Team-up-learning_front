require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const server = app.listen(5000);
const socket = require("socket.io");
const io = socket(server);
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const courseRouter = require("./routes/course");
const usersRouter = require("./routes/user");
const mailBoxRouter = require("./routes/invitation");

app.use("/course", courseRouter);
app.use("/user", usersRouter);
app.use("/mailBox", mailBoxRouter);


const rooms = {};

io.on('connection', socket => {
    socket.on("join room", roomID => {
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id);
        } else {
            rooms[roomID] = [socket.id];
        }
        const otherUser = rooms[roomID].find(id => id !== socket.id);
        console.log("user emit");
        socket.emit("other user", otherUser);
    })

    socket.on("call partner", incoming => {
        const payload = {
            callerID: incoming.callerID,
            signal: incoming.signal
        }
        io.to(incoming.partnerID).emit('caller signal', payload);
    })

    socket.on("accept call", incoming => {
        io.to(incoming.callerID).emit('callee signal', incoming.signal);
    })
});

/*app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});*/

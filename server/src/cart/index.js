const connect = require('connect');
const SessionStore = require("session-mongoose")(connect);
const store = new SessionStore({
    url: "mongodb://localhost/session",
    interval: 120000 // expiration check worker run interval in millisec (default: 60000)
});

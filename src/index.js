
const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;
var ip = require("ip");

// setup the logger
app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  const datetime = new Date();
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone 

  const response = {
    title: "Demo node App -  no database",
    running_ip: ip.address(),
    running_port: port,
    incoming_req: {
      utc_time: datetime.toISOString(),
      timezone: tz,
      datetime: datetime.toLocaleDateString() + " - " + datetime.toLocaleTimeString(),
      ip: req.ip
    }
} 
  res.send(response);
});

app.get("/ping", async (_, res) => {
  res.send("pong");
});

const server = app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`);
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP server closed");
  });
});

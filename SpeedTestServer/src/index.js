const express = require("express");
const cors = require("cors");
const FastSpeedtest = require("fast-speedtest-api");

const app = express();
const port = 3000;

app.use(cors());

const speedtest = new FastSpeedtest({
  token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // example token
  verbose: false,
  timeout: 5000,
  https: true,
  urlCount: 5,
  bufferSize: 8,
  unit: FastSpeedtest.UNITS.Mbps,
});

app.get("/run", async (req, res) => {
  try {
    const speed = await speedtest.getSpeed();
    res.json({ downloadSpeedMbps: speed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Speedtest server running at http://localhost:${port}`);
});

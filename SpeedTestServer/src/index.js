const express = require("express");
const cors = require("cors");
const pkg = require("@cloudflare/speedtest");
const SpeedTest = pkg.default;

const app = express();
const port = 3000;

app.use(cors());

// const speedtest = new FastSpeedtest({
//   token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // example token
//   verbose: false,
//   timeout: 5000,
//   https: true,
//   urlCount: 5,
//   bufferSize: 8,
//   unit: FastSpeedtest.UNITS.Mbps,
// });

// app.get("/run", async (req, res) => {
//   try {
//     const speed = await speedtest.getSpeed();
//     res.json({ downloadSpeedMbps: speed });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.get("/run", async (req, res) => {
  try {
    const speedTest = new SpeedTest({
      download: { duration: 15000 }, // 15 s sustained download
    });
    speedTest.onFinish = (results) => {
      const summary = results.getSummary();
      console.log(summary);
      res.json({ downloadSpeedMbps: (summary.download / 1250000).toFixed(2) });
    };
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Speedtest server running at http://localhost:${port}`);
});

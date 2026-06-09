const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.smartservedb.syrxawv.mongodb.net",
  (err, records) => {
    if (err) {
      console.error("DNS Error:", err);
    } else {
      console.log("SRV Records:");
      console.log(records);
    }
  }
);
const express = require("express");
const app = express();
const path = require("path");
const geoip = require("geoip-lite");
const getIP = require("ipware")().get_ip;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, resp) {
  //$randomizer = 2;

  //if ($_GET['pop'] == 'over') {
  //	$randomizer = 1;
  //}

  //if ($_GET['pop'] == 'under') {
  //	$randomizer = 2;
  //}

  //if (preg_match("/.*iPhone.*Safari.*/", $server['HTTP_USER_AGENT'])) {
  //	$randomizer = 1;
  //}

  let ipInfo = getIP(req);

  resp.render("index", {
    randomizer: 2,
    geoIpData: geoip.lookup(ipInfo.clientIp),
    ip: ipInfo.clientIp
  });
});

app.listen(8080);

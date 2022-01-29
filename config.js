const MQTT_server = document.getElementById("MQTT_server");
const MQTT_username = document.getElementById("MQTT_username");
const MQTT_pass = document.getElementById("MQTT_pass");
const MQTT_port = document.getElementById("MQTT_port");
const configBtn = document.getElementById("btn-config-confirm");

fetch("http://localhost:8080/config")
  .then((data) => data.json())
  .then((data) => {
    MQTT_server.value = data[0].MQTT_server;
    MQTT_username.value = data[0].MQTT_username;
    MQTT_pass.value = data[0].MQTT_pass;
    MQTT_port.value = data[0].MQTT_port;
  });
configBtn.addEventListener("click", () => {
  fetch("http://localhost:8080/config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      MQTT_server: MQTT_server.value,
      MQTT_username: MQTT_username.value,
      MQTT_pass: MQTT_pass.value,
      MQTT_port: MQTT_port.value,
    }),
  });
});

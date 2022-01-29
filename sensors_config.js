const Group = document.getElementById("Group");
const LWT_Topic = document.getElementById("LWT-Topic");
const Topic = document.getElementById("Topic");
const Room_Name = document.getElementById("Room_Name");
const configBtn = document.getElementById("btn-sensors-config-confirm");

fetch("http://localhost:8080/sensors-config")
  .then((data) => data.json())
  .then((data) => {
    Group.value = data[0].Group;
    LWT_Topic.value = data[0].LwtTopic;
    Room_Name.value = data[0].RoomName;
    Topic.value = data[0].Topic;
  });

configBtn.addEventListener("click", () => {
  fetch("http://localhost:8080/sensors-config", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Group: Group.value,
      LWT_Topic: LWT_Topic.value,
      RoomName: Room_Name.value,
      Topic: Topic.value,
    }),
  });
});

const Group = document.querySelectorAll("#Group");
const LWT_Topic = document.querySelectorAll("#LWT-Topic");
const Topic = document.querySelectorAll("#Topic");
const Room_Name = document.querySelectorAll("#Room_Name");
const SetPoint = document.querySelectorAll("#SetPoint");
const configBtns = document.querySelectorAll("#btn-sensors-config-confirm");

fetch("http://localhost:8080/sensors-config")
  .then((data) => data.json())
  .then((dataList) => {
    console.log(dataList);
    dataList.forEach((data, index) => {
      if (Group[index]) {
        Group[index].value = data.Group;
        LWT_Topic[index].value = data.LwtTopic;
        Room_Name[index].value = data.RoomName;
        Topic[index].value = data.Topic;
        SetPoint[index].value = data.SetPoint;
        configBtns[index].dataset.id = data.ID;
      }
    });
  });

configBtns.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    const id = event.target.dataset.id;
    if (id) {
      fetch("http://localhost:8080/sensors-config", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Group: Group[index].value,
          LWT_Topic: LWT_Topic[index].value,
          RoomName: Room_Name[index].value,
          Topic: Topic[index].value,
          SetPoint: SetPoint[index].value,
          ID: id,
        }),
      });
    }
  });
});

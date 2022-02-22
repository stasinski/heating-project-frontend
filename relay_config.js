const Group = document.querySelectorAll("#Group");
const LWT_Topic = document.querySelectorAll("#LWT-Topic");
const Topic = document.querySelectorAll("#Topic");
const configBtns = document.querySelectorAll("#btn-relay-confirm");

fetch("http://localhost:8080/relays")
  .then((data) => data.json())
  .then((dataList) => {
    console.log(dataList);
    dataList.forEach((data, index) => {
      if (Group[index]) {
        Group[index].value = data.Group;
        LWT_Topic[index].value = data["LWT Topic"];
        Topic[index].value = data.Topic;
        configBtns[index].dataset.id = data.ID;
      }
    });
  });

configBtns.forEach((btn, index) => {
  btn.addEventListener("click", (btn) => {
    const id = btn.target.dataset.id;
    if (id) {
      fetch("http://localhost:8080/relays", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Group: Group[index].value,
          LWT_Topic: LWT_Topic[index].value,
          Topic: Topic[index].value,
          ID: id,
        }),
      });
    }
  });
});

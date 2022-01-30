const Group = document.getElementById("Group");
const LWT_Topic = document.getElementById("LWT-Topic");
const Topic = document.getElementById("Topic");
const configBtn = document.getElementById("btn-relay-confirm");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

fetch("http://localhost:8080/relays")
  .then((data) => data.json())
  .then((data) => {
    Group.value = data[0].Group;
    LWT_Topic.value = data[0]["LWT Topic"];
    Topic.value = data[0].Topic;
  });

configBtn.addEventListener("click", () => {
  fetch("http://localhost:8080/relays", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Group: Group.value,
      LWT_Topic: LWT_Topic.value,
      Topic: Topic.value,
    }),
  });
});

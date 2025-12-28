const newTitle = "** CHANGED **";

document.title = newTitle;


setInterval(() => {
  const now = new Date();
  console.log(now);
  document.getElementsByTagName("h1")[0].textContent = now;
  document.body.style["background-color"] =
    now.getSeconds() % 2 == 0 ? "lime" : "magenta";
}, 1000);


document.getElementById("doAction").onclick = () => {
  fetch("http://localhost:8000/api/hello")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementsByTagName("h1")[0].textContent = data.title;
      document.getElementsByTagName("p")[0].textContent =
        "Время сервера: " + data.subject;
    });
};

document.getElementById("sendMessage").onclick = () => {
  const text = document.getElementsByTagName("textarea")[0].value;

  document.getElementById("History").textContent += "\n" + text + "\n";

  fetch("http://localhost:8000/api/message", {
    method: "POST",
    body: JSON.stringify({ text }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("History").textContent +=
        "\n" + data.message + "\n";
    });
};
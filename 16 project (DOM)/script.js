var cardInfo = [
  {
    name: "Angelina",
    link: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBpY3xlbnwwfHwwfHx8MA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Lina",
    link: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    status: "Strangers",
  },
  {
    name: "Diana",
    link: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    status: "Strangers",
  },
];

var main = document.querySelector("#main");

function cardCreator() {
  var cardCode = "";
  cardInfo.forEach(function (val, index) {
    cardCode += ` <div id="card">
            <img src="${val.link}"
                alt="">
            <h1>${val.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum repellat porro pariatur quos obcaecati
                dolore.</p>
            <h5 id="${val.status}">${val.status}</h5>
            <button id="${index}" 
                    class="${val.status === "Strangers" ? "blue" : "red"}">
                      ${
                        val.status == "Strangers"
                          ? "Add Friend"
                          : "Remove Friend"
                      }</button>
        </div>`;
  });
  main.innerHTML = cardCode;
}
cardCreator();

main.addEventListener("click", function (details) {
  cardInfo[details.target.id].status = "Friends";
  document.querySelector("h5").style.color = "green";
  cardCreator();
});

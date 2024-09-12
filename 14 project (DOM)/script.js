var btn = document.querySelector("button");
var h5 = document.querySelector("h5");
var flag = false;
btn.addEventListener("click", function () {
  if (!flag) {
    h5.innerHTML = "Friend";
    h5.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = true;
  } else {
    h5.innerHTML = "Strangers";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = false;
  }
});
var check = true;
document.querySelector("button").style.backgroundColor = "#4CAF50";

function MyFunction() {
  if (check) {
    check = false;
    document.querySelector("button").innerHTML = "OFF";
    document.querySelector("button").style.backgroundColor = "#de1818";
    document.querySelector("#img").src = "img/BulbON.png";
  } else {
    check = true;
    document.querySelector("button").innerHTML = "ON";
    document.querySelector("button").style.backgroundColor = "#4CAF50";
    document.querySelector("#img").src = "img/BulbOff.png";
  }
}



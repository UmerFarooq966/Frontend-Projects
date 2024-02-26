let typewriter = document.getElementById("typewriter");
let paragraph = document.getElementById("paragraph");
let detail = document.getElementById("detail");
let hCur = document.getElementById("h-cur");
let pCur = document.getElementById("p-cur");

var data = "Hello I'm Umer 👋";
var data2 = "I build digital products.";

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const doSomething = async () => {
  await sleep(1200);
  for (let i = 0; i < data.length; i++) {
    var rand = Math.floor(Math.random() * 400) + 50;
    await sleep(rand);
    typewriter.innerHTML += data[i];
  }
  hCur.className = "hidden";
  for (let i = 0; i < data2.length; i++) {
    var rand = Math.floor(Math.random() * 300) + 100;
    await sleep(rand);
    paragraph.innerHTML += data2[i];
  }
  pCur.className = "hidden";

  await sleep(1000);
  detail.innerHTML =
    "I'm an Software engineer focusing on web development and Social media Marketing <br>";
  await sleep(500);
  detail.innerHTML +=
    " I'm providing freelance web development solutions to my clients as a Worpress expert and web-development expert.";
  await sleep(500);
};

doSomething();

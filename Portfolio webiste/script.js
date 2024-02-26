let typewriter = document.getElementById("typewriter");
let paragraph = document.getElementById("paragraph");
let detail = document.getElementById("detail");

var data = "Hello I'm Umer";

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const doSomething = async () => {
  await sleep(1200);
  for (let i = 0; i < data.length; i++) {
    var rand = Math.floor(Math.random() * 500) + 200;
    await sleep(rand);
    typewriter.innerHTML += data[i];
  }
  await sleep(500);
  paragraph.innerHTML = "Software ";
  await sleep(500);
  paragraph.innerHTML += " Engineer";
  await sleep(500);
  paragraph.className += "underline";

  await sleep(1000);
  detail.innerHTML =
    "I'm an Software engineer focusing on web development and Social media Marketing <br>";
  await sleep(500);
  detail.innerHTML +=
    " I'm providing freelance web development solutions to my clients as a Worpress expert and web-development expert.";
  await sleep(500);
};

doSomething();

let typewriter = document.getElementById("typewriter");

var data = "Hello I'm Umer";

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const doSomething = async () => {
  await sleep(1200);
  for (let i = 0; i < data.length; i++) {
    var rand = Math.floor(Math.random() * 600) + 200;
    await sleep(rand);
    typewriter.innerHTML += data[i];
  }
};

doSomething();

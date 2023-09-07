window.onload = function() {
  //write your code here
  // eslint-disable-next-line no-console
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

const excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  return (
    who[numerosRamdom(who)] +
    " " +
    action[numerosRamdom(action)] +
    " " +
    what[numerosRamdom(what)] +
    " " +
    when[numerosRamdom(when)]
  );
};

function numerosRamdom(array) {
  return Math.floor(Math.random() * array.length);
}

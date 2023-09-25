// function async1() {
//   console.log("1");
//   async2().then(() => {
//     console.log("2");
//   });
// }

// function async2() {
//   return new Promise((resolve) => {
//     resolve();
//     console.log("3");
//   });
// }

// function* generate() {
//   console.log("4");
//   yield;
//   console.log("5");
// }

// function* generate2() {
//   console.log("6");
//   yield;
//   console.log("7");
// }

// console.log("8");

// setTimeout(function () {
//   console.log("9");
// }, 0);

// const generator1 = generate();
// generator1.next();
// generator1.next();

// async1();

// new Promise(function (resolve) {
//   console.log("10");
//   resolve();
// }).then(function () {
//   console.log("11");
// });

// console.log("12");
// const generator2 = generate2();
// generator2.next();
// generator2.next();

// console.log("1");
// setImmediate(() => {
//   console.log("2");
// });
// process.nextTick(() => {
//   console.log("4");
// });
// setTimeout(() => {
//   console.log("3");
// }, 0);

// const baz = () => console.log("baz");
// const foo = () => console.log("foo");
// const zoo = () => console.log("zoo");
// const start = () => {
//   console.log("start");
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve("bar");
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();

function task1() {
  console.log("promise1 resolved");
}

function task2() {
  console.log("promise2 resolved");
  process.nextTick(task10);
}

function task3() {
  console.log("promise3 resolved");
}

function task4() {
  console.log("immediate 1");
}

function task5() {
  console.log("tick 1");
}

function task6() {
  console.log("tick 2");
}

function task7() {
  console.log("microtask 1");
}

function task8() {
  console.log("timeout");
}

function task9() {
  console.log("immediate 2");
}

function task10() {
  console.log("tick3");
  queueMicrotask(task11);
}

function task11() {
  console.log("microtask 2");
}

Promise.resolve().then(task1);
Promise.resolve().then(task2);

Promise.resolve().then(task3);

setImmediate(task4);

process.nextTick(task5);
process.nextTick(task6);

queueMicrotask(task7);

setTimeout(task8, 0);

setImmediate(task9);

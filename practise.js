// var highSurrogate = 55357; //! Перша частина кодової одиниці
// var converted = highSurrogate.toString(16);
// console.log(converted);
// console.log("\ud83d");

// const str = "hello";
// console.log(str.length);

// console.log(str.at(6)); //! Можна передати від'ємне значення, і метод почне рахувати з кінця рядка. -(length-1). Якщо індекс не буде знайдено поверне undefined | 65535 - 65535
// console.log(str.charAt(6)); //! Якщо індекс не буде знайдено, поверне пустий рядок. | 65535 - 65535
// console.log(str.charCodeAt(0));

// console.log(String.fromCharCode(104));
// console.log(String.fromCharCode(55357));

// const str = "Hello World";
// console.log(str.includes());

// let unicodeString = "\u0041"; //! "A"
// let binary = unicodeString.charCodeAt(0).toString(2); //! "A"

// console.log(binary);
// console.log("\uD840\uDC4A".length);
// console.log("\u{2004A}".length);

// const poo = "💩";

// console.log(poo.codePointAt()); //! 0 - 65535 & > 0 - 65535

// const pooSymbol = "💩";
// console.log(pooSymbol.charCodeAt(0));
// console.log(pooSymbol.charCodeAt(1));
// const emoj = String.fromCharCode(pooSymbol.charCodeAt(0), pooSymbol.charCodeAt(1));

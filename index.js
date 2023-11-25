const str = "0.000190007";

function parseNumberFromRightToLeft(str) {
  let result = 0;
  let floatPoint = 1;
  let hasDecimal = false;

  for (let i = str.length - 1; i >= 0; i--) {
    const charCode = str[i].charCodeAt();

    if (charCode >= 48 && charCode <= 57) {
      if (hasDecimal) {
        result = result + (charCode - 48) * floatPoint;
      } else {
        result = result + (charCode - 48) * floatPoint;
        floatPoint *= 10;
      }
    }

    if (charCode === 46) {
      hasDecimal = true;
    }
  }

  return result / floatPoint;
}

const number = parseNumberFromRightToLeft(str);
console.log(number, typeof number === "number");

const calculateAnswer = function () {
  const run = document.querySelector("#run").value;
  const run2 = document.querySelector("#run2").value;
  const totalRun = run + run2;
  const pitch = document.querySelector("#pitch").value;
  const outputWhole = document.querySelector("#inchesOutput");
  const outputFraction = document.querySelector("#fractionOutput");

  const rise = (totalRun / 12) * pitch;
  const sqrt1 = totalRun * totalRun;
  const sqrt2 = rise * rise;
  const diagonal = Math.sqrt(sqrt1 + sqrt2);
  const diagonal2 = diagonal.toFixed(3);

  const splitNumb = diagonal2.split(".");
  console.log(splitNumb);

  const numb = splitNumb[0];
  const frac = "." + splitNumb[1];

  console.log(numb);
  console.log(frac);

  let finalfrac = "";

  if (frac < 0.03125) {
    finalfrac = "0";
  } else if (frac >= 0.03125 && frac < 0.09375) {
    finalfrac = "1/16";
  } else if (frac >= 0.09375 && frac < 0.15625) {
    finalfrac = "1/8";
  } else if (frac >= 0.15625 && frac < 0.21875) {
    finalfrac = "3/16";
  } else if (frac >= 0.21875 && frac < 0.28125) {
    finalfrac = "1/4";
  } else if (frac >= 0.28125 && frac < 0.34375) {
    finalfrac = "5/16";
  } else if (frac >= 0.34375 && frac < 0.40625) {
    finalfrac = "3/8";
  } else if (frac >= 0.40625 && frac < 0.46875) {
    finalfrac = "7/16";
  } else if (frac >= 0.46875 && frac < 0.53125) {
    finalfrac = "1/2";
  } else if (frac >= 0.53125 && frac < 0.59375) {
    finalfrac = "9/16";
  } else if (frac >= 0.59375 && frac < 0.65625) {
    finalfrac = "5/8";
  } else if (frac >= 0.65625 && frac < 0.71875) {
    finalfrac = "11/16";
  } else if (frac >= 0.71875 && frac < 0.78125) {
    finalfrac = "3/4";
  } else if (frac >= 0.78125 && frac < 0.84375) {
    finalfrac = "13/16";
  } else if (frac >= 0.84375 && frac < 0.90625) {
    finalfrac = "7/8";
  } else if (frac >= 0.90625 && frac < 0.96875) {
    finalfrac = "15/16";
  } else if (frac > 0.96875 && frac < 1) {
    finalfrac = "15/16";
  }

  //need to split diagonal2 into two numbers, a whole number reprresenting whole inches, and a fraction representing the
  //remainder decimal. the remainder decimal needs to be converted/rounded to a fraction.

  console.log(`the run is ${run}`);
  console.log(`the total run is ${totalRun}`);
  console.log(`the rise will be ${rise} inches`);
  console.log(diagonal2);

  outputWhole.innerHTML = ` ${numb} and `;
  outputFraction.innerHTML = ` ${finalfrac} inches `;
};

document.querySelector("#calculate").addEventListener("click", calculateAnswer);

/*

              .3125
1    .625    
              .9375
2    1.25
              1.5625
3    1.875
              2.1875
4    2.5
              2.8125
5    3.125
              3.4375
6    3.75
              4.0625
7    4.375
              4.6875
8    5
              5.3125
9    5.625
              5.9375
10   6.25
              6.5625
11   6.875
              7.1875
12   7.5
              7.8125
13   8.125
              8.4375
14   8.75
              9.0625
15   9.375
              9.6875
16   10

*/

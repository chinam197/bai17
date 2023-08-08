var number = 401;
var money = 0;
if (number >= 0 && number <= 50) {
  money = number * 1.678;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
} else if (number >= 51 && number <= 100) {
  money = number * 1.734;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
} else if (number >= 101 && number <= 200) {
  money = number * 2.014;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
} else if (number >= 201 && number <= 300) {
  money = number * 2.536;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
} else if (number >= 301 && number <= 400) {
  money = number * 2.834;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
} else {
  money = number * 2.927;
  console.log(`so tien phai tra voi ${number} so dien la `+ money);
}

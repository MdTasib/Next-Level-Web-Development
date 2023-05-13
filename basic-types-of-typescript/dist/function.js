"use strict";
// NORMAL FUNCTION
function add(num1, num2) {
	return num1 + num2;
}
// ARROW FUNCTION
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4];
const equalArr = arr.map(num => num * num);
const person = {
	name: "Rafi",
	balance: 5000,
	countBalance(money) {
		console.log(`Money is ${this.balance + money}`);
	},
};

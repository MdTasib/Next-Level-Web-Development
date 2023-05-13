// NORMAL FUNCTION
function add(num1:number, num2:number):number {
    return num1 + num2;
}

// ARROW FUNCTION
const addArrow = (num1:number, num2:number):number => num1 + num2

const arr:number[] = [1, 2, 3, 4];
const equalArr:number[] = arr.map((num:number) => num * num);

const person: {
    name: string;
    balance: number; 
    countBalance(money:number):void;} = {
    name: 'Rafi',
    balance: 5000,
    countBalance(money:number){
        console.log(`Money is ${this.balance + money}`)
    }
}

// spread opearator
const myFriends = ["rafi", "rakib"];
const newFriends = ["tawrat"];
myFriends.push(...newFriends);
// console.log(myFriends)

// rest paremeter
const greetsFriends = (...friends: string[]):void => {
    friends.forEach((friend:string) => console.log(`HI, ${friend}`))
}
greetsFriends("rafi", "rakib");
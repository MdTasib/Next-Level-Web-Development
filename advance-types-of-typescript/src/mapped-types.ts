const arrayOfNumbers = [1,2,3];
const arrayOfStrings = arrayOfNumbers.map(num => num.toString());
console.log(arrayOfStrings);

type AreaNumber = {
    height: number;
    width: number;
}
type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 20,
}

type a = AreaNumber["height"];
type b = keyof AreaNumber;
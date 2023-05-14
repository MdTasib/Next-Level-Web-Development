// // const rollNumber1:number[] = [1, 2, 3];
// // const rollNumber2:string[] = ["1", "2"];
// type GenericType<T> = Array<T>;

// const rollNumber1: GenericType<number> = [1, 2,3];
// const rollNumber2: GenericType<string> = ["1", "2"];
// const rollNumber3: GenericType<boolean>= [true, false];

// type NameAndRollType = {name: string, roll: number};
// const nameAndRoll: GenericType<NameAndRollType> = [
//     {name: "tasib", roll: 22},
//     {name:"rafi", roll: 1}
// ]

// type GenericTuple<X, Y> = [X, Y];
// // type RelationTypeWithSalary = {name: string, salary: number}; // Alias type
// interface IRelationWithSalary{
//     name: string,
//     salary: number
// }

// const relation:GenericTuple<string, string> = ["Ohidul", "Alam"];
// const relation1:GenericTuple<string, number> = ["Ohidul", 21];
// const relation2:GenericTuple<object, string> = [{name: "Tasib"}, "Mohammd"];
// const relation3:GenericTuple<IRelationWithSalary, string> = [{name: "Tasib", salary: 10}, "Mohammd"];

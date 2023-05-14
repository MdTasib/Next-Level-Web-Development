type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType = "name" | "age" | "address";
type newTypeUsingKeyOf = keyof PersonType;

// const a:newType = "hello"; // error
// const a:newType = "name";
// const a:newTypeUsingKeyOf = "hello"; // error
// const b:newTypeUsingKeyOf = "name";
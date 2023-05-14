// Mocking
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is fetching';
//         if(data){
//             resolve(data);
//         }else{
//             reject("Failed");
//         }
//     })
// }

// const getPromiseData = async(): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }


// fetch data
interface ITodo{
    userId: number;
    id: number;
    title: number;
    completed: boolean;
}

const getTodo = async(): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getTodoData = async(): Promise<void> => {
    const result = await getTodo();
    console.log(result)
}

getTodoData();
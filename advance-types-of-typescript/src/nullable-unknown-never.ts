// NULL
const searchName = (value:string | null) => {
    if(value === null){
        console.log("nothing to search");
    }else {
        console.log("Searching...");
    }
}

searchName(null);
searchName("Tasib");

// UNKNOWN
const getSpeed = (speed:unknown) => {
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My car speed ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
        const value = speed.split(" ")[0];
        const convertedSpeed =( parseFloat(value) * 1000) / 3600;
        console.log(`My car speed ${convertedSpeed}`);
    }else {
        console.log("There is wrong type");
    }
}

getSpeed(10);
getSpeed("10 kmh^-1");
getSpeed(true);
/**
 * union
 * 
 * type NodeDeveloper = {
    name: string;
}

type JrDeveloper = {
    name: string,
    expertise: string,
    experience: number,
}

const newDeveloper: NodeDeveloper | JrDeveloper = {
    name: "Tasib",
    expertise: "Javascript",
    experience: 1
}

 */


/**
 * 
 * intersection
 * 
 */

type NodeDeveloper = {
    name: string;
}

// type JrDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number,
// }

type JrDeveloper = NodeDeveloper & {
    name: string,
    expertise: string,
    experience: number,
}

type NextLevelDeveloper = JrDeveloper & {
    leadershipEx: number,
    level: "jr" | "mid" | "senior",
}

const newDeveloper: NodeDeveloper | JrDeveloper = {
    name: "Tasib",
    expertise: "Javascript",
    experience: 1
}

const developer: NextLevelDeveloper = {
    name: "Mohammad",
    experience: 1,
    expertise: "Node Js",
    leadershipEx: 1,
    level: "mid"
}
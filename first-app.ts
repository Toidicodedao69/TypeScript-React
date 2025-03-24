let username: string;
let userAge: number;
let userAuth: boolean;

username = 'TypeScript';
userAge = 99;
userAuth = true;

// Union types, allow a variable to have multiple types
let userID: string | number;

// Custom object type
type User = {
    name: string,
    age: number,
    isAuthed: boolean,
    id: number | string
};

let user: User;

// Array types
// let array_string: Array<string>;
let array_string: string[];
let array_number: number[];
let array_bool: boolean[];

// Array storing objects
let array_users: { name: string, age: number, isAuthed: boolean, id: number | string }[];
let array_custom_users: User[];

// Defining param & return types in function
function sum(a: number, b: number): number {
    const result = a + b;
    return result;
}

// Define custom type
type SumFn = (a: number, b: number) => number;

// Passing function as a type
function calculate(a: number, b: number, calFn: SumFn) {
    return calFn(a, b);
}

calculate(6, 9, sum)


import { User } from "../interfaces/user";
export const validUser: User = {
    displayname: "happytest",
    username:"josave",
    password: "123456"
} 


export const invalidUsers: User[] = [{
    displayname: "belo",
    username:"banana",
    password: "123456"
}, {
    displayname: "belo apple",
    username:"apple",
    password: "123456"

}]
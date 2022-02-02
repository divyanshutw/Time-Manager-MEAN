import { UserType } from "../enum/enum";
import { Member } from "./member";

export class User {
    id: number;
    username: string;
    password: string;
    fullname: string;
    role: UserType;
    token?: string;
    members: Member[];
}
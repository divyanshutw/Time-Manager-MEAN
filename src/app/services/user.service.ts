import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
url="http://192.168.2.1:1521";
    getAll() {
        return this.http.get<User[]>(`${this.url}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.url}/users/${id}`);
    }
}
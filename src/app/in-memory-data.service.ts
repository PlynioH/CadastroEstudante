import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      { id: 1, name: 'Rayla', sex: 'female', age: 20, address: 'Rua pikachu 123', blood: 'o+', cpf: '456.579.586-59' },
      { id: 2, name: 'Barry', sex: 'male', age: 35, address: 'Rua pikachu 123', blood: 'o-', cpf: '456.579.586-59' },
      { id: 3, name: 'Pikachu', sex: 'male', age: 7, address: 'Rua pikachu 123', blood: 'o+', cpf: '456.579.586-59' },
      { id: 4, name: 'Mark', sex: 'male', age: 40, address: 'Rua pikachu 123', blood: 'o-', cpf: '456.579.586-59' },
      { id: 5, name: 'Peter', sex: 'male', age: 27, address: 'Rua pikachu 123', blood: 'a+', cpf: '456.579.586-59' },
      { id: 6, name: 'Rafael', sex: 'male', age: 20, address: 'Rua pikachu 123', blood: 'o-', cpf: '456.579.586-59' },
      { id: 7, name: 'Matheus', sex: 'female', age: 24, address: 'Rua pikachu 123', blood: 'o+', cpf: '456.579.586-59' },
      { id: 8, name: 'Leticia', sex: 'female', age: 21, address: 'Rua pikachu 123', blood: 'ab+', cpf: '456.579.586-59' },
      { id: 9, name: 'Jessica', sex: 'female', age: 19, address: 'Rua pikachu 123', blood: 'o+', cpf: '456.579.586-59' },
      { id: 10, name: 'Plynio', sex: 'male', age: 20, address: 'Rua pikachu 123', blood: 'o+', cpf: '456.579.586-59' }
    ];
    return {students};
  }

  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }
}
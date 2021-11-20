import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENT } from '../mock-student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  selectedStudent?: Student;
  students: Student[] = [];

  constructor(private studentService: StudentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  onSelect(student: Student): void{
    this.selectedStudent = student;
    this.messageService.add(`StudentComponent: Selected student id=${student.id}`);
  }
  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(students => this.students = students);
  }
}
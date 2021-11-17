import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENT } from '../mock-student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student = STUDENT;
  selectedStudent?: Student;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(student: Student): void{
    this.selectedStudent = student;
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') formElem: NgForm

  defaultQuestion = 'teacher'

  questionAns = ''

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log("Submitted!!")
  //   console.log(form)
  // }

  onSubmit() { 
    console.log(this.formElem)
  }
}

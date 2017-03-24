import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  title: any;
  post: any;
  date: any;
  image: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    console.log(Date());
    var now = new Date();
    var now_utc = now.getUTCDate() +"/"+ now.getUTCMonth() +"/"+ now.getUTCFullYear();


    let note = {
      title: this.title,
      post: this.post,
      date: now_utc
      //image: this.image
    }

    this.firebaseService.addNote(note);
    this.router.navigate(['notes'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  id;
  title;
  post;
  image;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getNoteDetails(this.id).subscribe(note => {
      this.title = note.title;
      this.post = note.post;
    })
  }

  onEditSubmit(){
    let note = {
      title: this.title,
      post: this.post
    }

    this.firebaseService.updateNote(this.id, note);
    this.router.navigate(['/notes']);
  }

}

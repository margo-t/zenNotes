import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import * as firebase from 'firebase';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  id: any;
  note: any;
  imageUrl: any;


  constructor(
    private FirebaseService: FirebaseService,
    private Router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    //get ID
    this.id = this.route.snapshot.params['id'];

    this.FirebaseService.getNoteDetails(this.id).subscribe(note => {
      this.note = note;
      console.log(note);

      //storageRef
      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(note.path);
      storageRef.child(note.path).getDownloadURL().then((url) => {

        //set image url
        this.imageUrl = url;
      }).catch((Error) => {
        console.log(Error);
      })
    });
  }

}

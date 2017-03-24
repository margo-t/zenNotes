import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  notes: FirebaseListObservable<any[]>;
  note: FirebaseObjectObservable<any>;
  folder: any;


  constructor(private af: AngularFire) {
  this.folder = 'noteImages';
  this.notes = this.af.database.list('notes') as FirebaseListObservable<Note[]>;
}

  getNotes(){
    return this.notes;
  }

  getNoteDetails(id){
    this.note = this.af.database.object('/notes/'+id) as FirebaseObjectObservable<Note>;
    return this.note;

  }

  addNote(note: Note){
    // Create root reference
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {

        note.image = selectedFile.name;
        note.path = path;
        return this.notes.push(note);
      })
    }
  }

  updateNote(id, note){
    return this.notes.update(id, note)
  }

  deleteNote(id){
    return this.notes.remove(id);
  }

}

interface Note{
  $key?:string;
  title?:string;
  post?:string;
  path?:string;
  image?:string;
  //$date?:string;
}

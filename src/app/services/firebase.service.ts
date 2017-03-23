import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  notes: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) { }

  getNotes(){
    this.notes = this.af.database.list('notes') as FirebaseListObservable<Note[]>
    return this.notes;
  }

}

interface Note{
  $key?:string;
  $title?:string;
  $note?:string;
  $date?:string;
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/notes/notes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteComponent } from './components/note/note.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAo1ZxLpvg2z0V_RtfDXEV1wZyttxFL2OA',
  authDomain: 'notetakingapp-a5b5a.firebaseapp.com',
  databaseURL: "https://notetakingapp-a5b5a.firebaseio.com",
  storageBucket: "notetakingapp-a5b5a.appspot.com",
  messagingSenderId: "468454845569"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'notes', component:NotesComponent},
  {path:'add-note', component:AddNoteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    NavbarComponent,
    NoteComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

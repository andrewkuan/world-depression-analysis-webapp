import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {

  contact : Contact = {
    timeStamp: null,
    name: null,
    email: null,
    subject: null,
    message: null,
  }

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
  }

  @ViewChild('newcontact',  {static: false}) form: NgForm;

  onSubmit(contact:Contact) {

    const name = contact.name
    const email = contact.email
    const message = contact.message
    const timeStamp = Date()

    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${timeStamp}</div>
      <div>Message: ${message}</div>
    `;

    let formRequest = {
      timeStamp, name, email, message, html
    };

    this.db.list('/messages').push(formRequest);
    this.form.reset();
  }
}
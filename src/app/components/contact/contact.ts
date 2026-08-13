import { CONTACT_LINKS, contactLink } from './../../data/contact-links';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactLinks = CONTACT_LINKS;
}

import { Component } from '@angular/core';
import {Auth} from '../../services/auth.service';

@Component({

	moduleId: module.id,
 	selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  { 
constructor(private auth:Auth){

	} }

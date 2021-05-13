import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Poke } from '../models/model';

@Component({
  selector: 'app-put-post',
  templateUrl: './put.post.component.html',
  styleUrls: ['./put.post.component.css']
})

export class PutpostComponent implements OnInit {

  poke = {} as Poke;

  constructor(public addServise: UserService) { }

  ngOnInit() {
  }

  addPoke(){
    this.addServise.addData(this.poke);
    this.poke={} as Poke;
  }


  
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  param: string = ''

  constructor(
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(){
    this.param = this.activatedRoute.snapshot.params['username']
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-comp-<% dasherize(name) %>',
  templateUrl: 'my-comp-<% dasherize(name) %>.component.html',
  styleUrls: [ 'my-comp-<% dasherize(name) %>.component.scss' ],
  
})
export class <%= classify(name) %>Component implements OnInit>  {

    ngOnInit() {

  }
}
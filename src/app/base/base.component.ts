import {   Injector,  AfterViewInit} from '@angular/core';

export abstract class BaseComponent implements AfterViewInit {

  constructor(inject: Injector ) {

  }

  ngAfterViewInit() {

  }

  afterLoad() { }
}

import { Component, OnInit } from '@angular/core';
import { Argonaute } from '../models/argonaute.model';
import { ArgonauteService } from '../shared/argonaute.service';

@Component({
  selector: 'app-argonaute-list',
  templateUrl: './argonaute-list.component.html',
  styleUrls: ['./argonaute-list.component.scss']
})
export class ArgonauteListComponent implements OnInit {

  argonauteList: Argonaute[] = [];
  argonaute: Argonaute = new Argonaute(0, "")

  constructor(
    private argonauteService: ArgonauteService) {
  }

  ngOnInit(): void {
    this.argonauteService.findAll().subscribe((res) => {
      this.argonauteList = res;
    })
  }
}

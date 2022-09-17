import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-collabo',
  templateUrl: './show-collabo.component.html',
  styleUrls: ['./show-collabo.component.css']
})
export class ShowCollaboComponent implements OnInit {

  constructor(private service:SharedService) { }

  CollaborateurList:any=[];

  ngOnInit(): void {
    this.refreshCollaboList();

  }
  refreshCollaboList(){
    this.service.getCollaboList().subscribe(data=>{
      this.CollaborateurList=data.body;
    })
  }

}

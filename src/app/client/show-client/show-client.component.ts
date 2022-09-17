import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.css']
})
export class ShowClientComponent implements OnInit {

  constructor(private service:SharedService) { }

  
  ClientList:any=[];
  CollaboList:any;
  ct_Num :any;
  Clients:any;
  SelectedVille:any;
  SelectedCO:any; 
  CList: any;
  co_Nom:any;
  vil:any;

  ngOnInit(): void {
    this.refreshClientList();
    this.refreshCollaboList();
    this.RetrieveData();
    this.RetrieveDataV();


  }
  refreshClientList(){
    this.service.getClientList().subscribe(data=>{
      this.ClientList=data.body;
      console.log(this.ClientList)
    })
  }
  refreshCollaboList(){
    this.service.getCollaboList().subscribe(data=>{
      this.CollaboList=data.body;
    })
  }
  Search(){
    if(this.ct_Num ==""){
      this.ngOnInit();

    }else {this.ClientList=this.ClientList.filter( (t:any) =>
      {return t.ct_Num .toLocaleLowerCase().match(this.ct_Num.toLocaleLowerCase());})

    }
  }
  RetrieveData(){
    this.service.getClientList().subscribe(data=>this.ClientList=data.body)
  }
  RetrieveDataV(){
    this.service.getClientList().subscribe(data=>this.Clients=data.body)
  }
  
  onChange($event:Event ){
    if (this.SelectedVille ==='reset'){
       this.RetrieveData();
     }else{
     this.service.getClientByVille(this.SelectedVille).subscribe(data=>this.ClientList=data.body);
         console.log(this.SelectedVille);}


  }
  onSelect($event:Event){
    if (this.SelectedCO ==='reset'){
      console.log(this.SelectedCO);
      this.RetrieveData();
    }else{
    this.service.getClientByNomCO(this.SelectedCO).subscribe(data=>this.ClientList=data.body);
        }



  }
  

}

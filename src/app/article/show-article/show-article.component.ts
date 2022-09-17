import { Component, OnInit } from '@angular/core';
import { IArticleResponse } from 'src/app/Model/Article.model';
import { SharedService } from 'src/app/shared.service'

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  constructor(private service:SharedService) { }


  ArticleList:any=[];
  FamilleList:any=[];
  ar_Ref:any;
  articles: any;
  family:any;
  selectedFam:any = 'reset';

  ngOnInit(): void {
    this.refreshArticleList();
    this.RetrieveData();
    this.RetrieveDataFam();
  }
  refreshArticleList(){
    this.service.getArticleList().subscribe(data=>{
      this.ArticleList=data;
    })

  }
  Search(){
    if(this.ar_Ref ==""){
      this.ngOnInit();

    }else {this.articles=this.articles.filter( (t:any) =>
      {return t.ar_Ref.toLocaleLowerCase().match(this.ar_Ref.toLocaleLowerCase());})

    }
  }
RetrieveData(){
  this.service.getArticleList().subscribe(data=>this.articles=data.body)
}

RetrieveDataFam(){
  this.service.getFamille().subscribe(data=>this.family=data.body)
}

onChange($event:Event ){
 if (this.selectedFam ==='reset'){
    this.RetrieveData();
  }else{
  this.service.getArticleByFamily(this.selectedFam).subscribe(data=>this.articles=data.body);
      console.log(this.selectedFam);}



}
}
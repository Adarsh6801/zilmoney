import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/model/interfaces/Iuser.interface';
import { UserTableService } from 'src/app/services/user-table.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit{
  constructor(private service: UserTableService){}

  // these are two way data binding variebles which are used to search
  nameSearch!:string;
  companyNameSearch!:string;
  designationSearch!:string;

  // user datas 
  userData!:Iuser[];

  
  ngOnInit(): void {
    this.getUserData()
  }

  // get datas of the user
  getUserData(){
    this.service.getUserData().subscribe((res)=>{
      console.log(res);
      this.userData=res;
    })
  }
}

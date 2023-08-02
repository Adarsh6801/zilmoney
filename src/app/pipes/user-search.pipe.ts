import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from '../model/interfaces/Iuser.interface';
@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(user: Iuser[], nameSearch:string,companyNameSearch:string,designationSearch:string):Iuser[]  {
    let result:Iuser[]=[]
    if(!nameSearch && !companyNameSearch && !designationSearch){
      return user;
    }

    // here we check the name search element is availbale or not
    if(nameSearch){
      let searchEl=nameSearch.toLowerCase()
      // regex is used for the better search 
      let secReg= new RegExp(searchEl)
      if(result.length===0){
        result=user.filter(el=>el.name.toLowerCase().match(secReg))
      }else{
        result=result.filter(el=>el.name.toLowerCase().match(secReg))
      }
    }

        // here we check the company name search element is availbale or not
    if(companyNameSearch){
      let searchEl=companyNameSearch.toLowerCase()
      let secReg= new RegExp(searchEl)
      if(result.length===0){
        result=user.filter(el=>el.company.name.toLowerCase().match(secReg))
      }else{
        result=result.filter(el=>el.company.name.toLowerCase().match(secReg))

      }
    }

    
    // here we check the company designation search element is availbale or not
    if(designationSearch){
      let searchEl=designationSearch.toLowerCase()
      let secReg= new RegExp(searchEl)
      if(result.length===0){
        result=user.filter(el=>el.company.designation.toLowerCase().match(secReg))
      }else{
        result=result.filter(el=>el.company.designation.toLowerCase().match(secReg))

      }
    }
    return result;
  }

}

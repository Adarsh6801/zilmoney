export interface Iuser{
    id:number;
    name:string;
    phone:string;
    username:string;
    address:object;
    company:Icompany;
}

interface Icompany{
    name:string;
    bs:string;
    catchPhrase:string;
    designation:string;
}
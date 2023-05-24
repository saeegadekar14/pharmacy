export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean=false;
    stars:number=0;
    tags?:string[];
    imageUrl!:string;
    prescribedFor!:string;
    Origin!:string[];
}
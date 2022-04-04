export class CompanyService{

    private static id?:string;

    public static getId(){
    return localStorage.getItem("id");
}
public static setId(id: string){
   localStorage.setItem('id' ,id );
} 
}



export class livres{
    public get titre():string{return this._titre;}
    public set titre(value: string) {this._titre = value;}
  
    public get couverture():string{return this._couverture;}
    public set couverture(value: string) {this._couverture = value;}

    public get prix():number{return this._prix;}
    public set prix(value: number) {this._prix = value;}

    public get dateEdition():Date{return this._dateEdition;}
    public set dateEdition(value: Date) {this._dateEdition= value;}
constructor(private _titre: string,private _couverture:string,private _prix:number,private _dateEdition:Date) {

}
}
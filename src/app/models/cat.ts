export class Cat
{
    private _id: number;
    private _nom: string;
    private _age: number;
    private _race: string;
    private _vivant: boolean;

    constructor(nom: string, age: number, race: string, vivant:boolean){
        this._nom = nom;
        this._age = (age > 0? age : 0);
        this._race = race;
        this._vivant = vivant;
    }

    get id() : number
    {
        return this._id;
    }

    // nom
    set nom(nom: string){
        this._nom = nom;
    }
    get nom() : string
    {
        return this._nom;
    }

    // age
    set age(age: number){
        if(this._age > 0){
            this._age = age;
        }else{
            console.log("Vous n'êtes pas née");
        }
    }
    get age() : number
    {
        return this._age;
    }

    // race
    set race(race: string){
        this._race = race;
    }
    get race() : string
    {
        return this._race;
    }

    // vivant
    set vivant(vivant: boolean){
        this._vivant = vivant;
    }
    get vivant() : boolean
    {
        return this._vivant;
    }
}
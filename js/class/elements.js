
import { Data } from "./data.js";

// class Income extends Data{
export class Income extends Data{

    static idIncome = 0;

    constructor(descp , value){
        super(descp, value);
        this._idI = ++Income.idIncome;
    }

    get idIncome(){
        return this._idI;
    }
}

// class Egress extends Data{
export class Egress extends Data{

    static idEgress = 0;

    constructor(descp, value){
        super(descp, value);
        this._idE = ++Egress.idEgress;
    }

    get idEgress(){
        return this._idE;
    }
}
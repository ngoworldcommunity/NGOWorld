import { Validator  } from "jsonschema";

export default function SchemaValidator( prototype , data){
    var v = new Validator();
    var schema = prototype;
    return v.validate(data , schema) 
}

const errMsgLocalisers = {
    minLength:(err)=>{return `Minimun length should be ${err.argument}`},
    maxLength:(err)=>{return `Maximum length should be ${err.argument}`},
    format:(err)=>{return `Is not valid !`},
    pattern:(err)=>{return `Is not valid !`}
}

export function msgLocalise(err){
    return errMsgLocalisers[err.name]? errMsgLocalisers[err.name](err):"Is not a valid value !"
}

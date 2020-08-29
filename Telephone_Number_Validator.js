function telephoneCheck (str){
    if (str.index0f("(")=== -1 && str.index0f(")") >-1){
        return false;
    }
    let polishedPhone = str.replace (/-| /g,"");

    if (polishedPhone.index0f("(") < polishedPhone.index0f(")")){
        polishedPhone = polishedPhone.replace(/\(|\)/g,"");

    }

    console.log(polishedPhone)
    if (polishedPhone.length === 10){
        return true;

    }else if (polishedPhone.length === 11 && polishedPhone[0]==="1"){
        return true;
    }

    return false;

}

let result = telephoneCheck("1 (555) 555-5555");
console.log(result);
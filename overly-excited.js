let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let betterSentence = ["The", "talented", "coder", "finally", "figured", "out", "how", "to", "add", "in", "the", "exclamation", "points"];

function addExcitement (theWordArray, x) {

    let buildMeUp = ""

    for (let i = 1; i <= theWordArray.length; i++) {
        
        if(i%3===0 && i!==0){
            
            buildMeUp += " " + theWordArray[i-1];
            for(let j = 0; j<i; j++ )
                if(j%3===0){
                    buildMeUp += x
                }
        }
         else{
        buildMeUp += " " + theWordArray[i-1];
        }
        console.log(buildMeUp);
    }
}
addExcitement(sentence, "`");
addExcitement(betterSentence, "&");

var speech = ['sumon', 'asad', 'Rejaul', 'Rubel', 'asaduzzaman'];

var speech2 = "I am a good   person.   I don't snore at night.";

var count = 0;
for(i = 0; i < speech2.length; i++){
    var char = speech2[i];
    if(char == " " && speech2[i-1] != " "){
        count++;
    }
}
count++;
console.log(count)




function bigBrother(name){
    var bigName = name[0].length;
    var finalBigName = name[0];
    for(var i = 0; i< name.length; i++){
        var singleName = name[i].length;
        if(singleName > bigName){
            finalBigName = name[i];
            bigName = singleName;
        }
    }
    return finalBigName;
}
// var bigestString = bigBrother(speech);

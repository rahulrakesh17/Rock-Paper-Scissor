

let randomPicker=Math.floor(Math.random()*3)+1;
let userPick=0;
let compSign="";
var userSign="";
switch(randomPicker){
    case 1:
        compSign="✊";
        break;
    case 2:
        compSign="🖐️";
        break;
    case 3:
        compSign="✌️";
        break;
}


$(".sign").click(function(){
    userPick= $(this).attr("id");
    if(userPick==1){
        userSign="✊";
    }
    else if(userPick==2){
        userSign="🖐️";
    }
    else if(userPick==3) {
        userSign="✌️"
    }
    
    display();
})

function display(){
   

    $(".display").html("You Picked: "+ userSign+ "  The Computer picked: "+compSign)
    console.log(userPick+userSign);
    result();
}


function result(){
    if(userPick===randomPicker){
        $(".result").html("Match is drawn");
    }
    else if(userSign=="✊"&&compSign=="✌️"){
        $(".result").html("You're the winner");
    }
    else if(userSign=="🖐️"&&compSign=="✌️"){
        $(".result").html("Computer is the winner");
    }
    else if(userSign=="✊"&&compSign=="🖐️"){
        $(".result").html("Computer is the winner");
    }
    else if(compSign=="✊"&&userSign=="✌️"){
        $(".result").html("Computer is the winner");
    }
    else if(compSign=="🖐️"&&userSign=="✌️"){
        $(".result").html("You're the Winner");
    }
    else if(compSign=="✊"&&userSign=="🖐️"){
        $(".result").html("You're the winner");
    }
}

var user_input;
var user_choice="";

window.onload = function () {
    user_input = document.getElementById("inp_txt");
}

function button_onclick() {

    while(1) {
        user_choice = user_input.value;
        if(user_choice == "가위" || user_choice == "바위" || user_choice == "보") break;
        else {
            alert("잘못된 입력입니다.");
            return;
        }
    }

    var random = Math.floor(Math.random() * 3) + 1;
    var ai_choice;
    switch (random) {
        case 1:
            ai_choice = "가위";
            break;
        case 2:
            ai_choice = "바위";
            break;
        default:
            ai_choice = "보";   
    }

    if (user_choice == ai_choice) {
        alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n무승부!");
    }
    else if ((user_choice == "가위" && ai_choice == "바위") || (user_choice == "바위" && ai_choice == "보") || (user_choice == "보" && ai_choice == "가위")) {
        alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n패배!");
    }
    else {
         alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n승리!");
    }

}
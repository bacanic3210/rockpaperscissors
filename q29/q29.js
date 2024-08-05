var user_choice = prompt("가위 바위 보 중에 낼 것을 입력하세요");

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
        break;
}

if(user_choice == ai_choice) {
    alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n무승부!");
}
else if((user_choice == "가위" && ai_choice == "바위") || (user_choice == "바위" && ai_choice == "보") || (user_choice == "보" && ai_choice == "가위")) {
    alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n패배!");
}
else if((user_choice == "가위" && ai_choice == "보") || (user_choice == "바위" && ai_choice == "가위") || (user_choice == "보" && ai_choice == "바위")) {
    alert("컴퓨터 : " + ai_choice + " vs 유저 : " + user_choice + "\n승리!");
}
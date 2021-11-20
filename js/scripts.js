// Business Logic
function greetings(number, name) {
  number = parseInt(number);
  const userNumber = [];
  for (let i = 0; i <= number; i++) {
    userNumber.push(i);
  }
  const roboReply = userNumber.map(function(element) {
    //let arrayItem = element.toString();
    if (/3/g.test(element)) {
      if (name === "") {
        return "Will you be my neighbor?";
      }
      else {
        return "Will you be my neighbor, " + name + "?";
      }
    } else if (/2/g.test(element)) {
      return "Boop!";
    } else if (/1/g.test(element)) {
      return "Beep!"
    } else {
      return element;
    }
  });
  return roboReply.join(" ");
}
function countDown(number) {
  number = parseInt(number);
  const userNumber = [];
  for (let i = number; i >= 0; i--) {
    userNumber.push(i);
  }
  return userNumber;
}
function countUp(number){
  number = parseInt(number);
  const userNumber = [];
  for (let i = 0; i <= number; i++) {
    userNumber.push(i);
  }
  return userNumber;
}
// UI Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event){
    event.preventDefault();
    let userInput = parseInt($("#userNumber").val());
    let userName = $("#userName").val();
    let roboResponse = greetings(userInput, userName);
    $("#robogersReply").html(roboResponse);
    $("#robogersBox").show();
  });
});
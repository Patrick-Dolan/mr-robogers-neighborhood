// Business Logic
function greetings(number) {
  number = parseInt(number);
  const userNumber = [];
  for (let i = 0; i <= number; i++) {
    userNumber.push(i);
  }
  const roboReply = userNumber.map(function(element) {
    //let arrayItem = element.toString();
    if (/3/g.test(element)) {
      return "Will you be my neighbor?";
    } else if (/2/g.test(element)) {
      return "Boop!";
    } else if (/1/g.test(element)) {
      return "Beep!"
    } else {
      return element;
    }
  });
  return roboReply;
}
// UI Logic
$(document).ready(function() {
  $("form#roboForm").submit(function(event){
    event.preventDefault();
    let userInput = parseInt($("#userNumber").val());
    let roboResponse = greetings(userInput);
    $("#robogersReply").html(roboResponse);
  });
});
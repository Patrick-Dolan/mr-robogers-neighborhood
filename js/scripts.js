function greetings(number) {
  const userNumber = [];
  for (let i = 0; i <= number; i++) {
    userNumber.push(i);
  }
  const roboReply = userNumber.map(function(element) {
    if (element === 3) {
      return "Will you be my neighbor?";
    } else if (element === 2) {
      return "Boop!";
    } else if (element === 1) {
      return "Beep!"
    } else {
      return element;
    }
  });
  return roboReply;
}
var socket = io();
var messageButton = document.querySelectorAll('button[name="button"]')[0];
var messageBox = document.querySelectorAll('textarea[name="message"]')[0];
var allMessages = document.querySelectorAll('div[name="allMessages"]')[0];
console.log(messageButton);

messageButton.onclick = function() {
  console.log("message sent");
  socket.emit('message', messageBox.value);
};

socket.on("emit message", function (data) {
  allMessages.innerHTML = '';
  for (var key in data){
    allMessages.innerHTML+="<p>" + data[key] + "</p>";
  }
});

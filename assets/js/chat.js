$(function(){
var myServerUrl = "http://agile-everglades-1937.herokuapp.com";

// define our message model
var Message = can.Model({
    findAll : 'GET ' + myServerUrl + '/messages',
    // create a message, but prevent the 'created' event from firing
    create : function(attrs) {
        $.post(myServerUrl + '/messages', attrs);
        return $.Deferred();
    }
},{});

// connect using Socket.io
var socket = io.connect(myServerUrl);

// listen for 'message-created' event to create a Message instance
// Note: the 'created' event IS triggered on this model instance. 
socket.on('message-created', function(message){
    new Message(message).created();
});

// initially find all messages from the server and append them to the DOM
Message.findAll({},function(messages){
  $("#messages").html( can.view('messageEJS', messages) );
  scrollToBottom();
  
});

// listen for the 'created' event on the Model 
// append the message to the DOM using a template
Message.bind("created", function(ev, message){
    var messagesCont = $("#messages"),
        shouldScroll = ( messagesCont.scrollTop() + messagesCont[0].clientHeight === messagesCont[0].scrollHeight );
    
    messagesCont.append( can.view('messageEJS', [message]) );
      
    if (shouldScroll) {
        scrollToBottom();
    }
});

// listen for the form to submit 
// create a message and post the results to the server
$("#create-message").bind("submit",function(ev){
    ev.preventDefault();
    new Message({body: $("#body").val()}).save();
    $("#body").val('');
});

var scrollToBottom = function() {
     $("#messages").scrollTop($("#messages")[0].scrollHeight);   
};
});
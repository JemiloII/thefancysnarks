console.log('Start!');
var myServerUrl = "localhost:1337";


// connect using Socket.io
var socket = io.connect();


// define our message model
var Message = can.Model({
    findAll : 'GET ' + myServerUrl + '/messages',
    // create a message, but prevent the 'created' event from firing
    create : function(attrs) {
        console.log('post');
        socke t.post('/messages', attrs);

    }
},{});



socket.on('connect', function() {


    


// initially find all messages from the server and append them to the DOM
socket.get('/messages', function(messages, res) {
    console.log('GET: Message Created!');
  $("#messages").html( can.view('messageEJS', messages) );
  scrollToBottom();
});

// listen for 'message-created' event to create a Message instance
// Note: the 'created' event IS triggered on this model instance. 
socket.on('messages', function(message){
    console.log('ON: Message Created!');
    new Message(message).created();
});

// listen for the 'created' event on the Model 
// append the message to the DOM using a template
Message.bind("created", function(ev, message){
    console.log('BIND: Created!');
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
(function(){
    const socket = io()

    socket.on('Update-messages',(messages)=>{
        console.log('messages',messages)
    })
})()
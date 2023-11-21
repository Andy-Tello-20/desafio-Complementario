(function () {
    let email
    const socket = io()

    document.getElementById('form-message')
        .addEventListener('submit', (event) => {
            event.preventDefault()
            const input = document.getElementById('input-message')
            const newMsg ={
                usar: email,
                body:input.value
            }
            input.value=''
            input.focus()
            socket.emit('new-message',newMsg)

          

        })

    socket.on('Update-messages', (messages) => {
        console.log('messages', messages)
        const logMessages = document.getElementById('log-messages');
        logMessages.innerText = '';
        messages.forEach((message) => {
          const p = document.createElement('p');
          p.innerText = `${message.user}: ${message.body}`;
          logMessages.appendChild(p);
        });

    })

    Swal.fire({
        title: 'Indentificate por favor 👮',
        input: 'text',
        allowOutsideClick: false,
        inputValidator: (value) => {
            if (!value) {
                return 'Necesitamos que ingreses su email para continuar.'
            }
        }
    })
        .then((result) => {
            email = result.value.trim();
            console.log(`hola ${email} Bienvenido`);
        })
        .catch((error) => {
            console.error('Ah ocurrido un error al capturar el nombre 😨:', error.message);
        });
})()
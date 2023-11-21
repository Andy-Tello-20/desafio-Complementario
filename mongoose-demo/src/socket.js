import {Server} from 'socket.io'

import MessageModel from './dao/models/messages.model.js'

let io

export const InitSocket = async (httpServer) => {

    io = new Server(httpServer)

    io.on('connection', async (clientSocket) => {

        console.log(`nuevo cliente socket conectado (${clientSocket.id})`)

        const messages = await MessageModel.find({})
        clientSocket.emit('Update-messages', messages)
    })




}
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { ConnectionService } from "./connection.service";
import { Socket } from "socket.io";


@WebSocketGateway()
export class ConnectionGateway{
    constructor( private readonly connectionService: ConnectionService) {};
    @SubscribeMessage('register_event')
    handleRegister(
        @ConnectedSocket() client: Socket,
        @MessageBody() body: { machineId: string } 
    ){
        const password = this.connectionService.registerMachine(body.machineId, client.id);
        
        client.emit('register_success', { password }); //this is the shorthand property name in nestjs
    }
}

import { Injectable } from "@nestjs/common";


@Injectable()
export class ConnectionService {
    private activeConnection = new Map<string, { password: string, socketId: string}>();

    registerMachine(machineId: string, socketId: string){
        const randomPassword = Math.random().toString(36).substring(2, 6);

        this.activeConnection.set(machineId, {
            password: randomPassword,
            socketId: socketId
        });

        return randomPassword;
    }
}
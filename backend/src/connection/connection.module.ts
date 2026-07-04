import { Module } from "@nestjs/common";
import { ConnectionGateway } from "./connection.gateway";
import { ConnectionService } from "./connection.service";


@Module({
    exports: [ConnectionGateway, ConnectionService]
})
export class ConnectionModule {}
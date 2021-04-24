import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "../../../../node_modules/rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "../../../../node_modules/@angular/core";


interface Server {
    id: number
    name: string
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        const server = this.serversService.getServer(+(route.params['id']))
        return server
    }

}
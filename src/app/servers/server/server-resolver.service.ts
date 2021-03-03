
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import {Resolver} from './resolver-interface'


@Injectable()
export class ServerResolver implements Resolve<Resolver>{
    constructor(private serversService: ServersService){}
    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<Resolver> | Promise<Resolver> | Resolver {
                return this.serversService.getServer(+route.params['id'])
            }

}
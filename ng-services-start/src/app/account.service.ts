import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "../../node_modules/@angular/core";

@Injectable()
export class AccountService {

    statusChanged = new EventEmitter<string>()

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService) {}

      onAccountAdded(newAccount: {name: string, status: string}) {
        this.accounts.push(newAccount);
        this.loggingService.logAccountStatus(newAccount.status)
      }
    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logAccountStatus(updateInfo.newStatus)
        this.statusChanged.emit(updateInfo.newStatus)
      }

}
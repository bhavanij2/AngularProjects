export class LoggingService {

    logAccountStatus(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}
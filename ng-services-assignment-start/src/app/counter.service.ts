import { EventEmitter } from "@angular/core";

export class CounterService {

    inactiveCount: number = 0
    activeCount: number = 0

    inactiveCountEmitter = new EventEmitter<number>()
    activeCountEmitter = new EventEmitter<number>()

    incrementInactiveCount() {
        this.inactiveCount = this.inactiveCount + 1
        this.inactiveCountEmitter.emit(this.inactiveCount)
    }

    incrementActiveCount() {
        this.activeCount = this.activeCount + 1
        this.activeCountEmitter.emit(this.activeCount)
    }

}
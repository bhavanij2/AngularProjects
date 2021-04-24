import { Directive, OnInit, ElementRef } from '@angular/core'

@Directive({
    selector: '[highlightOddNumber]'
})
export class HighlightOddDirective implements OnInit {

    constructor(private element: ElementRef) {}

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'yellow'
    }
}
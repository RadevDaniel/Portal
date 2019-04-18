import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[HoverIcon]'
})

export class HoverIconDirective {
    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ){}
    
    @HostListener('mouseenter') onHover(event){
        this.renderer.setStyle(
            this.element.nativeElement,
            'color',
            'teal'
        );
        this.renderer.setStyle(
            this.element.nativeElement,
            'cursor',
            'pointer'
        );
    }

    @HostListener('mouseleave') onLeave(event){
        this.renderer.setStyle(
            this.element.nativeElement,
            'color',
            ''
        );
    }
}

// src/app/directives/scroll-reveal.directive.ts
import { Directive, ElementRef, AfterViewInit, OnDestroy, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    this.renderer.addClass(element, 'scroll-reveal');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.renderer.addClass(element, 'scroll-reveal--visible');
              } else {
                this.renderer.removeClass(element, 'scroll-reveal--visible');
              }
            });
          },
          {
            root: null,
            // Shrinks the effective viewport by 15% top and bottom, so a
            // section must scroll well past the edge (not just barely
            // touch it) before triggering — this is what stops the
            // flicker/eagerness right at the boundary.
            rootMargin: '-15% 0px -15% 0px',
            // Require 25% of the section visible before toggling,
            // instead of just 10% — less sensitive to tiny scroll jitter
            threshold: 0.25,
          }
        );

        this.observer.observe(element);
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
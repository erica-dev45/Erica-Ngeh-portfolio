// src/app/components/stats/stats.component.ts
import { Component, ElementRef, AfterViewInit, inject, signal } from '@angular/core';
import { STATS, Stat } from '../../data/stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class StatsComponent implements AfterViewInit {
  private el = inject(ElementRef<HTMLElement>);

  stats = STATS;

  // One signal per stat, holding the number currently displayed mid-animation.
  // signal(0) means every counter starts at 0 and the template updates
  // automatically whenever .set() is called below.
  displayValues = signal<number[]>(this.stats.map(() => 0));

  private hasAnimated = false;

  ngAfterViewInit(): void {
    // Separate observer from the reveal directive — this one only fires
    // the count-up once, the first time the Stats section becomes visible.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateAll();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }

  private animateAll(): void {
    this.stats.forEach((stat, index) => this.animateOne(stat, index));
  }

  private animateOne(stat: Stat, index: number): void {
    const duration = 1500;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutQuart — same easing curve as the original mockup, so it
      // starts fast and settles gently instead of animating linearly
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(eased * stat.target);

      // Update just this one counter's slot, without touching the others
      this.displayValues.update((values) => {
        const next = [...values];
        next[index] = currentValue;
        return next;
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
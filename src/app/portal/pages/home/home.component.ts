import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {RouterLink} from '@angular/router';
import {KeyValuePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('counterSection', { static: false }) counterSection!: ElementRef;

  counterValues: { [key: string]: number } = {
    annualPartner: 0,
    completedProjects: 0,
    happyCustomers: 0,
    researchWork: 0,
  };

  targetCounters: { [key: string]: number } = {
    annualPartner: 250,
    completedProjects: 380,
    happyCustomers: 490,
    researchWork: 98,
  };

  labels: { [key: string]: string } = {
    annualPartner: "ANNUAL PARTNERS",
    completedProjects: "COMPLETED PROJECTS",
    happyCustomers: "HAPPY CUSTOMERS",
    researchWork: "RESEARCH WORK",
  };

  hasAnimated: boolean = false;
  observer!: IntersectionObserver;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.observeSection();
  }

  ngOnDestroy(): void{
    if(this.observer){
      this.observer.disconnect();
    }
  }

  startCounting() {
    if (this.hasAnimated) return;
    this.hasAnimated = true;

    Object.keys(this.counterValues).forEach((key) => {
      this.animateCounter(key);
    });
  }

  animateCounter(counterKey: string) {
    const target = this.targetCounters[counterKey];
    let count = 0;
    const increment = Math.ceil(target / 100);

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        this.counterValues[counterKey] = Math.min(count, target);
        requestAnimationFrame(updateCounter); // Use requestAnimationFrame for smoother animation
      }
    };
    requestAnimationFrame(updateCounter);
  }


  resetCounters() {
    if (!this.hasAnimated) return;
    this.hasAnimated = false;
    Object.keys(this.counterValues).forEach((key) => {
      this.counterValues[key] = 0;
    });
  }

  observeSection() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startCounting();
          } else {
            this.resetCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (this.counterSection) {
      this.observer.observe(this.counterSection.nativeElement);
    }
  }

}

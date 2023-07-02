import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionListenerService {
  private elementIds: string[] = [];
  private closestElement: string | null = null;
  private elementMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();


  constructor() {}

  initialize(elementIds: string[]): void {
    this.elementIds = elementIds;
    this.buildElementMap();

    this.updateClosestElement();
  }

  private buildElementMap(): void {
    for (const elementId of this.elementIds) {
      const element = document.getElementById(elementId);
      if (element) {
        this.elementMap.set(elementId, element);
      }
    }
  }

  private updateClosestElement(): void {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    let closestElement: string | null = null;
    let closestDistance = Infinity;

    for (const [elementId, element] of this.elementMap) {
      const rect = element.getBoundingClientRect();
      const distanceToTop = Math.abs(rect.top);

      if (distanceToTop < closestDistance) {
        closestDistance = distanceToTop;
        closestElement = elementId;
      }
    }

    this.closestElement = closestElement;
  }

  handleScroll(): void {
    this.updateClosestElement();
  }

  getClosestElement(): string | null {
    return this.closestElement;
  }
}

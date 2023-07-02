import { Component, AfterViewInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { SectionListenerService } from 'src/app/services/SectionListener.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent implements AfterViewInit {
  readonly sectionIds = [
    'home',
    'about',
    'testimonials',
    'gallery',
    // 'help',
    'contact'
  ]
  readonly sectionLinkNames = [
    'Início',
    'Sobre',
    'Relatos',
    'Galeria',
    // 'Como Ajudar',
    'Contato'
  ]
  private scrollPosition: number = 0;

  activeSection: string | null = null;

  get isSticky() {
    return this.scrollPosition > (window.innerHeight - this.navBarHeight) || !this.collapse;
  }
  private navBarHeight = 5 * 16;

  collapse = true;

  constructor(private sectionListener: SectionListenerService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sectionListener.initialize(this.sectionIds);
      this.activeSection = this.sectionListener.getClosestElement();
    }, 200);
  }

  closeNav() {
    this.collapse = true;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    this.sectionListener.handleScroll();

    this.activeSection = this.sectionListener.getClosestElement();
  }

}

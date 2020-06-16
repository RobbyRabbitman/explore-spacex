import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { RocketService } from 'src/app/shared/services/rocket.service';
import { Observable } from 'rxjs';
import { Rocket } from 'src/app/shared/model/rocket';
import { share, take } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[];
  @ViewChildren('rockets', { read: ElementRef }) set rocketsToBeObserved(
    elements: ElementRef[]
  ) {
    if (elements.length === 0) return;
    const toc: Element[] = this.rockets.map((rocket) =>
      document.querySelector(`#toc_${rocket.id}`)
    );

    const observer = new IntersectionObserver((entries, observer) => {
      let active = entries.filter((entry) => entry.isIntersecting)[0];
      console.log(entries);

      if (active) {
        toc.forEach((element) => element.classList.remove('toc-active'));
        toc
          .find((element) => element.id === `toc_${active.target.id}`)
          .classList.add('toc-active');
      }
    });
    elements.forEach((el) => observer.observe(el.nativeElement));
  }

  constructor(private rocketService: RocketService) {}

  ngOnInit(): void {
    this.rocketService.rocket$
      .pipe(take(1))
      .subscribe((rockets) => (this.rockets = rockets));
  }

  scrollTo(id: string) {
    document.querySelector(`#${id}`).scrollIntoView();
  }
}

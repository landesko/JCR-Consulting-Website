import {Component, OnInit} from '@angular/core';
import {CarouselConfig} from 'ng2-bootstrap/carousel';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [{provide: CarouselConfig, useValue: {interval: 5000, noPause: false}}]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}

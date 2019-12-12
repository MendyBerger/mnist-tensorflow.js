import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-preview-pixelated',
	templateUrl: './preview-pixelated.component.html',
	styleUrls: ['./preview-pixelated.component.css']
})
export class PreviewPixelatedComponent {

	@Input()
	image: number[][] = [];

}

import { Component, OnInit } from '@angular/core';
import { TfService } from './tf.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
		private tfService: TfService
	) { }

	ngOnInit(): void {
		console.log(this.tfService);
	}

	onDrew(imageData: ImageData) {
		this.tfService.predict(imageData)
	}

}

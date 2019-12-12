import { Component, OnInit, ViewChild } from '@angular/core';
import { LayersModel, loadLayersModel, tidy, browser, cast, Tensor, Rank } from '@tensorflow/tfjs';
import { DrawableComponent } from './drawable/drawable.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	model: LayersModel;
	prediction: unknown[];
	pixelatedImage: number[][];

	@ViewChild(DrawableComponent)
	drawable: DrawableComponent;

	ngOnInit(): void {
		this.loadModel();
	}

	onDrew(imageData: ImageData) {
		this.predict(imageData)
	}

	private async loadModel() {
		this.model = await loadLayersModel('/assets/model.json');
	}

	async predict(imageData: ImageData) {
		await tidy(() => {
			let img: any = browser.fromPixels(imageData, 1);
			img = img.reshape([1, 28, 28, 1]);
			img.array()
				.then(arr => {
					this.pixelatedImage = arr[0];
					console.log(arr[0]);
					
				});
			console.log(this.pixelatedImage);
			
			img = cast(img, 'float32');
			const output = this.model.predict(img) as Tensor<Rank>;
			this.prediction = Array.from(output.dataSync());
			console.log(this.prediction);
		});
	}

	clear(){
		this.prediction =null;
		this.pixelatedImage = [[]];
		this.drawable.clear();
	}

}

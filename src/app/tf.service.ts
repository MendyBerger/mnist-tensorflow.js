import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { LayersModel } from '@tensorflow/tfjs';


@Injectable({
	providedIn: 'root'
})
export class TfService {

	model: LayersModel;
	predictions: unknown[];

	constructor() {
		this.loadModel();
	}

	private async loadModel() {
		this.model = await tf.loadLayersModel('/assets/model.json');
	}

	async predict(imageData: ImageData) {
		await tf.tidy(() => {
			let img: any = tf.browser.fromPixels(imageData, 1);
			img = img.reshape([1, 28, 28, 1]);
			img = tf.cast(img, 'float32');
			const output = this.model.predict(img) as any;
			this.predictions = Array.from(output.dataSync());
			console.log(this.predictions);
		});
	}

}

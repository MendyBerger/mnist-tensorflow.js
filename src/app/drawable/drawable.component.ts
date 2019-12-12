import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-drawable',
	templateUrl: './drawable.component.html',
	styleUrls: ['./drawable.component.css']
})
export class DrawableComponent implements OnInit {

	pos = { x: 0, y: 0 };
	ctx: CanvasRenderingContext2D;

	@Output() newImage = new EventEmitter();

	@ViewChild("canvas")
	canvas: ElementRef;

	ngOnInit() {
		this.ctx = this.canvas.nativeElement.getContext('2d');
	}

	onUp(e) {
		this.newImage.emit(this.getImgData());
	}

	onEnter(e) {
		this.setPosition(e);
	}

	onMove(e) {
		this.setPosition(e);
	}

	onDown(e) {
		if (e.buttons !== 1) {
			return;
		}

		this.ctx.beginPath(); // begin

		this.ctx.lineWidth = 10;
		this.ctx.lineCap = 'round';
		this.ctx.strokeStyle = '#111111';

		this.ctx.moveTo(this.pos.x, this.pos.y);
		this.setPosition(e);
		this.ctx.lineTo(this.pos.x, this.pos.y);

		this.ctx.stroke();
	}

	onResize(e) {
		this.ctx.canvas.width = window.innerWidth;
		this.ctx.canvas.height = window.innerHeight;
	}

	setPosition(e) {
		this.pos.x = e.offsetX;
		this.pos.y = e.offsetY;
	}

	public clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	getImgData(): ImageData {
		const scaled = this.ctx.drawImage(this.canvas.nativeElement, 0, 0, 28, 28);
		return this.ctx.getImageData(0, 0, 28, 28);
	}
}

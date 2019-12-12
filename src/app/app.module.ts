import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawableComponent } from './drawable/drawable.component';
import { PreviewPixelatedComponent } from './preview-pixelated/preview-pixelated.component';

@NgModule({
	declarations: [
		AppComponent,
		DrawableComponent,
		PreviewPixelatedComponent,
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { ContrasenaPipe } from "./pipes/contrasena.pipe";

import { LOCALE_ID } from "@angular/core";
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenaPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent]
})
export class AppModule {}

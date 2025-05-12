import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';
import { TareaFormularioComponent } from './components/tarea-formulario/tarea-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    TareaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

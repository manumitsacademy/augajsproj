import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { HomeComponent } from './home/home.component';
import { routes } from './core.routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderComponent, MainareaComponent, HomeComponent],
  exports:[HeaderComponent,MainareaComponent]
})
export class CoreModule { }

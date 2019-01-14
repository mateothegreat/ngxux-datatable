import { NgModule }                from '@angular/core';
import { NgxDatatableModule }      from '@swimlane/ngx-datatable';
import { NgxuxDatatableComponent } from './ngxux-datatable.component';

@NgModule({

  declarations: [

      NgxuxDatatableComponent

  ],

  imports: [

      NgxDatatableModule

  ],

  exports: [

      NgxuxDatatableComponent

  ]
    
})
export class NgxuxDatatableModule { }

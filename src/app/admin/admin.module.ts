import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayuotComponent } from './shared/components/admin-layuot/admin-layuot.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayuotComponent, children: [
          {path: 'ticket', component: TicketPageComponent},
        ]
      }
    ]),
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatTabsModule
  ],
  exports:[],
  declarations: [
    AdminLayuotComponent,
    TicketPageComponent,
  ]
})

export class AdminModule {

}

import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { from } from 'rxjs';

@NgModule({
    imports: [CardModule, ButtonModule, KeyFilterModule, InputTextModule, InputSwitchModule,
        CheckboxModule, InputTextareaModule, TableModule, DialogModule, CalendarModule, ToolbarModule
        , FieldsetModule, SplitButtonModule, RadioButtonModule, ToggleButtonModule,
        SidebarModule, MenuModule, PanelMenuModule, ToastModule,BreadcrumbModule],
    exports: [CardModule, ButtonModule, KeyFilterModule, InputTextModule, InputSwitchModule,
        CheckboxModule, InputTextareaModule, TableModule, DialogModule, CalendarModule, ToolbarModule
        , FieldsetModule, SplitButtonModule, RadioButtonModule, ToggleButtonModule,
        SidebarModule, MenuModule, PanelMenuModule, ToastModule,BreadcrumbModule]
})
export class PrimeNgModule { };
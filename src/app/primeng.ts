import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';

import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {ToolbarModule} from 'primeng/toolbar';
import {FieldsetModule} from 'primeng/fieldset';
import {SplitButtonModule} from 'primeng/splitbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
    imports: [CardModule,ButtonModule,KeyFilterModule,InputTextModule,InputSwitchModule,
        CheckboxModule,InputTextareaModule,TableModule,DialogModule,CalendarModule,ToolbarModule
        ,FieldsetModule,SplitButtonModule,RadioButtonModule,ToggleButtonModule],
    exports: [CardModule,ButtonModule,KeyFilterModule,InputTextModule,InputSwitchModule,
        CheckboxModule,InputTextareaModule,TableModule,DialogModule,CalendarModule,ToolbarModule
        ,FieldsetModule,SplitButtonModule,RadioButtonModule,ToggleButtonModule]
})
export class PrimeNgModule { };
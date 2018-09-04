import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { EditRow } from "./edit/editRow";
import { ViewList } from "./viewList/viewList";
import { ShareModule } from "../shared/shared.module";

@NgModule({
    declarations:[EditRow,ViewList],
    imports:[CommonModule,ShareModule,FormsModule,ReactiveFormsModule],
    exports:[EditRow,ViewList]
})

export class ShoppeeModule {}
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    AddressclassificationStockAndSalesUtilityService,
    AddressclassificationStockAndSalesUtilityPopupService,
    AddressclassificationStockAndSalesUtilityComponent,
    AddressclassificationStockAndSalesUtilityDetailComponent,
    AddressclassificationStockAndSalesUtilityDialogComponent,
    AddressclassificationStockAndSalesUtilityPopupComponent,
    AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
    addressclassificationRoute,
    addressclassificationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...addressclassificationRoute,
    ...addressclassificationPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        AddressclassificationStockAndSalesUtilityComponent,
        AddressclassificationStockAndSalesUtilityDetailComponent,
        AddressclassificationStockAndSalesUtilityDialogComponent,
        AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
        AddressclassificationStockAndSalesUtilityPopupComponent,
        AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        AddressclassificationStockAndSalesUtilityComponent,
        AddressclassificationStockAndSalesUtilityDialogComponent,
        AddressclassificationStockAndSalesUtilityPopupComponent,
        AddressclassificationStockAndSalesUtilityDeleteDialogComponent,
        AddressclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        AddressclassificationStockAndSalesUtilityService,
        AddressclassificationStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4AddressclassificationStockAndSalesUtilityModule {}

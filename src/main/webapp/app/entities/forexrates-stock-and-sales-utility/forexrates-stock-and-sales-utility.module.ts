import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    ForexratesStockAndSalesUtilityService,
    ForexratesStockAndSalesUtilityPopupService,
    ForexratesStockAndSalesUtilityComponent,
    ForexratesStockAndSalesUtilityDetailComponent,
    ForexratesStockAndSalesUtilityDialogComponent,
    ForexratesStockAndSalesUtilityPopupComponent,
    ForexratesStockAndSalesUtilityDeletePopupComponent,
    ForexratesStockAndSalesUtilityDeleteDialogComponent,
    forexratesRoute,
    forexratesPopupRoute,
} from './';

const ENTITY_STATES = [
    ...forexratesRoute,
    ...forexratesPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ForexratesStockAndSalesUtilityComponent,
        ForexratesStockAndSalesUtilityDetailComponent,
        ForexratesStockAndSalesUtilityDialogComponent,
        ForexratesStockAndSalesUtilityDeleteDialogComponent,
        ForexratesStockAndSalesUtilityPopupComponent,
        ForexratesStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        ForexratesStockAndSalesUtilityComponent,
        ForexratesStockAndSalesUtilityDialogComponent,
        ForexratesStockAndSalesUtilityPopupComponent,
        ForexratesStockAndSalesUtilityDeleteDialogComponent,
        ForexratesStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        ForexratesStockAndSalesUtilityService,
        ForexratesStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4ForexratesStockAndSalesUtilityModule {}

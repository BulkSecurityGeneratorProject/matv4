import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { MaterialStockAndSalesUtility } from './material-stock-and-sales-utility.model';
import { MaterialStockAndSalesUtilityPopupService } from './material-stock-and-sales-utility-popup.service';
import { MaterialStockAndSalesUtilityService } from './material-stock-and-sales-utility.service';
import { MaterialclassificationStockAndSalesUtility, MaterialclassificationStockAndSalesUtilityService } from '../materialclassification-stock-and-sales-utility';
import { CurrencyStockAndSalesUtility, CurrencyStockAndSalesUtilityService } from '../currency-stock-and-sales-utility';
import { LotStockAndSalesUtility, LotStockAndSalesUtilityService } from '../lot-stock-and-sales-utility';

@Component({
    selector: 'jhi-material-stock-and-sales-utility-dialog',
    templateUrl: './material-stock-and-sales-utility-dialog.component.html'
})
export class MaterialStockAndSalesUtilityDialogComponent implements OnInit {

    material: MaterialStockAndSalesUtility;
    isSaving: boolean;

    materialclassifications: MaterialclassificationStockAndSalesUtility[];

    currencies: CurrencyStockAndSalesUtility[];

    lots: LotStockAndSalesUtility[];
    creationDateDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private materialService: MaterialStockAndSalesUtilityService,
        private materialclassificationService: MaterialclassificationStockAndSalesUtilityService,
        private currencyService: CurrencyStockAndSalesUtilityService,
        private lotService: LotStockAndSalesUtilityService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.materialclassificationService.query()
            .subscribe((res: HttpResponse<MaterialclassificationStockAndSalesUtility[]>) => { this.materialclassifications = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        this.currencyService.query()
            .subscribe((res: HttpResponse<CurrencyStockAndSalesUtility[]>) => { this.currencies = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
        this.lotService.query()
            .subscribe((res: HttpResponse<LotStockAndSalesUtility[]>) => { this.lots = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.material.id !== undefined) {
            this.subscribeToSaveResponse(
                this.materialService.update(this.material));
        } else {
            this.subscribeToSaveResponse(
                this.materialService.create(this.material));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<MaterialStockAndSalesUtility>>) {
        result.subscribe((res: HttpResponse<MaterialStockAndSalesUtility>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: MaterialStockAndSalesUtility) {
        this.eventManager.broadcast({ name: 'materialListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackMaterialclassificationById(index: number, item: MaterialclassificationStockAndSalesUtility) {
        return item.id;
    }

    trackCurrencyById(index: number, item: CurrencyStockAndSalesUtility) {
        return item.id;
    }

    trackLotById(index: number, item: LotStockAndSalesUtility) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-material-stock-and-sales-utility-popup',
    template: ''
})
export class MaterialStockAndSalesUtilityPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private materialPopupService: MaterialStockAndSalesUtilityPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.materialPopupService
                    .open(MaterialStockAndSalesUtilityDialogComponent as Component, params['id']);
            } else {
                this.materialPopupService
                    .open(MaterialStockAndSalesUtilityDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}

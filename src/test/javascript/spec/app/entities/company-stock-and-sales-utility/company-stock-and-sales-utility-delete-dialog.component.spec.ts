/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { Matv4TestModule } from '../../../test.module';
import { CompanyStockAndSalesUtilityDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility-delete-dialog.component';
import { CompanyStockAndSalesUtilityService } from '../../../../../../main/webapp/app/entities/company-stock-and-sales-utility/company-stock-and-sales-utility.service';

describe('Component Tests', () => {

    describe('CompanyStockAndSalesUtility Management Delete Component', () => {
        let comp: CompanyStockAndSalesUtilityDeleteDialogComponent;
        let fixture: ComponentFixture<CompanyStockAndSalesUtilityDeleteDialogComponent>;
        let service: CompanyStockAndSalesUtilityService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Matv4TestModule],
                declarations: [CompanyStockAndSalesUtilityDeleteDialogComponent],
                providers: [
                    CompanyStockAndSalesUtilityService
                ]
            })
            .overrideTemplate(CompanyStockAndSalesUtilityDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CompanyStockAndSalesUtilityDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CompanyStockAndSalesUtilityService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});

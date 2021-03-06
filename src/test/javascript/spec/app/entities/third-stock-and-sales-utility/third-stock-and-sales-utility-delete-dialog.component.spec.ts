/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { Matv4TestModule } from '../../../test.module';
import { ThirdStockAndSalesUtilityDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/third-stock-and-sales-utility/third-stock-and-sales-utility-delete-dialog.component';
import { ThirdStockAndSalesUtilityService } from '../../../../../../main/webapp/app/entities/third-stock-and-sales-utility/third-stock-and-sales-utility.service';

describe('Component Tests', () => {

    describe('ThirdStockAndSalesUtility Management Delete Component', () => {
        let comp: ThirdStockAndSalesUtilityDeleteDialogComponent;
        let fixture: ComponentFixture<ThirdStockAndSalesUtilityDeleteDialogComponent>;
        let service: ThirdStockAndSalesUtilityService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [Matv4TestModule],
                declarations: [ThirdStockAndSalesUtilityDeleteDialogComponent],
                providers: [
                    ThirdStockAndSalesUtilityService
                ]
            })
            .overrideTemplate(ThirdStockAndSalesUtilityDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ThirdStockAndSalesUtilityDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ThirdStockAndSalesUtilityService);
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

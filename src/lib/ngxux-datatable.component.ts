import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject }   from 'rxjs';
import { DataTablePage }                          from './DataTablePage';
import { Page }                                   from './Page';
import { Pageable }                               from './Pageable';

@Component({

    selector: 'ngxux-datatable',
    styles: [],
    template: `

        <ngx-datatable class="material"
                       [rows]="rows"
                       [columns]="columns"
                       [columnMode]="'force'"
                       [headerHeight]="50"
                       [footerHeight]="50"
                       [rowHeight]="'auto'"
                       [messages]="messages"

                       [externalPaging]="true"
                       [count]="page?.count"
                       [offset]="page?.offset"
                       [limit]="page?.limit"

                       [selectionType]="'single'"

                       (sort)="onSortClick($event)"
                       (activate)="onActivate($event)"
                       (select)="onSelect($event)"
                       (page)="onPageClick($event)">

            <ng-content></ng-content>

        </ngx-datatable>

    `
})
export class NgxuxDatatableComponent<T> {

    @Input() public columns: string[] = [];
    @Input() public rows: any[] = [];
    @Input() public page: Page = new Page();

    @Input() public messages: {

        emptyMessage: any

    } = {

        emptyMessage: '<span class="datatable-loading-text">Loading..</span>'

    };

    @Output() public page = new EventEmitter();
    @Output() public sort = new EventEmitter();

    private selected = [];

    private _stream: Subject<DataTablePage> = new Subject<DataTablePage>();
    public stream$: Observable<DataTablePage> = this._stream.asObservable();

    private _clicks: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);
    public clicks$: Observable<T> = this._clicks.asObservable();

    public onPageClick($event): void {

        this._stream.next(new DataTablePage($event));

    }

    public setPage(pageable: Pageable<T>) {

        this.page = new Page();
        this.page.count = pageable.totalElements || 0;
        this.page.limit = pageable.pageable.pageSize;
        this.page.totalPages = Math.ceil(this.page.count.valueOf() / this.page.limit.valueOf());
        // this.page.offset = Numbers.getNumber(pageable.pageable.pageSize / pageable.pageable.offset);
        this.page.offset = pageable.pageable.pageNumber;
        this.rows = pageable.content;

        if (this.page.count === 0) {

            this.messages.emptyMessage = 'No data';

        }

    }

    public onSelect({ selected }) {

        // console.log('Select Event', selected, this);

    }

    public onActivate(event) {

        if (event.type === 'click') {

            this._clicks.next(event.row);

        }

    }

    public onSortClick(e: any): void {

        this.sort.emit(e);

    }

}

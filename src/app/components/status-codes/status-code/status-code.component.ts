import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusCode } from '../../../models/status-code';

@Component({
    selector: 'app-status-code',
    templateUrl: './status-code.component.html',
    styleUrls: ['./status-code.component.scss']
})
export class StatusCodeComponent implements OnInit {

    @Input() statusCode: StatusCode;
    @Output() onDescriptionClickEvent: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onDescriptionClick(description: string) {
        this.onDescriptionClickEvent.emit(description);
    }
}

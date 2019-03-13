import { Component, OnInit } from '@angular/core';
import { StatusCode } from '../../models/status-code';
import { StatusCodeService } from '../../services/status-code/status-code.service';

@Component({
    selector: 'app-status-codes',
    templateUrl: './status-codes.component.html',
    styleUrls: ['./status-codes.component.scss']
})
export class StatusCodesComponent implements OnInit {

    statusCodes: StatusCode[];
    statusCodeChosen: StatusCode;
    descriptionChosen: string;

    constructor(private statusCodeService: StatusCodeService) {
    }

    ngOnInit() {
        this.statusCodes = this.statusCodeService.getStatusCodes();
        this.statusCodeChosen = this.statusCodes[0];
    }

    onStatusCodeNameClick(statusCode: StatusCode) {
        this.statusCodeChosen = statusCode;
    }

    onStatusCodeDescriptionClick(description: string) {
        this.descriptionChosen = description;
    }
}

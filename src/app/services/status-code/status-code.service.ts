import { Injectable } from '@angular/core';
import { StatusCode } from '../../models/status-code';
import { STATUS_CODES } from '../../mocks/status-codes-mock';

@Injectable({
    providedIn: 'root'
})
export class StatusCodeService {

    constructor() {
    }

    getStatusCodes(): StatusCode[] {
        const statusCodes = STATUS_CODES as StatusCode[];
        statusCodes.push(null);
        return statusCodes;
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-seat',
    template: `
        <div class="formgrid grid">
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ประเภทการติดต่อ</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ประเภทลูกหนี้</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-dropdown
                        inputId="dropdown"
                        [autoDisplayFirst]="true"
                        [options]="cardType"
                        [(ngModel)]="selectedCardType"
                    ></p-dropdown>
                    <label for="dropdown">ประเภทบัตร</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">เลขที่รหัส</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">หน่วยงานที่ออกบัตร</label>
                </span>
            </div>
            <div
                class="field hidden md:block col-12 md:col-4 mb-4 md:mb-5"
            ></div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-calendar
                        inputId="calendar"
                        [(ngModel)]="value5"
                    ></p-calendar>
                    <label for="calendar">วันที่ออกบัตร</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-calendar
                        inputId="calendar"
                        [(ngModel)]="value5"
                    ></p-calendar>
                    <label for="calendar">วันที่บัตรหมดอายุ</label>
                </span>
            </div>

            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">เลขที่ประจำตัวผู้เสียภาษี</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-calendar
                        inputId="calendar"
                        [(ngModel)]="value5"
                    ></p-calendar>
                    <label for="calendar">วันเกิด</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-dropdown
                        inputId="dropdown"
                        [autoDisplayFirst]="true"
                        [options]="genderTH"
                        [(ngModel)]="selectedGenderTH"
                    ></p-dropdown>
                    <label for="dropdown">เพศ</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-5">
                <span class="p-float-label">
                    <p-dropdown
                        inputId="dropdown"
                        [autoDisplayFirst]="true"
                        [options]="mStatus"
                        [(ngModel)]="selectedMStatus"
                    ></p-dropdown>
                    <label for="dropdown">สถานภาพสมรส</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">สัญชาติ</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">เชื้อชาติ</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 mb-4 md:mb-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ถิ่นที่อยู่</label>
                </span>
            </div>
        </div>
    `,
})
export class SeatComponent {
    genderTH: string[] = [];
    genderEN: string[] = [];
    cardType: string[] = [];
    mStatus: string[] = [];
    selectedGenderTH?: string;
    selectedGenderEN?: string;
    selectedCardType?: string;
    selectedMStatus?: string;
    value5: any;
    constructor() {
        this.genderTH = ['นาย', 'นาง', 'นางสาว'];
        this.genderEN = ['Mr.', 'Ms.', 'Mrs.'];
        this.cardType = ['บัตรประจำตัวประชาชน', 'ใบขับขี่', 'หนังสือเดินทาง'];
        this.mStatus = ['โสด', 'สมรส', 'แยกกันอยู่'];
    }
}

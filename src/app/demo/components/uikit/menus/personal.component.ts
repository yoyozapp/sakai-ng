import { Component } from '@angular/core';

@Component({
    selector: 'app-personal',
    template: `
        <div class="formgrid grid">
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">รหัสอ้างอิง</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ชื่อบัญชีอ้างอิง</label>
                </span>
            </div>
            <div
                class="field hidden md:block col-12 md:col-4 my-4 md:my-3"
            ></div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <p-dropdown
                        inputId="dropdown"
                        [autoDisplayFirst]="true"
                        [options]="genderTH"
                        [(ngModel)]="selectedGenderTH"
                    ></p-dropdown>
                    <label for="dropdown">คำนำหน้าชื่อ (TH)</label>
                </span>
            </div>
            <div
                class="field hidden md:block col-12 md:col-8 my-4 md:my-3"
            ></div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ชื่อ (TH)</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">นามสกุล (TH)</label>
                </span>
            </div>
            <div
                class="field hidden md:block col-12 md:col-4 my-4 md:my-3"
            ></div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <p-dropdown
                        inputId="dropdown"
                        [autoDisplayFirst]="true"
                        [options]="genderEN"
                        [(ngModel)]="selectedGenderEN"
                    ></p-dropdown>
                    <label for="dropdown">คำนำหน้าชื่อ (EN)</label>
                </span>
            </div>
            <div
                class="field hidden md:block col-12 md:col-8 my-4 md:my-3"
            ></div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ชื่อ (EN)</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">ชื่อกลาง (EN)</label>
                </span>
            </div>
            <div class="field col-12 md:col-4 my-4 md:my-3">
                <span class="p-float-label">
                    <input type="text" id="inputtext" pInputText />
                    <label for="inputtext">นามสกุล (EN)</label>
                </span>
            </div>
        </div>
    `,
})
export class PersonalComponent {
    genderTH: string[] = [];
    genderEN: string[] = [];
    selectedGenderTH?: string;
    selectedGenderEN?: string;
    constructor() {
        this.genderTH = ['นาย', 'นาง', 'นางสาว'];
        this.genderEN = ['Mr.', 'Ms.', 'Mrs.'];
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-payment',
    template: `
        <p-table [value]="address" styleClass="p-datatable-striped">
            <ng-template pTemplate="header">
                <tr class="head">
                    <th style="text-align: center;">ลำดับ</th>
                    <th>ประเภทที่อยู่</th>
                    <th>ทึ่อยู่</th>
                    <th style="text-align: center;">เบอร์โทรศัพท์</th>
                    <th></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-address>
                <tr>
                    <td style="text-align: center;">{{ address.position }}</td>
                    <td>{{ address.addressType }}</td>
                    <td>{{ address.addresss }}</td>
                    <td style="text-align: center;">{{ address.telno }}</td>
                    <td>..</td>
                </tr>
            </ng-template>
        </p-table>
    `,
    styles: [
        `
            .head {
                th {
                    background: #52636f;
                    color: #fff;
                    font-weight: 400;
                }
            }
        `,
    ],
})
export class PaymentComponent {
    address: any[] = [
        {
            position: 1,
            addressType: 'บัตรประชาชน',
            addresss:
                '17/4 หมู่ 5 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400',
            telno: '123-456-5678',
            empty: '',
        },
        {
            position: 2,
            addressType: 'บัตรประชาชน',
            addresss:
                '17/4 หมู่ 5 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400',
            telno: '123-456-5678',
            empty: '',
        },
        {
            position: 3,
            addressType: 'บัตรประชาชน',
            addresss:
                '17/4 หมู่ 5 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400',
            telno: '123-456-5678',
            empty: '',
        },
        {
            position: 4,
            addressType: 'บัตรประชาชน',
            addresss:
                '17/4 หมู่ 5 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400',
            telno: '123-456-5678',
            empty: '',
        },
        {
            position: 5,
            addressType: 'บัตรประชาชน',
            addresss:
                '17/4 หมู่ 5 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400',
            telno: '123-456-5678',
            empty: '',
        },
    ];
}

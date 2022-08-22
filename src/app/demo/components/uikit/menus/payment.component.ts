import { Component } from '@angular/core';

@Component({
    selector: 'app-payment',
    template: `
        <p-table [value]="address" styleClass="p-datatable-striped">
            <ng-template pTemplate="header">
                <tr>
                    <th>ลำดับ</th>
                    <th>ประเภทที่อยู่</th>
                    <th>ทึ่อยู่</th>
                    <th>เบอร์โทรศัพท์</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-address>
                <tr>
                    <td>{{ address.position }}</td>
                    <td>{{ address.addressType }}</td>
                    <td>{{ address.addresss }}</td>
                    <td>{{ address.telno }}</td>
                    <td>..</td>
                </tr>
            </ng-template>
        </p-table>
    `,
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

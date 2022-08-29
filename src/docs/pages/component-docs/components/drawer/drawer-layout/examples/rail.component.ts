import { Component } from '@angular/core';

export const RAIL = `<blui-drawer-layout variant="rail">
    <blui-drawer blui-drawer [open]="true">
        <blui-drawer-body>
            <blui-drawer-nav-group>
                <blui-drawer-nav-item title="Dashboard">
                    <mat-icon blui-icon>dashboard</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Locations">                    
                    <mat-icon blui-icon>place</mat-icon>
                </blui-drawer-nav-item>
                <blui-drawer-nav-item title="Legal">            
                    <mat-icon blui-icon>gavel</mat-icon>
                </blui-drawer-nav-item>
            </blui-drawer-nav-group>
        </blui-drawer-body>
    </blui-drawer>
    <div blui-content style="padding: 1rem">
        App Content Here.
    </div>
</blui-drawer-layout>
`;

@Component({
    selector: 'app-rail-drawer-layout-demo',
    template: RAIL,
    styles: [
        `
            :host {
                display: flex;
                width: 100%;
            }
        `,
    ],
})
export class RailVariantExampleComponent {}

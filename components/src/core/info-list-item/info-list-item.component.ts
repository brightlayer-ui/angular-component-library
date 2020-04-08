import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'pxb-info-list-item',
    template: `
        <mat-list-item
            class="pxb-root"
            [class.pxb-wrap]="wrapSubtitle || wrapTitle"
            [class.pxb-dense]="dense"
            [class.pxb-status]="statusColor"
            [style.borderLeftColor]="statusColor"
        >
            <div mat-list-icon class="pxb-icon" [class.pxb-hide-padding]="hidePadding">
                <ng-content select="[icon]"></ng-content>
            </div>
            <div class="pxb-left-component">
                <ng-content select="[left-component]"></ng-content>
            </div>
            <div class="mat-body-1 pxb-title" matLine [class.pxb-wrap]="wrapTitle">{{ title }}</div>
            <div class="mat-body-2 pxb-subtitle" matLine [class.pxb-wrap]="wrapSubtitle">{{ subtitle }}</div>
            <pxb-spacer flex="1"></pxb-spacer>
            <div class="pxb-right-component">
                <mat-icon *ngIf="chevron">chevron_right</mat-icon>
                <ng-content *ngIf="!chevron" select="[right-component]"></ng-content>
            </div>
        </mat-list-item>
        <mat-divider *ngIf="divider" class="pxb-divider"
                     [class.pxb-partial-divider]="divider === 'partial'">
        </mat-divider>
    `,
    styleUrls: ['./info-list-item.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class InfoListItemComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() hidePadding = false;
    @Input() dense = false;
    @Input() statusColor: string;
    @Input() chevron: boolean;
    @Input() wrapTitle: boolean;
    @Input() wrapSubtitle: boolean;
    @Input() divider: DividerType;
}

type DividerType = 'full' | 'partial' | undefined;

import { Component } from '@angular/core';
import { BASIC } from './examples/basic.component';
import { COMPLEX } from './examples/complex.component';

@Component({
    selector: 'app-list-item-tag-doc',
    template: `
        <app-component-doc-scaffold mdFileName="ListItemTag.md">
            <div examples>
                <div class="mat-headline">Basic Example</div>

                <div class="api-docs-example-wrapper">
                    <app-basic-list-item-tag-demo></app-basic-list-item-tag-demo>
                </div>

                <pre>
                    <code [innerHTML]="BASIC | language: 'html' | markdown"></code>
                </pre>

                <div class="mat-headline" style="margin-top: 64px">Complex Example</div>
                <div class="api-docs-example-wrapper">
                    <app-complex-list-item-tag-demo></app-complex-list-item-tag-demo>
                </div>
                <button mat-stroked-button color="primary" style="width: 150px" (click)="toggleShowCodeButton()">
                    {{ showComplexExampleCode ? 'Hide' : 'Show' }} Code
                </button>

                <ng-container *ngIf="showComplexExampleCode">
                    <pre data-line="6-16" class="language-html">
                        <code [innerHTML]="COMPLEX | language: 'html' | markdown"></code>
                    </pre>
                </ng-container>
            </div>
            <div playground>
                <blui-list-item-tag [label]="label"></blui-list-item-tag>
            </div>
            <div knobs>
                <app-text-knob label="label" [(value)]="label"></app-text-knob>
            </div>
        </app-component-doc-scaffold>
    `,
    styleUrls: ['./list-item-tag-doc.component.scss'],
})
export class ListItemTagDocComponent {
    label = 'label';
    BASIC = BASIC;
    COMPLEX = COMPLEX;

    showComplexExampleCode = false;

    ngAfterViewInit(): void {
        //@ts-ignore
        window.Prism.highlightAll();
        window.dispatchEvent(new Event('resize'));

        addEventListener('resize', (event) => {
            //@ts-ignore
            window.Prism.highlightAll();
        });
    }

    toggleShowCodeButton(): void {
        this.showComplexExampleCode = !this.showComplexExampleCode;
        setTimeout(() => {
            console.log('doing resize');
            //@ts-ignore
            window.Prism.highlightAll();
            window.dispatchEvent(new Event('resize'));
            window.dispatchEvent(new Event('resize'));
        });
    }
}

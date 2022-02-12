import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


// import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
    selector: 'app-doc-viewer',
    templateUrl: './doc-viewer.component.html',
    styleUrls: ['./doc-viewer.component.scss']
})

export class DocViewerComponent {
    public pdfSource = '';
    public pdfBase64Source = '';
    public pdfFileName = '';
    public previewContentType = '';
    public pdfIsLoading = true;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private dialogRef: MatDialogRef<DocViewerComponent>
    ) {
        //pdfDefaultOptions.assetsFolder = '/dist/assets';
        this.pdfFileName = data.pdfFileName;
        this.previewContentType = data.previewContentType;
        this.pdfSource = data.pdfSource;
        //this.pdfBase64Source = data.pdfBase64Source;
        this.pdfIsLoading = !(!(this.previewContentType === 'application/pdf') && !this.isImage());

        console.log(this.pdfFileName, data.previewContentType, this.pdfSource, this.pdfIsLoading);
    }

    // ngOnInit() {
    // }

    public onDocLoadComplete(): void {
        if (this.pdfIsLoading) {
            this.pdfIsLoading = false;
        }
    }

    public isImage(): boolean {
        return this.previewContentType === 'image/jpeg'
            || this.previewContentType === 'image/jpg'
            || this.previewContentType === 'image/png'
            || this.previewContentType === 'image/gif'
            || this.previewContentType === 'image/tiff';
    }

    close(): void {
        console.log('Wotking!!!!!');
        this.dialogRef.close();
    }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h1 mat-dialog-title>Confirmação</h1>
    <div mat-dialog-content>Você realmente deseja excluir este item??</div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Não</button>
      <button mat-button (click)="onYesClick()" cdkFocusInitial>Sim</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';

@Component({
  selector: 'app-feedback-adm',
  templateUrl: './feedback-adm.component.html',
  styleUrls: ['./feedback-adm.component.css']
})
export class FeedbackAdmComponent implements AfterViewInit {

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private router: Router,
    private feedbackService: FeedbackService,
    private snackBar: MatSnackBar
  ) {}
  
  feedBackDataSource = new MatTableDataSource<Feedback>();
  maismenos: string = '../../../assets/image/Mais.png';
  isExpanded: boolean[] = [];

  ngAfterViewInit() {
    this.buscarFeedBack();
  }

  buscarFeedBack(): void {
    this.feedbackService.buscarFeedBack().subscribe(
      (feedbacks) => {
        this.feedBackDataSource.data = feedbacks;
        this.isExpanded = new Array(feedbacks.length).fill(false);
      },
      (error) => {
        console.error('Erro ao buscar feedbacks:', error);
        this.snackBar.open('Erro ao buscar feedbacks', 'Fechar', {
          duration: 3000,
        });
      }
    );
  }

  AbrirFeed(index: number) {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(
    private feedbackService: FeedbackService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  valorNota: number = 0;
  imagemEstrela1: string = '../../../assets/image/EstrelaVazia.png';
  imagemEstrela2: string = '../../../assets/image/EstrelaVazia.png';
  imagemEstrela3: string = '../../../assets/image/EstrelaVazia.png';
  imagemEstrela4: string = '../../../assets/image/EstrelaVazia.png';
  imagemEstrela5: string = '../../../assets/image/EstrelaVazia.png';

  feedback: Feedback = {
    id: 0,
    nome: "",
    texto: "",
    nota: 0
  }

  criarFeedback() {
    this.feedback.nome = this.feedback.nome?.trim();
    this.feedback.texto = this.feedback.texto?.trim();
    
    this.feedback.nota = this.valorNota;

    if (this.feedback.texto !== "") {
      if(this.feedback.nome=="")
        this.feedback.nome="Anonimo"
      this.feedbackService.inserirFeedBack(this.feedback).subscribe(
        response => {
          this.snackBar.open("Feedback criado com sucesso!", "OK!");
          this.feedback = {
            id: 0,
            nome: "",
            texto: "",
            nota: 0
          }
          this.avaliarNota(0)
        
        },
        error => {
          console.log(error);
          this.snackBar.open("Erro ao criar feedback!", "OK!");
        }
      );
    } else {
      this.snackBar.open("O texto está vazio!", "OK!");
    }
  }

  avaliarNota(nota: number){
    if(nota === 1 && nota != this.valorNota){
      this.imagemEstrela1 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaVazia.png';
      this.valorNota = nota;
    } else if(nota === 2 && nota != this.valorNota){
      this.imagemEstrela1 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaVazia.png';
      this.valorNota = nota;
    } else if(nota === 3 && nota != this.valorNota){
      this.imagemEstrela1 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaVazia.png';
      this.valorNota = nota;
    } else if(nota === 4 && nota != this.valorNota){
      this.imagemEstrela1 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaVazia.png';
      this.valorNota = nota;
    } else if(nota === 5 && nota != this.valorNota){
      this.imagemEstrela1 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaCheia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaCheia.png';
      this.valorNota = nota;
    } else{
      this.imagemEstrela1 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela2 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela3 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela4 = '../../../assets/image/EstrelaVazia.png';
      this.imagemEstrela5 = '../../../assets/image/EstrelaVazia.png';
      this.valorNota = 0;
    }
  }
}

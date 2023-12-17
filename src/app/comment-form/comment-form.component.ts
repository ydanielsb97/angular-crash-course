import { Component } from '@angular/core';
import { IMessage, MessagesService } from '../services/messages-service.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent {

  name = ""
  email = ""
  comment = ""
  messages: Array<IMessage> = []

  constructor(
    private messagesService: MessagesService
  ){
    this.messages = this.messagesService.getAllMessages()
  }

  submitHandler(): void {
    this.messagesService.insert({
      name: this.name,
      email: this.email,
      comment: this.comment
    })

    this.cleanData()
  }

  cleanData() {
    this.name = ""
    this.email = ""
    this.comment = ""
  }

  deleteMessage(index: number) {
    this.messagesService.delete(index)
  }
}

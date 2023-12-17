import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessage } from '../services/messages-service.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent {

  @Input()
  message!: IMessage

  @Input()
  index!: number

  @Output()
  delete: EventEmitter<number> = new EventEmitter()

  handlerClickDelete() {
   this.delete.emit(this.index);
  }
}

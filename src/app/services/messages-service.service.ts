import { Injectable } from '@angular/core';

export interface IMessage {
  name: string
  email: string
  comment: string
}

const initialData = [
  {
    name: "Yeison Serrano",
    email: "ydanielsb97@gmail.com",
    comment: "Comment test"
  },
  {
    name: "Daniel",
    email: "daniel@gmail.com",
    comment: "Comment test"
  },
]

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Array<IMessage> = []
  
  constructor() { 
    this.init()
  }

  private init() {
    initialData.forEach(msg => {
      this.insert(msg);
    })
  }

  insert(message: IMessage){
    this.messages.push(message)
  }

  getAllMessages(){
    return this.messages
  }

  delete(index: number) {
    this.messages.splice(index, 1)
  }
}

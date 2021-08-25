import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room:Room = new Room();
  submited:boolean = false;

  constructor(
    private roomService:RoomService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  newRoom():void{
    this.submited=false;
    this.room = new Room();
  }

  save():void{
    this.roomService.createRoom(this.room).subscribe(
      data=>{
        console.log(data);
        this.gotoList();
      },
      err=>{
        console.error(err);
        this.gotoList();
      }
    );
    this.room = new Room();
    
  }

  onSubmit():void{
    this.submited = true;
    this.save();
  }

  gotoList():void{
    this.router.navigate(['/rooms']);
  }
}

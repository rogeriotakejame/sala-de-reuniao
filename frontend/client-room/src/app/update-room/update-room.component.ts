import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id:number;
  room:Room;
  submitted:boolean = false;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private roomService:RoomService
  ) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoom(this.id).subscribe(
      data=>{
        console.log(data);
        this.room = data;
      },
      err => console.error(err)
    );
  }

  updateRoom(){
    this.roomService.updateRoom(this.id, this.room).subscribe(
      data => {
        console.log(data);
        this.gotoList();
      },
      err => {
        console.error(err);
        this.gotoList();
      }
    );
    this.room = new Room();
    
  }

  onSubmit(){
    this.updateRoom();
  }

  gotoList(){
    this.router.navigate(['/rooms']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommSeriveService } from '../../Service/comm-serive.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {

 
  constructor(private CommSeriveService : CommSeriveService) { }

  ngOnInit() {
  
   this.CommSeriveService.getJSON().subscribe(data => {
          
    });
  
  }
  

}

import { Component, OnInit } from '@angular/core';
import { CommSeriveService } from '../../Service/comm-serive.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
 
 TopperMark:any;
 
  constructor(private CommSeriveService : CommSeriveService) { }
  
  ngOnInit() {
  
   this.CommSeriveService.getJSON().subscribe(data => {

          this.table=data.sort(function(a, b){

          	 let textA = a.name.toUpperCase();
             let textB = b.name.toUpperCase();
           return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    
}); 
 for(let i=0 ;i<this.table.length;i++){
     this.table[i].totelMarks= this.table[i].marks.Maths+this.table[i].marks.English+this.table[i].marks.Science;
     this.table[i].Status=(this.table[i].marks.Maths<20 || this.table[i].marks.English<20||this.table[i].marks.Science<20)?'Fail':'Pass'
          	
   }
   this.TopperMark =this.table.reduce(function(prev, current) {
      let prevData=prev.totelMarks;
      let currentData=current.totelMarks;
      return (prevData > currentData) ? prevData : currentData
    
}) //returns object
 });
  
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.sass']
})
export class UploadImageComponent implements OnInit {

  constructor() { }
  name="shreyas";
  fileToUpload:any;
  imageUrl:any;
  ngOnInit(): void {
  }
  handleFileInput(file:FileList){
    console.log(file);
    this.fileToUpload=file.item(0);

    //show image preview
    let reader=new FileReader();
    reader.onload=(event:any)=>{
      
      this.imageUrl=event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSComponent } from 'src/app/modal-s/modal-s.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.sass']
})
export class UploadImageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  name = "shreyas";
  fileToUpload: any;
  imageUrl: any;
  ngOnInit(): void {
  }
  handleFileInput(file: FileList) {
    console.log(file);
    this.fileToUpload = file.item(0);

    //show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {

      this.imageUrl = event.target.result;


    }
    reader.readAsDataURL(this.fileToUpload);
    const modalRef = this.modalService.open(ModalSComponent, {
      // scrollable: true,
      // windowClass: 'customClass',
      // keyboard: false,
      // backdrop: 'static'
    });
    modalRef.result.then(
      result => {
        console.log(result);
      },
      reason => { }
    );
  }
}


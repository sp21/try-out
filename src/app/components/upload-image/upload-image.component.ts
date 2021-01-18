import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalSComponent } from 'src/app/modal-s/modal-s.component';
import { ModalConfig } from '../config/modal-config';
import { DraggableModalComponent } from '../draggable-modal/draggable-modal.component';

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

  }
  modalOptions: NgbModalOptions = ModalConfig;
  modalRef: any;
  submitForm(form: NgForm) {
    if (form.value.Email === 'shreyas') {
      console.log('Success');
      this.modalRef = this.modalService.open(DraggableModalComponent, this.modalOptions);
      this.modalRef.componentInstance.title = 'Drag Me!';
      this.modalRef.componentInstance.message = 'Try dragging this modal around using the modal header!';
      this.modalRef.componentInstance.onSubmitSubject
        .subscribe((res: boolean) => {
          console.log(res);
        });
    }
  }
}


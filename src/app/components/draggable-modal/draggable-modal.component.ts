import { Component, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-draggable-modal',
  templateUrl: './draggable-modal.component.html',
  styleUrls: ['./draggable-modal.component.sass']
})
export class DraggableModalComponent implements OnInit {
  @Output() onSubmitSubject: Subject<boolean> = new Subject<boolean>();

  title: string = '';
  message: string = '';


  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    $(document).ready(function () {
      let modalContent: any = $('.modal-content');
      let modalHeader = $('.modal-header');
      modalHeader.addClass('cursor-all-scroll');
      modalContent.draggable({
        handle: '.modal-header'
      });
    });
  }

  close() {
    this.activeModal.close();
    this.onSubmitSubject.next(true);
  }
} 

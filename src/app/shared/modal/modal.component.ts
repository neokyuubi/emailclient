import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit 
{

  @Output() dismiss = new EventEmitter();

  constructor(private elem:ElementRef) { }

  ngOnInit(): void 
  {
    document.body.appendChild(this.elem.nativeElement);
  }

  ngOnDestroy()
  {
    this.elem.nativeElement.remove();
  }

  onDismissClick()
  {
    this.dismiss.emit();
  }

}

import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  emitValue(term: string) {
    if (!term) return;

    this.onValue.emit(term);
  }
}

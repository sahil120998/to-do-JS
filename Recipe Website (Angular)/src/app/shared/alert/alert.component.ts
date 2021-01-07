import { Component, EventEmitter, Input, Output } from '@angular/core'
@Component({
    selector: 'app-alert',
    templateUrl : './alert.component.html',
    styleUrls: ['./alert.component.css']

})

export class AlertComponent{

 @Output() close = new EventEmitter<void>()
 @Input() Message : string    

 onClose(){
    this.close.emit()
 }
}
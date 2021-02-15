import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
/*import { SuscribeService } from '../../services/suscribe.service';*/


@Component({
  selector: 'app-leave-message',
  templateUrl: './leave-message.component.html',
  styleUrls: ['./leave-message.component.scss']
})

export class LeaveMessageComponent implements OnInit {

  enviarMensajeForm: FormGroup;
  constructor(
    private fb: FormBuilder/*,
    private suscribeService: SuscribeService*/
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.enviarMensajeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, [Validators.required]],
      mensaje: [null, [Validators.required]]
    });
  }

  get email(): AbstractControl {
    return this.enviarMensajeForm.get('email');
  }

  get name(): AbstractControl {
    return this.enviarMensajeForm.get('name');
  }

  get telefono(): AbstractControl {
    return this.enviarMensajeForm.get('telefono');
  }

  get mensaje(): AbstractControl {
    return this.enviarMensajeForm.get('mensaje');
  }

  toEnviarMensaje(enviarMensajeForm): void {
    return null;
    // this.suscribeService.save(suscribeForm.get('email').value);

    // if (suscribeForm.valid) {
    //  this.suscribeService.save(suscribeForm.get('email').value);
    // }
  }

}

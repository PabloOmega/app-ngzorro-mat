import { Component } from '@angular/core';
import { Register, RegistersService } from '../../services/registers/registers.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NzTableModule,
    CommonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  registers: Register[] = [];

  constructor(private registersService: RegistersService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.getRegisters();
  }

  getRegisters(): void {
    this.registersService.getRegisters()
      .subscribe(registers => this.registers = registers);
  }

  onSendEmail(register: Register): void {
    this.emailService.sendEmail({
      name: register.nickname,
      email: register.email,
      htmlContent: `<h1>Hola ${register.nickname}</h1>`
    }).subscribe(response => console.log(response));
  }

}

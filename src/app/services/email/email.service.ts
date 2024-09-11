import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'https://api.brevo.com/v3/smtp/email';
  private apiKey = '';

  constructor(private http: HttpClient) {}

  sendEmail({name, email, htmlContent} : {name: string, email: string, htmlContent: string}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'api-key': this.apiKey,
    });

    const body = {
      sender: {
        name: 'Pablo',
        email: 'no-reply@clases.com',
      },
      to: [
        {
          email,
          name,
        },
      ],
      htmlContent,
      subject: 'Hola',
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}

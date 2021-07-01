import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CobiroClient {
  private host: string;

  public constructor(
    private readonly httpClient: HttpClient,
  ) {
    this.host = 'https://hub.cobiro.com';
  }

  public login(email: string, password: string): Observable<any> {
    const payload = {
      data: {
        type: 'login',
          attributes: { email, password }
      }
    };

    return this.httpClient.post(this.host + '/v1/login', payload);
  }
}

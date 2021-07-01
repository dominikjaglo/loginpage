import {Component, OnDestroy} from '@angular/core';
import {LoginPayloadModel} from '../../presentation/form/login-payload.model';
import {CobiroClient} from '../../../services/cobiro-client.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss']
})
export class SmartFormComponent implements OnDestroy {
  private loginSubscription: Subscription | null = null;

  public constructor(private cobiroClient: CobiroClient) {
  }


  public sendRequest($event: LoginPayloadModel): void {
    const { email, password } = $event;

    this.loginSubscription = this.cobiroClient
      .login(email, password)
      .subscribe(_ => console.log(_));
  }

  public ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}

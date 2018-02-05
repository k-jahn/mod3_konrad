import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class Unsubscribe implements OnDestroy {

  private subscriptions: Subscription[] = [];

  protected addSubscription(...subs: Subscription[]) {
    for (const sub of subs) {
      this.subscriptions.push(sub);
    }
  }

  constructor(
  ) { }

  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
}

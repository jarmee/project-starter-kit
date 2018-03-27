import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectValue } from '../shared/reducers/hello-world.reducer';
import { Observable } from 'rxjs/Observable';
import { HelloWorldLoad } from '../shared/actions/hello-world.actions';
import { AppState } from '../shared/reducers';

@Component({
  selector: 'jarmee-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  value$: Observable<string>;

  constructor(private store: Store<AppState>) { 
    this.value$ = this.store.pipe(select(selectValue));
  }

  ngOnInit() {
    this.store.dispatch(new HelloWorldLoad());
  }

}

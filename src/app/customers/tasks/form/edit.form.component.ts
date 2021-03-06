/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Component} from '@angular/core';
import {TaskDefinition} from '../../../services/customer/domain/task-definition.model';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import * as fromCustomer from '../../store/index';
import {CustomersStore} from '../../store/index';
import {UPDATE} from '../../store/tasks/task.actions';

@Component({
  templateUrl: './edit.form.component.html'
})
export class TaskEditFormComponent {

  task$: Observable<TaskDefinition>;

  constructor(private router: Router, private route: ActivatedRoute, private store: CustomersStore) {
    this.task$ = this.store.select(fromCustomer.getSelectedTask);
  }

  onSave(task: TaskDefinition): void {
    this.store.dispatch({ type: UPDATE, payload: {
      task,
      activatedRoute: this.route
    }});
  }

  onCancel(): void {
    this.navigateAway();
  }

  navigateAway(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { CrudService } from '../../api/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends CrudService {

  override endpoint?: string = 'demo/tasks';
  override model?: any = Task;

}
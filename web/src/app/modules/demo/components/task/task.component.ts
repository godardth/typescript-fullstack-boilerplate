import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';
import { faSave, faTrash, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'demo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  response?: any
  task?: Task;
  tasks: Array<Task> = [];

  faSave = faSave;
  faTrash = faTrash;
  faArrowsRotate = faArrowsRotate;

  createForm?: FormGroup;
  get nameCreateErrors() { return this.createForm?.get('name')?.errors; }

  editForm?: FormGroup;
  get nameEditErrors() { return this.createForm?.get('name')?.errors; }

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getAll();
    let newtask = new Task();
    this.createForm = new FormGroup({
      name: new FormControl(newtask.name, [Validators.required])
    });
  }

  getOne(id?: number) {
    if (!id) return;
    this.tasksService.get(id).subscribe((res: any) => {
      this.task = new Task(res);
      this.editForm = new FormGroup({
        name: new FormControl(this.task.name, [Validators.required])
      });
      this.response = JSON.stringify(res);
    });
  }

  getAll() {
    this.tasksService.get().subscribe((res: any) => {
      this.tasks = res.map((x: any) => new Task(x));
      this.response = JSON.stringify(res);
    });
  }

  delete(id?: number) {
    if (!id) return;
    this.tasksService.delete(id).subscribe((res: any) => {
      this.response = JSON.stringify(res);
    });
  }

  save() {
    if (!this.editForm || !this.task) return;
    let name = this.editForm.get('name')?.value;
    if (!name) return;
    this.task.name = name;
    this.tasksService.save(this.task).subscribe((res: any) => this.response = JSON.stringify(res));
  }

  create() {
    if (!this.createForm) return;
    let name = this.createForm.get('name')?.value;
    if (!name) return;
    let task = new Task({ 
      name: name 
    });
    this.tasksService.save(task).subscribe((res: any) => this.response = JSON.stringify(res));
  }

}

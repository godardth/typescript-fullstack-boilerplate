import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/env/env.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

	endpoint?: string;
	model?: any;

  constructor(
    private http: HttpClient,
    private envService: EnvService
  ) { }

  get(id?: number) {
		if (id) return this.http.get(`${this.url}${id}/`, { headers: this.headers });
		return this.http.get(`${this.url}`, { headers: this.headers });
  }

  save(obj: any) {
    return this.http.post(`${this.url}`, JSON.stringify(obj), { headers: this.headers });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}${id}/`);
  }

  create(obj: any) {
    let payload = JSON.stringify(obj);
    return this.http.post(this.url, payload, { headers: this.headers });
  }

  private get url(): string {
    return `${this.envService.backendUrl}${this.endpoint}/`;
  }

	private get headers(): HttpHeaders {
		return new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		});
	}


}
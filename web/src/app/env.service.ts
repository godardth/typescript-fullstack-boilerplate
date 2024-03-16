import { Injectable } from '@angular/core';
import { env } from './env';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  getBaseUrl() {
    return `${env.backend_prot}://${env.backend_host}${env.backend_port?':':''}${env.backend_port}/`;
  }

}
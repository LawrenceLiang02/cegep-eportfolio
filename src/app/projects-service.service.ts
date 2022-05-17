import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllProjects(): Observable<project[]>{
    // return this.http.get<order[]>(`${this.apiServerUrl}/orders`)
    return this.http.get<project[]>(`${this.apiServerUrl}getAll`)
}
}

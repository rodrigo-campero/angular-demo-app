import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Client[]>('client');
  }

  getById(id: String) {
    return this.http.get<Client>(`client/${id}`);
  }

  addOrUpdate(client: Client) {
    if (!client._id) {
      return this.http.post('client', JSON.stringify(client));
    }
    return this.http.put(`client/${client._id}`, JSON.stringify(client));
  }
}

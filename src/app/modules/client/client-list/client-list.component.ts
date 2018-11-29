import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  dataSource: any;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    return this.clientService.getAll().subscribe(data => {
      this.dataSource = data.map(function (ele) {
        return {
          id: ele._id,
          fullName: `${ele.firstName} ${ele.lastName}`,
          email: ele.email,
          age: ele.age
        };
      });
      console.log(this.dataSource);
    });
  }
}

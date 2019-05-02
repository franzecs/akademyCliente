import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ ]
})
export class TopoComponent implements OnInit {

  showMenu = false;

  constructor(
    public auth: AuthService
    ) { }

  ngOnInit() {
  }

  public sair() {
    this.auth.logout();
  }

  controlNav() {
    if (this.showMenu === false) {
      document.getElementById('mySidenav').style.width = '250px';
      this.showMenu = true;
      setTimeout(() => {
        document.getElementById('mySidenav').style.width = '0';
        this.showMenu = false;
      }, 3000);
    } else {
      document.getElementById('mySidenav').style.width = '0';
      this.showMenu = false;
    }
  }
}

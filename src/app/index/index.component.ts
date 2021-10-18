import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/shared/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  

  constructor(private api: ApiService,private router: Router) { }

  onLogout(){
    this.api.logoutUser();
    console.log("sjcbaubg")
    
     localStorage.removeItem('user')
   
     this.router.navigate([''])
     
     
    }

  ngOnInit(): void {
  }

}

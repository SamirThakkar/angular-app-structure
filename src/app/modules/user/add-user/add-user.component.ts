import {Component} from '@angular/core';
import {User} from '../shared/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'user-add',
  templateUrl: './add-user.component.html',
  providers: [UserService]
})

export class AddUserComponent {
  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  userdata: User = new User('','', '', '', true);
  listOfRoles: any;


  ngOnInit() {
    alert("Add user component called...");
    // this.listOfRoles = this.route.snapshot.data.listOfRoles.data;
    // this.userdata.Role = this.listOfRoles[0]._id;
  }

  AddUser(userForm) {
    if (userForm.form.valid) {
      this.userService.addUserService(this.userdata).then(res => {
        console.log(res);
        if (res == 'User already exists') {

          this.router.navigate(['user/add']);
        }
        else {

          this.router.navigate(['user/list']);
        }
      });
    }
  }
}


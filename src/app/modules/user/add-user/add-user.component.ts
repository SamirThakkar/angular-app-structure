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


  // ngOnInit() {
  //   console.log("Add user component called...");
  //   alert("Add user component called...");
  //   // this.listOfRoles = this.route.snapshot.data.listOfRoles.data;
  //   // this.userdata.Role = this.listOfRoles[0]._id;
  //
  //
  //
  // }

  ngOnInit(): void {
    // this.heroForm = new FormGroup({
    //   'name': new FormControl(this.hero.name, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   'alterEgo': new FormControl(this.hero.alterEgo),
    //   'power': new FormControl(this.hero.power, Validators.required)
    // });
    //
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }


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


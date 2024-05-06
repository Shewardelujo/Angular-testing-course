import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';

//every time we want to test a service or a component, we must create a testing module and test them inside, which is why we are using beforeEach here

//beforeEach is a block that will be executed before every single test in this file... If we need stuff in every single test, it makes sense to put it in beforeEach

describe('UsersService', () => {
  //create a property which will be a reference to our UsersService
  let usersService: UsersService;
  beforeEach(() => {
    // configureTestingModule creates a testing module (which is like a simple ng module, where you can use things like import, providers etc)
    TestBed.configureTestingModule({
      //we want to register the service in our module
      providers: [UsersService],
    });
    usersService = TestBed.inject(UsersService);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy(); //this tests if the service is available here
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInterface = {
        id: '3',
        name: 'foo',
      };
      usersService.addUser(user);
      expect(usersService.users).toEqual([
        {
          id: '3',
          name: 'foo',
        },
      ]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users = [
        {
          id: '3',
          name: 'foo',
        },
      ];
      usersService.removeUser('3');
      expect(usersService.users).toEqual([]);
    });
  });
});

import { UserInterface } from '../types/user.interface';
import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

//every time we want to test a service or a component, we must create a testing module and test them inside, which is why we are using beforeEach here

//beforeEach is a block that will be executed before every single test in this file... If we need stuff in every single test, it makes sense to put it in beforeEach

//with mock, we are using something else for our values

describe('UsersService', () => {
  //create a property which will be a reference to our UsersService
  let usersService: UsersService;

  //mocking utilsService
  const utilsServiceMock = {
    pluck: jest.fn(),
  };

  beforeEach(() => {
    // configureTestingModule creates a testing module (which is like a simple ng module, where you can use things like import, providers etc)
    TestBed.configureTestingModule({
      //we want to register the service in our module
      providers: [
        UsersService,
        {
          //mocking utilsService
          provide: UtilsService,
          useValue: utilsServiceMock,
        },
      ],
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

  describe('getUsernames', () => {
    it('should get usernames', () => {
      //when you mock a service, it returns nothing... so, the pluck function does nothing and returns undefined and the test fail... However, we can provide a mock value, so that instead of returning undefined, it returns the stated value, irregardless of the value passed to it... see this in A) below
      utilsServiceMock.pluck.mockReturnValue(['fooloo']); //A) fooloo will always be returned here
      expect(usersService.getUsernames()).toEqual(['foo']);
    });
  });
});

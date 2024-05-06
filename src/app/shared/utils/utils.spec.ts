import { pluck, range } from './utils';

describe('utils', () => {
  describe('range', () => {
    //we create a test by using it
    //the first arg  is the name of the test and then the second arg is the expectation
    it('returns correct range from 1 to 5', () => {
      expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it('returns correct range from 41 to 44', () => {
      expect(range(41, 44)).toEqual([41, 42, 43]);
    });
  });
  describe('pluck', () => {
    it('returns correct result', () => {
      const data = [
        {
          id: '1',
          name: 'foo',
        },
        {
          id: '2',
          name: 'bar',
        },
        {
          id: '3',
          name: 'baz',
        },
      ];
      expect(pluck(data, 'id')).toEqual(['1', '2', '3']);
    });
  });
});

//so basically... 'Describe' is the section WHILE 'it' is the test
//describe can be nexted in each other to cater for different utilities that is to be tested

import { Injectable } from '@angular/core';

@Injectable()
export class Service {
    getOrders(): Order[] {
        return orders;
    }
}

export class Order {
    ID: number;
    UserType: string;
    UserName: string;
    Title: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: number;
    Zip: number;
}

const orders: Order[] = [{
  'ID': 1,
  'UserType': 'Admin',
  'UserName': 'admin',
  'Title': 'admin',
  'FirstName': 'Parth',
  'LastName': 'Solanki',
  'Email': 'admin@pddn.com',
  'Phone': 9199066641,
  'Zip': 390006
}, {
  'ID': 2,
  'UserType': 'Admin',
  'UserName': 'Shreya',
  'Title': 'Shreya',
  'FirstName': 'Shreya',
  'LastName': 'Shreya',
  'Email': 'Shreya@pddn.com',
  'Phone': 91956866641,
  'Zip': 39002
}, {
    'ID': 3,
    'UserType': 'BDManager',
    'UserName': 'Naresh',
    'Title': 'bmf',
    'FirstName': 'Naresh',
    'LastName': 'Vyas',
    'Email': 'vyasnaresh@pddn.com',
    'Phone': 9199066641,
    'Zip': 94538
}, {
    'ID': 4,
    'UserType': 'Admin',
    'UserName': 'Parth',
    'Title': 'Admin',
    'FirstName': 'Parth',
    'LastName': 'Solanki',
    'Email': 'parth@gmail.com',
    'Phone': 9199066641,
    'Zip': 390006
}, {
    'ID': 5,
    'UserType': 'Admin',
    'UserName': 'TBP',
    'Title': 'admin',
    'FirstName': 'Tanmay',
    'LastName': 'Patel',
    'Email': 'tbpn@pddn.com',
    'Phone': 7146666741,
    'Zip': 52823
}];


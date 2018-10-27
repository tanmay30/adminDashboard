import { Injectable } from '@angular/core';

@Injectable()
export class CandidateService {
  getCandidateData(): CandidateDB[] {
    return candidateData;
  }
}

export class CandidateDB {
    ID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: number;
    Zip: number;
    UploadBy: string;
    AvailableDate: string;
    Job: number;
    Activity: number;
}

const candidateData: CandidateDB[] = [{
  'ID': 1,
  'FirstName': 'mc',
  'LastName': 'zhu',
  'Email': 'managecandidate@pddn.com',
  'Phone': 7268956202,
  'Zip': 95391,
  'UploadBy': 'admin',
  'AvailableDate': '27-09-2018 07:29',
  'Job': 1,
  'Activity': 0
}, {
  'ID': 2,
  'FirstName': 'Madhavi',
  'LastName': 'Macwan',
  'Email': 'madhvdfs@Yahoo.com',
  'Phone': 7148956000,
  'Zip': 91341,
  'UploadBy': 'admin',
  'AvailableDate': '17-09-2016 01:20',
  'Job': 2,
  'Activity': 1
}, {
  'ID': 3,
  'FirstName': 'Jeff',
  'LastName': 'Lee',
  'Email': 'jefflee@gmail.com',
  'Phone': 7148981945,
  'Zip': 90389,
  'UploadBy': 'admin',
  'AvailableDate': '15-10-2017 02:20',
  'Job': 4,
  'Activity': 1
}, {
  'ID': 4,
  'FirstName': 'Patel',
  'LastName': 'Sam',
  'Email': 'pSam@gmail.com',
  'Phone': 7891002030,
  'Zip': 99634,
  'UploadBy': 'admin',
  'AvailableDate': '18-12-2016 12:00',
  'Job': 1,
  'Activity': 0
}, {
  'ID': 5,
  'FirstName': 'Desai',
  'LastName': 'Arth',
  'Email': 'Adesao@gmail.com',
  'Phone': 6148956989,
  'Zip': 45001,
  'UploadBy': 'admin',
  'AvailableDate': '03-06-2016 10:20',
  'Job': 4,
  'Activity': 1
}];

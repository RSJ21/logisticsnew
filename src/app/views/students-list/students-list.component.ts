import { Component, OnInit } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http/http.services';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
  ]
})
export class StudentsListComponent implements OnInit {
  isLoaded: boolean;
  studentsList: any = [];
  location: any;
  role: any;
  studentsListFinal: any;
  teacherId: any;
  isRightSectionOpen: Boolean;
  count: any;
  institutionList: any = [];
  parameters: any = [];
  selectedInstitution: any;
  isAdmin: any;
  source:any;
  dest: any;
  startDate: any;
  endDate : any;
  weight : any;
  firstTime: any = 1;
  educationSearch: any;
  entSearch: any;
  rSearch: any;
  infraSearch: any;
  locationTags: any = [];
  progressStage1: boolean;
  progressStage2: boolean;
  progressStage3: boolean;
  progressStage4: boolean;
  flag: boolean;
  trucks: any;
  istruck : any;
  isroute : any;
  ischart : any;
  isltl : any;
  studentQuestions: { 'question_description': string; 'question_answer': string; }[];
  suggestions: any;
  constructor(private service: HttpService, private route: ActivatedRoute, private router: Router, private _notificationsService: NotificationsService) {

    this.isAdmin = localStorage.getItem("isAdmin");

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.role = params['role'];
      this.teacherId = params['id'];
      this.count = 0;

      this.role = params['role'];
      this.teacherId = params['id'];
      this.count = 0;

      this.source = params['src'];
      this.dest = params['dst'];
      this.weight = JSON.parse(params['load']);
      this.startDate = JSON.parse(params['disp']);
      this.endDate = JSON.parse(params['del']);
      this.location=[{lat:51.678418 ,lng:7.809007},{lat:	52.520008,lng:	13.404954}];
      this.istruck=false;
      this.isroute=true;
      this.ischart=false;
      this.isltl=false;
        this.getAllStudents();

    });

    /*     this.firstTime = localStorage.getItem('firstTime');
        if(this.firstTime ==1){
          this.getDataBasedOnAll();
         // this.firstTime == 2;
          localStorage.setItem('firstTime', '2');
        }else if(this.firstTime == 2){
          this.getDataBasedOnMultiple();
          localStorage.setItem('firstTime', '3');
        }
       else{
          this.getDataBasedOnMultiple2();
          localStorage.setItem('firstTime', '1');
        } */

    this.getRealInstitutionData();

  }

  getRealInstitutionData() {

    let toSend = {};
    let locationTmp = 'india';
    console.log(this.locationTags);
    
    if(this.locationTags != null && this.locationTags[0]!= null && this.locationTags != '[]'){
      locationTmp = this.locationTags[0]['displayValue'];
    }
    toSend = {
      "education": this.educationSearch,
      "research": this.rSearch,
      "infra": this.infraSearch,
      "entre": this.entSearch
    };
    toSend['location'] = locationTmp;
    console.log(locationTmp);
    
    this.service.post('/rest/university/all', JSON.stringify(toSend)).then((data) => {
      this.institutionList = data;
      this.isLoaded = true;
    }).catch(error => {

    });
  }


  getAllStudents() {
    // this.service.get('/student/all').then((data)=>{
    //   console.log(data);
    this.studentsList = [
      {
        'student_gender': 'M',
        'student_first_name': 'John',
        'student_last_name': 'Bruno',
        'student_regno': '1001',
        'student_department': 'CSE',
        'student_email': 'jbruno@gmail.com',
        'prediction': '73.3'
      },
      {
        'student_gender': 'F',
        'student_first_name': 'Natalie',
        'student_last_name': 'Mars',
        'student_regno': '1002',
        'student_department': 'IT',
        'student_email': 'nmars@gmail.com',
        'prediction': '82.1'
      }
    ];
    
      this.trucks=[{'type':'three wheeler','r1':'750','r2':'350','r3':'25','r4':'20','r5':'15'},
      {'type':'tata ace','r1':1000,'r2':'500','r3':'44','r4':'28','r5':'22'},
      {'type':'ashok leyland','r1':'1000','r2':'600','r3':'49','r4':'39','r5':'22'},
      {'type':'eicher 14','r1':'3500','r2':'1100','r3':'73','r4':'20','r5':'15'},
      {'type':'eicher 17','r1':'5000','r2':'1650','r3':'25','r4':'20','r5':'15'},
      {'type':'eicher 19','r1':'6000','r2':'2000','r3':'88','r4':'55','r5':'40'}
    ]
      this.institutionList = [{
        'dist' : '2024km',
        'rank': '1',
        'code' : '36355',
       'latitude': 12.95798,
       'longitude': 77.401207,
       'time' : '3days',
       'parameters': [
         {
           'name':'Hyderabad',
           'value': '50'
         },
         {
           'name':'Nagpur',
           'value': '20'
         },
         {
           'name':'Agra',
           'value': '80'
         },
         
       ]
     },
     {
       'dist' : '1900km',
       'rank': '2',
       'code': '26520',
       'latitude': 26.633243,
       'longitude': 77.21879,
       'time' : '4days',
       'parameters': [
         {
           'name':'Vijayawada',
           'value': '40'
         },
         {
           'name':'Balharshah',
           'value': '60'
         },
         {
           'name':'Gwalior',
           'value': '70'
         },
        
       ]
     },
     
     {
      'dist' : '250km',
       'rank': '3',
       'code': '28792',
       'latitude': 25.30958,
       'longitude': 83.00569,
       'time' : '4days',
       'parameters': [
         {
           'name':'Nellore',
           'value': '20'
         },
         {
           'name':'Nagpur',
           'value': '80'
         },
         {
           'name':'Agra',
           'value': '60'
         },
         {
          'name':'Delhi',
          'value': '60'
        }
         
       ]
     },
         
   ]; 

    this.studentsListFinal = this.studentsList/* .slice(0,20) */;
    this.location = [{ lat: 11.059821, lng: 78.387451 }];
    // this.calculatePrediction(this.studentsListFinal);

   

    // }).catch((error)=>{

    // });
  }
  openProfile(student) {
    // [routerLink] = "['/app/profile', {'role':role,'id': student.student_id}]"
    this.router.navigate(['app/profile', this.role, student.student_id, this.teacherId]);
  }

  truckview(){
    this.istruck=true;
    this.isroute=false;
    this.ischart=false;
    this.isltl=false;
  }
  routeview(){
    this.istruck=false;
    this.isroute=true;
    this.ischart=false;
    this.isltl=false;
    this.router.navigate(['app/students-list',this.source, this.dest, this.endDate,this.startDate,this.weight]);
  }
  chartview(){
    this.ischart=true;
    this.isroute=false;
    this.istruck=false;
    this.isltl=false;
  }
  ltl(){
    this.isltl=true;
    this.ischart=false;
    this.isroute=false;
    this.istruck=false;
  }
  calculatePrediction(studentsListFinal) {
    console.log('called 1');

    studentsListFinal.forEach((student, index) => {
      let toSend = {};
      toSend = `{    
        "M1": [`+ student.student_marks[0].subject_marks + `],
          "M2": [`+ student.student_marks[1].subject_marks + `],
          "M3": [`+ student.student_marks[2].subject_marks + `],
          "M4": [`+ student.student_marks[3].subject_marks + `],
          "sQ1": [0.0],
          "sQ2": [0.0],
          "sQ3": [0.0],
          "sQ4": [0.0],
          "sQ5": [1.0],
          "TQ1": [1.0],
          "TQ2": [0.0],
          "TQ3": [0.0],
          "TQ4": [0.0],
          "TQ5": [0.0]
          }`;

      /*  toSend["M1"] = [];
       toSend["M1"].push(student.student_marks[0].subject_marks); 
       toSend["M2"] = [];
       toSend["M2"].push(student.student_marks[1].subject_marks); 
       toSend["M3"] = [];
       toSend["M3"].push(student.student_marks[2].subject_marks); 
       toSend["M4"] = [];
       toSend["M4"].push(student.student_marks[3].subject_marks); 
        */
      // toSend["M4"].push(student.student_marks[3].subject_marks); 
      console.log('called loop', student);
      this.predictCall(student, toSend);

    });
  }

  predictCall(student, toSend) {
    this.service.postLocal('http://localhost:5001/predict', (toSend)).then((data) => {
      student['prediction'] = data['prediction'].toLowerCase();
      console.log('called 8');
    }).catch((error) => {

    });
  }


  openDetailsOnRight(institution) {

    this.isRightSectionOpen = true;
    this.location = [{ lat: Number(institution.latitude), lng: Number(institution.longitude) }];

    //  this.parameters = institution['parameters'];

    this.selectedInstitution = null;
    setTimeout(() => {
      this.selectedInstitution = institution;
    }, 0);


  }

  closeDetailsOnRight() {
    this.isRightSectionOpen = false;
    this.selectedInstitution = null;
  }

  uploadFile() {
    this._notificationsService.success("In Progress", "Uploading file in background progress");

    setTimeout(() => {
      this._notificationsService.success("Success", "File uploaded successfully!!");
    }, 5000);
  }

  getDataBasedOnAll() {
    this.service.get('/rest/university/all').then((data) => {

      this.institutionList = data;

    }).catch((error) => {

    });

  }

  getDataBasedOnMultiple() {
    this.service.get('/rest/university/all').then((data) => {

      this.institutionList = data;

    }).catch((error) => {

    });

  }

  getDataBasedOnMultiple2() {
    this.service.get('/rest/university/research').then((data) => {

      this.institutionList = data;

    }).catch((error) => {

    });

  }

  roundOff10(value) {

    return Math.round(value * 10);
  }
  roundOff100(value) {

    return Math.round(value * 100);
  }

  showPrediction() {
    this.progressStage1 = true;
    this.progressStage2 = false;
    this.progressStage3 = false;
    this.progressStage4 = false;
    setTimeout(() => {
      this.progressStage1 = false;
      this.progressStage2 = true;
      this.progressStage3 = false;
      this.progressStage4 = false;
    }, 2000);
    setTimeout(() => {
      this.progressStage1 = false;
      this.progressStage2 = false;
      this.progressStage3 = true;
      this.progressStage4 = false;
    }, 4000);
    setTimeout(() => {
      this.progressStage1 = false;
      this.progressStage2 = false;
      this.progressStage3 = false;
      this.progressStage4 = true;
      this.flag = true;
    }, 6000);

    // this.service.get('/student/questions/' + this.studentId).then((data) => {
    // console.log(data);

    let data = [{
      'question_description': 'Did you choose this course with passion?',
      'question_answer': 'yes'
    }, {
      'question_description': 'Did you choose this course with passion?',
      'question_answer': 'no'
    }, {
      'question_description': 'Did you choose this course with passion?',
      'question_answer': 'no'
    }, {
      'question_description': 'Did you choose this course with passion?',
      'question_answer': 'yes'
    }, {
      'question_description': 'Did you choose this course with passion?',
      'question_answer': 'yes'
    }];
    this.studentQuestions = data;
    let testData = `{
        "Q1": [`+ (data[0]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q2": [`+ (data[1]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q3": [`+ (data[2]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q4": [`+ (data[3]['question_answer'] == 'yes' ? 1.0 : 0.0) + `],
        "Q5": [`+ (data[4]['question_answer'] == 'yes' ? 1.0 : 0.0) + `]  
    }`;
    // this.predictCall(testData);

    // }).catch((error) => {

    // });

  }

  generateValues() {
    let score1, score2, score3, score4;
    //this.studentQuestions[0]['question_answer'] !=null
    /* this.studentQuestions.forEach(question => {
      if(question['question_answer'] != null){
       score1 = question['question_answer'] == 'yes' ? 1 * 85 : 0;
      }

      if(question['question_answer'] != null){
        score2 = question['question_answer'] == 'yes' ? 1 * 64 : 0;
       }
      
    }); */
    score1 = this.studentQuestions[0]['question_answer'] == 'yes' ? 1 * 65 : 0;
    score2 = this.studentQuestions[1]['question_answer'] == 'yes' ? 1 * 25 : (score1 / 2 + 10);
    score3 = this.studentQuestions[2]['question_answer'] == 'yes' ? (1 * 6 + score1) : 0;
    score4 = this.studentQuestions[3]['question_answer'] == 'yes' ? ((1 * 2) + score3) : 0;
    this.suggestions = JSON.parse(`[{
      "field" : "Creativity",
      "score" : "`+ score1 + `"
    },{
      "field" : "Coding concepts",
      "score" : "`+ score3 + `"
    },{
      "field" : "Participation",
      "score" : "`+ score2 + `"
    },{
      "field" : "Communication",
      "score" : "`+ score4 + `"
    }]`);
  }
}


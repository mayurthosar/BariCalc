import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { AboutPage } from '../about/about';
import { RecommendationPage } from '../recommendation/recommendation';

/**
 * Generated class for the MainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mains',
  templateUrl: 'mains.html',
})
export class MainsPage {
  height;weight;banage;age;cmCon;bmi1;bmi2;bmi;neck;w;h;snoring;tiredfeel;asleepfeel;chokingfeel;pulmonaryHyper;hypo;thrombolism;canalfeel;radioYes;
  isActive: boolean = false;
  isEnable: boolean =false;
  isChecked: boolean =false;
  isTension: boolean =false;
  gen: string;
  gen1: string;
  success: string;
  hypertension : string;
  highBp : string; 
  IBW : number;
  count:number=0;
  sum : number;
  heightConIbw : number;
  wUnit: string = "kg";
  hUnit: string = "meter";
  todo = {};
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  navigate()
  {
     this.w = this.todo['weigh'];
     this.h = this.todo['heigh'];
     this.age = this.todo['age'];
     this.calculateBmi();
     this.convertHeight();
     this.countParams();
     console.log("mains counter"+this.count+"neck"+this.neck);
     this.navCtrl.push(RecommendationPage,{
     'height':this.todo['heigh'],
     'age':this.todo['age'],
     'weight':this.todo['weigh'],
     'gender':this.gen,
     'hUnit':this.hUnit,
     'wUnit':this.wUnit,
     'neckCircum':this.neck,
     'sumCounter':this.count,
     'conHeight':this.height,
     'conWeight':this.weight,
     'conIbwHeight':this.heightConIbw,
     'hypertension':this.hypertension,
     
    });
  }
  logForm() {
    console.log(this.todo);
    let h1 = this.todo['heigh'];
    let w1 = this.todo['weigh'];
    let age1 = this.todo['age'];
    
    let todoSize = this.getSize(this.todo);
    let genSize = this.getSize(this.gen);
    let tensSize = this.getSize(this.hypertension);
    if(todoSize != 3 || genSize == 0 || tensSize == 0)
    {
      console.log("todoSize "+todoSize+"genSize "+genSize+"tensSize "+tensSize);
      console.log("its blank");
      document.getElementById('ifHeighErr').style.display = 'inline';
    }
    else
    {
      document.getElementById('ifHeighErr').style.display = 'none';
      this.navigate();
    }
    }
    getSize(obj)
    {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
    }
  calculateBmi()
  {
    this.weight = this.todo['weigh'];
    this.height = this.todo['heigh'];
    
    if(this.hUnit=='' || this.hUnit=='meter')
    {
      // let decimalOnly1 = parseFloat(Math.abs(this.height).toString().split('.')[1]);
      // let meterSize = this.getSize(decimalOnly1);
      // if(meterSize <= 1)
      // {
      //   let add = decimalOnly1 + "0"; 
      //   decimalOnly1 = add;
      //   //console.log();
      // }
      this.height = this.height;
    }
    if(this.hUnit=='inches')
    {
      let inch = 0.0254;
      this.height=this.height * inch;
      this.height= this.height.toFixed(2);
    }
    if(this.hUnit=='cm')
    {
      this.height=this.height / 100;
    }
    if(this.hUnit =='ftinch')
    {
      let decimalOnly = parseFloat(Math.abs(this.height).toString().split('.')[1]);
      let size = this.getSize(decimalOnly);
      if(size==0)
      {
      decimalOnly = 0;
      }
      let integerOnly = parseInt(this.height);
      let inches = integerOnly * 12;
      inches = inches + decimalOnly;
      this.cmCon = inches * 2.54;
      this.cmCon=parseInt(this.cmCon);
      this.height=this.cmCon / 100;
      console.log ("in to cmCon"+this.height);
    }
    if(this.wUnit=='stones')
    {
      let st = 6.35029;
      this.weight=this.weight * st;
      this.weight = parseInt(this.weight);
    }
    if(this.wUnit==''|| this.wUnit=='kg')
    {
      this.weight = this.weight;
    }
    if(this.wUnit=='pounds')
    {
     //let pounds = 0.45359237;
     this.weight = this.weight / 2.2046;
     this.weight = Math.round(this.weight);
    }
     this.calculateBmi1();
  }
  calculateBmi1()
  {
    console.log("conHeight"+this.height);
    this.bmi1 = this.weight/this.height;
    this.bmi2 = this.bmi1/this.height;
    this.bmi= this.bmi2.toFixed(1);
    
    //this.BmiClassification();
    console.log("bmi"+this.bmi);
  }
 convertHeight()
 {
   if(this.hUnit=='meter' || this.hUnit=='')
  {
  this.heightConIbw=this.h * 100;
  }if(this.hUnit=='inches')
  {
  let inch1 = 2.54;
  this.heightConIbw = this.h * inch1;
  this.heightConIbw = Math.round(this.heightConIbw);
  }
if(this.hUnit=='cm')
{
  
  this.heightConIbw = this.h;
}
if(this.hUnit=='ftinch')
{
let decimalOnly = parseFloat(Math.abs(this.h).toString().split('.')[1]);
let size = this.getSize(decimalOnly);
if(size==0)
{
  decimalOnly = 0;
  console.log ("decimalOnly1=0"+size);
}
let integerOnly = parseInt(this.h);
let inches = integerOnly * 12;
inches = inches + decimalOnly;
this.heightConIbw = inches * 2.54;
this.heightConIbw = Math.round(this.heightConIbw);
console.log ("in to cm"+this.heightConIbw);
}

}
countParams()
{ 
  
  if(this.snoring=='yesSnore')
  {
    this.count=this.count+1;
  }
  if(this.chokingfeel=='yesChoking')
  {
    this.count=this.count+1;
  }
  if(this.tiredfeel=='yesTired')
  {
    this.count=this.count+1;
  }
  //OS-MRS
  let osMrsCount = 0;
  if(this.pulmonaryHyper=='yesPulHyper')
  {
    if(osMrsCount != 1)
    {
      osMrsCount=+1;
      this.count=this.count+1;
    }
   
  }
  if(this.hypo=='yesHypo')
  {
    if(osMrsCount != 1)
    {
      osMrsCount=+1;
      this.count=this.count+1;
    }
  }
  if(this.canalfeel=='yesCanal')
  {
    if(osMrsCount != 1)
    {
      osMrsCount=+1;
      this.count=this.count+1;
    }
    //this.count=this.count+1;
  }
  if(this.thrombolism=='yesThrombo')
  {
    if(osMrsCount != 1)
    {
      osMrsCount=+1;
      this.count=this.count+1;
    }
  }

  //return this.count;
}
  user(gender)
  {
    this.gen=gender;
    this.gen1 = gender;
  }
  hypert(tension)
  {
    this.hypertension = tension;
    
    if(tension=='yesHyper')
    {
      this.calculateBmi();
      this.neck = "Enter neck circum. in cm";
      document.getElementById('ifYes').style.display = 'block';
    }else{
       document.getElementById('ifYes').style.display = 'none';
    }
    

  }
heightUnit(u)
{
this.hUnit = u;
}
weigh(wu)
{
this.wUnit = wu;
}
//STOP-BANG
snore(params)
{
  this.snoring=params;

}
tired(params)
{
  this.tiredfeel=params;
}
asleep(params)
{
  this.asleepfeel = params;
}
choking(params)
{
  this.chokingfeel = params;
}

//OS-MRS
pulHyper(params)
{
  this.pulmonaryHyper = params;
  
}
hypoventilation(params)
{
  this.hypo= params;

}
canal(params)
{
  this.canalfeel =params;
  
}
thrombo(params)
{
  this.thrombolism = params;
  
}
  load()
  {
  this.navCtrl.push(TermsPage);
  }

  about()
  {
  this.navCtrl.push(AboutPage);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainsPage');
  }

}

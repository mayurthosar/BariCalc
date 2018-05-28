import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recommendation',
  templateUrl: 'recommendation.html',
})
export class RecommendationPage {
  isBmiShown: boolean =false;
  isIbwShown: boolean =false;
  isLbwShown: boolean =false;
  isAbwShown: boolean =false;
  isRiskShown: boolean = false;
  weight: number;
  height: number;
  age: number;
  bmi:number;
  conWeight:number;
  conHeight:number;
  count : number = 0;
  counter : number = 0;
  classi: string;
  gender: string;
  hypertens : string;
  riskMortality : string;
  bmi1;bmi2;IBW;imageSrc;conIbwHeight;ABW;LBW;IBW1;ABW1;LBW1;vecuronium;lignocaine;paracetamol;bminclass;thiopental;bupivacain;rocuronium;propofol;fentanyl;morphine;atracurium;suxamethonium;
  weigh;weigh1;weigh2;heigh;a;riskFactorClass;neckCircum;wUnit;hUnit;
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.weight=this.navParams.get('weight');
    this.height=this.navParams.get('height');
    this.hUnit=this.navParams.get('hUnit');
    this.wUnit=this.navParams.get('wUnit');
    this.neckCircum=this.navParams.get('neckCircum');
    this.conHeight=this.navParams.get('conHeight');
    this.conWeight=this.navParams.get('conWeight');
    this.conIbwHeight=this.navParams.get('conIbwHeight');
    this.hypertens=this.navParams.get('hypertension');
    this.count = this.navParams.get('sumCounter');
    this.age=this.navParams.get('age');
    this.gender=this.navParams.get('gender');
    if(this.wUnit!="kg")
    {
      this.weigh=this.weight+" "+this.wUnit;
      this.weigh1 = "("+this.conWeight+" kg)";
      this.weigh2 = this.weigh1;
    }else{
      this.weigh=this.weight+" "+this.wUnit;
      this.weigh1 = " ";
      this.weigh2 = this.weigh;
    }
    this.heigh=this.height+" "+this.hUnit;
    this.a=this.age+" yrs";
    this.calculateBmi();
    this.calculateIbw();
    this.calculateAbw();
    this.calculateLbw();
     this.calculateLbwDosage();
     this.calculateTbwDosage();
     this.risk();
  }
  calculateBmi()
  {
    console.log("conHeight"+this.conHeight);
    this.bmi1 = this.conWeight/this.conHeight;
    this.bmi2 = this.bmi1/this.conHeight;
    this.bmi= this.bmi2.toFixed(1);
    this.BmiClassification();
    console.log("bmi"+this.bmi);
  }
  BmiClassification()
  {
    if(this.bmi< 18.5)
    {
      this.classi= "Underweight";
    }else if(this.bmi > 40.0)
    {
      this.classi = "Obese 3"
    }
    else if(35.0 < this.bmi && this.bmi<39.9)
    {
      this.classi = "Obese 2";
    }
    else if(30.0 < this.bmi && this.bmi <34.9)
    {
      this.classi = "Obese 1";
    }
    else if(25.0 < this.bmi && this.bmi <29.9)
    {
      this.classi = "Overweight";
    }
   
    else if(18.5 < this.bmi && this.bmi <24.9)
    {
      this.classi = "Normal";
    }
    this.bminclass = this.bmi+" ("+this.classi+")";
  }
  
  calculateLbwDosage()
  {
    let LBW11 = Math.round(this.LBW)
    //thiopental
    let minThio = LBW11 * 3;
    let maxThio = LBW11 * 5;
    this.thiopental = minThio+"-"+maxThio+" mg";
    console.log(minThio+"-"+maxThio+"mg");
    //propofol
    let minProp = LBW11 * 1;
    let maxProp = LBW11 * 2;
    this.propofol = minProp+"-"+maxProp+" mg";
    console.log(minProp+"-"+maxProp+"mg");
    //fentanyl
    let minFenta = LBW11 * 1;
    let maxFenta = LBW11 * 2;
    this.fentanyl = minFenta+"-"+maxFenta+" microgram";
    console.log(minFenta+"-"+maxFenta+"microgram");
    //morphine
    let minMorph = LBW11 * 0.1;
    let maxMorph = LBW11 * 0.2;
    this.morphine = Math.round(minMorph)+"-"+Math.round(maxMorph)+" mg";
    console.log(minMorph+"-"+maxMorph+"mg");
    //vecuronium
    let dosageVecuro = LBW11 * 0.1;
    this.vecuronium = Math.round(dosageVecuro);
    this.vecuronium = this.vecuronium+" mg";
    console.log(this.vecuronium);
    //paracetamol
    let minPara = LBW11 * 0.9;
    let maxPara = LBW11 * 1.2;
    minPara = Math.round(minPara);
    maxPara = Math.round(maxPara);
    this.paracetamol = minPara+"-"+maxPara+" mg";
    console.log(minPara+"-"+maxPara+"mg");
    //atracurium
    let dosageAtra = LBW11 * 0.5;
    dosageAtra = Math.round(dosageAtra);
    this.atracurium = dosageAtra+" mg";
    console.log(this.atracurium);
    //rocuronium
    let dosageRocuro = LBW11 * 0.6;
    dosageRocuro = Math.round(dosageRocuro);
    this.rocuronium = dosageRocuro+" mg";
    console.log(this.rocuronium);
    //bupivacain
    let dosageBupi = LBW11 * 2;
    this.bupivacain = dosageBupi+" mg";
    console.log(this.bupivacain);
    //lidocaine
    let dosageLigno = LBW11 * 3;
    this.lignocaine = dosageLigno+" mg";
    console.log(this.lignocaine);
  }

    calculateTbwDosage()
    {
      //suxamethonium
      let minSuxam = this.conWeight * 1;
      let maxSuxam = this.conWeight * 2;
      this.suxamethonium = minSuxam+"-"+maxSuxam+" mg";
      console.log(minSuxam+"-"+maxSuxam+"mg");
    }
  calculateIbw()
  {
    if(this.gender=='female')
    {
      this.IBW = this.conIbwHeight-105;
      this.IBW1 = this.IBW +" kg";
      console.log("IBW female"+this.IBW+"kg");
    }
    else{
      this.IBW = this.conIbwHeight-100;
      this.IBW1 = this.IBW +" kg";
      console.log("IBW male"+this.IBW);
    }
  }
  calculateAbw()
  {
      let first = this.conWeight - this.IBW
      this.ABW = this.IBW + 0.4 * first;
      this.ABW = this.ABW.toFixed(1);
      this.ABW1 = this.ABW +" kg";
      console.log("ABW"+this.ABW);
  }
  calculateLbw()
  {
    let firstStep = 9270 * this.conWeight;
    
    if(this.gender=='male')
    {
     let secondStep = 216 * this.bmi;
     let thirdStep = 6680 + secondStep;
     this.LBW = firstStep / thirdStep;
     this.LBW = this.LBW.toFixed(1);
     this.LBW1 = this.LBW + " kg";
     console.log("LBW Male"+this.LBW);
    }
    else
    {
     let secondStep = 244 * this.bmi;
     let thirdStep = 8780 + secondStep;
     this.LBW = firstStep / thirdStep;
     this.LBW = this.LBW.toFixed(1);
     this.LBW1 = this.LBW + " kg";
     console.log("LBW Female"+this.LBW);
    }
    
  }
  risk()
  {
  this.counter = this.count + this.counter;
  if(this.gender=='male')
  {
    this.counter=this.counter+1;
  }
  if(this.gender=='female' && this.neckCircum > 41)
  {
    this.counter = this.counter +1;
  }
  if(this.gender=='male' && this.neckCircum > 43)
  {
    this.counter = this.counter +1;
  }
  if(this.bmi>50)
  {
    this.counter=this.counter+1;
  }
  if(this.age>45)
  {
    this.counter=this.counter+1;
  }
  if(this.hypertens=='yesHyper')
  {
    this.counter=this.counter+1;
  
  }
  console.log("Counter"+this.counter);
  this.riskClass();
  
}
riskClass()
{
  if(this.counter >= 0  &&  this.counter<=1)
  {
    //alert("0.2% to 0.3%");
    this.riskMortality = "0.2% - 0.3%";
    this.riskFactorClass = "Class A";
  }else if(this.counter >= 2 && this.counter <=3)
  {
    //alert("1.1% to 1.5%")
    this.riskMortality = "1.1% to 1.5%";
    this.riskFactorClass = "Class B";
  }
  else if(this.counter>=4 )
  {
   //alert("2.4% to 3.0%");
   this.riskMortality = "2.4% to 3.0%";
   this.riskFactorClass = "Class C";
  }

}


  about()
  {
  this.navCtrl.push(AboutPage);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommendationPage');
  }

}

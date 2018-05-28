webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_terms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommendation_recommendation__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MainsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainsPage = (function () {
    function MainsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isActive = false;
        this.isEnable = false;
        this.isChecked = false;
        this.isTension = false;
        this.count = 0;
        this.wUnit = "kg";
        this.hUnit = "meter";
        this.todo = {};
    }
    MainsPage.prototype.navigate = function () {
        this.w = this.todo['weigh'];
        this.h = this.todo['heigh'];
        this.age = this.todo['age'];
        this.calculateBmi();
        this.convertHeight();
        this.countParams();
        console.log("mains counter" + this.count + "neck" + this.neck);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recommendation_recommendation__["a" /* RecommendationPage */], {
            'height': this.todo['heigh'],
            'age': this.todo['age'],
            'weight': this.todo['weigh'],
            'gender': this.gen,
            'hUnit': this.hUnit,
            'wUnit': this.wUnit,
            'neckCircum': this.neck,
            'sumCounter': this.count,
            'conHeight': this.height,
            'conWeight': this.weight,
            'conIbwHeight': this.heightConIbw,
            'hypertension': this.hypertension,
        });
    };
    MainsPage.prototype.logForm = function () {
        console.log(this.todo);
        var h1 = this.todo['heigh'];
        var w1 = this.todo['weigh'];
        var age1 = this.todo['age'];
        var todoSize = this.getSize(this.todo);
        var genSize = this.getSize(this.gen);
        var tensSize = this.getSize(this.hypertension);
        if (todoSize != 3 || genSize == 0 || tensSize == 0) {
            console.log("todoSize " + todoSize + "genSize " + genSize + "tensSize " + tensSize);
            console.log("its blank");
            document.getElementById('ifHeighErr').style.display = 'inline';
        }
        else {
            document.getElementById('ifHeighErr').style.display = 'none';
            this.navigate();
        }
    };
    MainsPage.prototype.getSize = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    MainsPage.prototype.calculateBmi = function () {
        this.weight = this.todo['weigh'];
        this.height = this.todo['heigh'];
        if (this.hUnit == '' || this.hUnit == 'meter') {
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
        if (this.hUnit == 'inches') {
            var inch = 0.0254;
            this.height = this.height * inch;
            this.height = this.height.toFixed(2);
        }
        if (this.hUnit == 'cm') {
            this.height = this.height / 100;
        }
        if (this.hUnit == 'ftinch') {
            var decimalOnly = parseFloat(Math.abs(this.height).toString().split('.')[1]);
            var size = this.getSize(decimalOnly);
            if (size == 0) {
                decimalOnly = 0;
            }
            var integerOnly = parseInt(this.height);
            var inches = integerOnly * 12;
            inches = inches + decimalOnly;
            this.cmCon = inches * 2.54;
            this.cmCon = parseInt(this.cmCon);
            this.height = this.cmCon / 100;
            console.log("in to cmCon" + this.height);
        }
        if (this.wUnit == 'stones') {
            var st = 6.35029;
            this.weight = this.weight * st;
            this.weight = parseInt(this.weight);
        }
        if (this.wUnit == '' || this.wUnit == 'kg') {
            this.weight = this.weight;
        }
        if (this.wUnit == 'pounds') {
            //let pounds = 0.45359237;
            this.weight = this.weight / 2.2046;
            this.weight = Math.round(this.weight);
        }
        this.calculateBmi1();
    };
    MainsPage.prototype.calculateBmi1 = function () {
        console.log("conHeight" + this.height);
        this.bmi1 = this.weight / this.height;
        this.bmi2 = this.bmi1 / this.height;
        this.bmi = this.bmi2.toFixed(1);
        //this.BmiClassification();
        console.log("bmi" + this.bmi);
    };
    MainsPage.prototype.convertHeight = function () {
        if (this.hUnit == 'meter' || this.hUnit == '') {
            this.heightConIbw = this.h * 100;
        }
        if (this.hUnit == 'inches') {
            var inch1 = 2.54;
            this.heightConIbw = this.h * inch1;
            this.heightConIbw = Math.round(this.heightConIbw);
        }
        if (this.hUnit == 'cm') {
            this.heightConIbw = this.h;
        }
        if (this.hUnit == 'ftinch') {
            var decimalOnly = parseFloat(Math.abs(this.h).toString().split('.')[1]);
            var size = this.getSize(decimalOnly);
            if (size == 0) {
                decimalOnly = 0;
                console.log("decimalOnly1=0" + size);
            }
            var integerOnly = parseInt(this.h);
            var inches = integerOnly * 12;
            inches = inches + decimalOnly;
            this.heightConIbw = inches * 2.54;
            this.heightConIbw = Math.round(this.heightConIbw);
            console.log("in to cm" + this.heightConIbw);
        }
    };
    MainsPage.prototype.countParams = function () {
        if (this.snoring == 'yesSnore') {
            this.count = this.count + 1;
        }
        if (this.chokingfeel == 'yesChoking') {
            this.count = this.count + 1;
        }
        if (this.tiredfeel == 'yesTired') {
            this.count = this.count + 1;
        }
        //OS-MRS
        var osMrsCount = 0;
        if (this.pulmonaryHyper == 'yesPulHyper') {
            if (osMrsCount != 1) {
                osMrsCount = +1;
                this.count = this.count + 1;
            }
        }
        if (this.hypo == 'yesHypo') {
            if (osMrsCount != 1) {
                osMrsCount = +1;
                this.count = this.count + 1;
            }
        }
        if (this.canalfeel == 'yesCanal') {
            if (osMrsCount != 1) {
                osMrsCount = +1;
                this.count = this.count + 1;
            }
            //this.count=this.count+1;
        }
        if (this.thrombolism == 'yesThrombo') {
            if (osMrsCount != 1) {
                osMrsCount = +1;
                this.count = this.count + 1;
            }
        }
        //return this.count;
    };
    MainsPage.prototype.user = function (gender) {
        this.gen = gender;
        this.gen1 = gender;
    };
    MainsPage.prototype.hypert = function (tension) {
        this.hypertension = tension;
        if (tension == 'yesHyper') {
            this.calculateBmi();
            this.neck = "Enter neck circum. in cm";
            document.getElementById('ifYes').style.display = 'block';
        }
        else {
            document.getElementById('ifYes').style.display = 'none';
        }
    };
    MainsPage.prototype.heightUnit = function (u) {
        this.hUnit = u;
    };
    MainsPage.prototype.weigh = function (wu) {
        this.wUnit = wu;
    };
    //STOP-BANG
    MainsPage.prototype.snore = function (params) {
        this.snoring = params;
    };
    MainsPage.prototype.tired = function (params) {
        this.tiredfeel = params;
    };
    MainsPage.prototype.asleep = function (params) {
        this.asleepfeel = params;
    };
    MainsPage.prototype.choking = function (params) {
        this.chokingfeel = params;
    };
    //OS-MRS
    MainsPage.prototype.pulHyper = function (params) {
        this.pulmonaryHyper = params;
    };
    MainsPage.prototype.hypoventilation = function (params) {
        this.hypo = params;
    };
    MainsPage.prototype.canal = function (params) {
        this.canalfeel = params;
    };
    MainsPage.prototype.thrombo = function (params) {
        this.thrombolism = params;
    };
    MainsPage.prototype.load = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terms_terms__["a" /* TermsPage */]);
    };
    MainsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    MainsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainsPage');
    };
    MainsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mains',template:/*ion-inline-start:"C:\Users\Apptroid\BariCalculator\src\pages\mains\mains.html"*/'<!--\n  Generated template for the MainsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n    <ion-title class="my-font">BariCalc</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<form  (ngSubmit)="logForm()">\n    <ion-list>\n            <ion-grid item-content no-padding>\n                        <div style="clear: left;">\n                                        <p style="float: left;" ><img src="img/icons/heightNew.png" height="55" width="55" border="1px"></p>\n                                        <ion-label class="my-label" color="about">Height:</ion-label>\n                                         <ion-row>\n                                              <ion-col>\n                                                <ion-item no-lines id="rounds" class="itemDesign" >\n                                                  <ion-input style="border-right: 1px ridge #696969 !important; width:60%" type="number" required class="my-font" placeholder="Enter Height" [(ngModel)]="todo.heigh" name="heigh"></ion-input>\n                                                   <ion-select style="width:40%" placeholder="meter" class="my-font">\n                                                    <ion-option value="cm" (ionSelect)="heightUnit(\'cm\')">centimeter</ion-option>\n                                                    <ion-option value="inches" (ionSelect)="heightUnit(\'inches\')">inches</ion-option>\n                                                    <ion-option value="meter" (ionSelect)="heightUnit(\'meter\')">meter</ion-option>\n                                                    <ion-option value="ftinch" (ionSelect)="heightUnit(\'ftinch\')">feet inches</ion-option>\n                                                    </ion-select>\n                                                </ion-item>\n                                                </ion-col>\n                                            </ion-row>\n                                        </div>\n                                    <div style="clear: left;">\n                                                <p style="float: left;" ><img src="img/icons/weightNew.png" height="55" width="55" border="1px"></p>\n                                                <ion-label class="my-label" color="about">Weight:</ion-label>\n                                                <ion-row>\n                                                  <ion-col style="padding-left: 7px !important;">\n                                                    <ion-item no-lines class="itemDesign" id="rounds"  >\n                                                      <ion-input style="border-right: 1px ridge #696969 !important; width:60%" type="number" class="my-font"  placeholder="Enter Weight" [(ngModel)]="todo.weigh" name="weigh"></ion-input>\n                                                        <ion-select style="width:40%" placeholder="kilogram" class="my-font">\n                                                          <ion-option value="kg"      (ionSelect)="weigh(\'kg\')">kilogram</ion-option>\n                                                          <ion-option value="pounds"  (ionSelect)="weigh(\'pounds\')">pounds</ion-option>\n                                                          <ion-option value="stones"  (ionSelect)="weigh(\'stones\')">stones</ion-option>\n                                                          </ion-select>\n                                                    </ion-item>\n                                                  </ion-col>\n                                                </ion-row>\n                                            </div>\n                                            <div style="clear: left;">\n                                                        <p style="float: left;" class="iconMargin"><img src="img/icons/genderNew.png" height="55" width="54" border="1px"></p>\n                                                        <ion-label class="my-label" color="about">Gender:</ion-label>\n                                                          <ion-row radio-group >\n                                                                <ion-col no-padding no-margin>\n                                                                      <ion-item no-lines class="radioBackground" style="width: 105px !important;">\n                                                                        <ion-label class="my-font" style="width: 85px !important;">Male</ion-label>\n                                                                        <ion-radio value="male" (ionSelect)="user(\'male\')"></ion-radio>\n                                                                      </ion-item>\n                                                                    </ion-col>\n                                                                    <ion-col no-padding no-margin>\n                                                                      <ion-item no-lines class="radioBackground" >\n                                                                       <ion-label class="my-font">Female</ion-label>\n                                                                        <ion-radio value="female" (ionSelect)="user(\'female\')"></ion-radio>\n                                                                      </ion-item>\n                                                                    </ion-col>\n                                                                  </ion-row>\n                                                    </div>\n                                                    <div style="clear: left;">\n                                                                <p style="float: left;"><img src="img/icons/ageNew.png" height="55" width="55" border="1px"></p>\n                                                                <ion-label class="my-label" color="about" style="margin-bottom:5px !important;">Age:</ion-label>\n                                                                <input type="number" class="my-font" name="age" id="rounded" [(ngModel)]="todo.age" placeholder="Enter Age in yrs">\n                                                            </div>\n                                                            <div style="clear: left;" >\n                                                                        <p style="float: left;"  class="iconMargin"><img src="img/icons/hypertensionNew.png" height="58" width="54" border="1px"></p>\n                                                                        <ion-label class="my-label" color="about">Has Hypertension?</ion-label>\n                                                                       \n                                                                        <ion-row radio-group class="space">\n                                                                                <ion-col no-padding no-margin>\n                                                                                      <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                                                                        <ion-label class="my-font">Yes</ion-label>\n                                                                                        <ion-radio value="yes"  (ionSelect)="hypert(\'yesHyper\')"></ion-radio>\n                                                                                      </ion-item>\n                                                                                    </ion-col>\n                                                                                    <ion-col no-padding no-margin>\n                                                                                      <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                                                                       <ion-label class="my-font">No</ion-label>\n                                                                                        <ion-radio value="no" (ionSelect)="hypert(\'noHyper\')"></ion-radio>\n                                                                                      </ion-item>\n                                                                                    </ion-col>\n                                                                                  </ion-row>\n                                            </div>\n                                    \n                        </ion-grid>\n                        \n       <div id="ifYes" style="display:none">\n                        <ion-item text-wrap no-lines style="background-color : #56ace0 !important">\n                          <ion-label class="my-font" style="margin-bottom: 0px !important">Do you want OS-MRS ?<button ion-button clear icon-only class="infoButton" type="button" tooltip="tooltip without position" arrow positionV="bottom" positionH="right" >\n                            <ion-icon name="information-circle" style="\n                            padding-left: 5px;\n                            padding-right: 5px;\n                            padding-bottom: 7px; font-size:1.7em"></ion-icon>\n                          </button></ion-label>\n                          <ion-checkbox color="calculate" (click)="isChecked = !isChecked" item-width="80px"></ion-checkbox>\n                          </ion-item>\n                          <div class="color-boxes" [ngClass]="{\'show\': isChecked}">\n                            <ion-list>\n                                    <ion-item text-wrap no-lines class="radioBackground" style="height: 38px;" >\n                                        <p class="my-font" style="color:#000"><b>1) Has previous venous thromboembolism?</b></p>\n                                    </ion-item>\n                                  <ion-row radio-group>\n                                <ion-col no-padding no-margin class="colDesign">\n                                      <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                        <ion-label class="my-font">Yes</ion-label>\n                                        <ion-radio value="yes" (ionSelect)="thrombo(\'yesThrombo\')"></ion-radio>\n                                      </ion-item>\n                                    </ion-col>\n                                    <ion-col no-padding no-margin class="colDesignRight">\n                                      <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                       <ion-label class="my-font">No</ion-label>\n                                        <ion-radio value="no" (ionSelect)="thrombo(\'noThrombo\')"></ion-radio>\n                                      </ion-item>\n                                    </ion-col>\n                                  </ion-row>\n                                  <ion-item text-wrap no-lines class="radioBackground" style="height: 38px;" >\n                                        <p class="my-font" style="color:#000"><b>2) Has vana canal filter?</b></p>\n                                  </ion-item>\n                                    <ion-row radio-group>\n                                  <ion-col no-padding no-margin class="colDesign">\n                                        <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                          <ion-label class="my-font">Yes</ion-label>\n                                          <ion-radio value="yes" (ionSelect)="canal(\'yesCanal\')"></ion-radio>\n                                        </ion-item>\n                                      </ion-col>\n                                      <ion-col no-padding no-margin>\n                                        <ion-item no-lines class="colDesignRight" style="width: 85px !important;">\n                                         <ion-label class="my-font">No</ion-label>\n                                          <ion-radio value="no" (ionSelect)="canal(\'noCanal\')"></ion-radio>\n                                        </ion-item>\n                                      </ion-col>\n                                    </ion-row>\n                                    <ion-item text-wrap no-lines class="radioBackground" style="height: 38px;">\n                                            <p class="my-font" style="color:#000"><b>3) Has hypoventilation(sleep-disordered breathing)?</b></p>\n                                          </ion-item>\n                                        <ion-row radio-group>\n                                      <ion-col class="colDesign" no-padding no-margin>\n                                            <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                              <ion-label class="my-font">Yes</ion-label>\n                                              <ion-radio value="yes" (ionSelect)="hypoventilation(\'yesHypo\')"></ion-radio>\n                                            </ion-item>\n                                          </ion-col>\n                                          <ion-col class="colDesignRight" no-padding no-margin >\n                                            <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                             <ion-label class="my-font">No</ion-label>\n                                              <ion-radio value="no" (ionSelect)="hypoventilation(\'noHypo\')"></ion-radio>\n                                            </ion-item>\n                                          </ion-col>\n                                        </ion-row>\n                                        <ion-item text-wrap no-lines class="radioBackground" style="height: 38px;">\n                                                <p class="my-font" style="color:#000"><b>4) Has pulmonary hypertension?</b></p>\n                                              </ion-item>\n                                            <ion-row radio-group>\n                                          <ion-col class="colDesign" no-padding no-margin>\n                                                <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                                  <ion-label class="my-font">Yes</ion-label>\n                                                  <ion-radio value="yes" (ionSelect)="pulHyper(\'yesPulHyper\')"></ion-radio>\n                                                </ion-item>\n                                              </ion-col>\n                                              <ion-col class="colDesignRight" no-padding no-margin>\n                                                <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                                 <ion-label class="my-font">No</ion-label>\n                                                  <ion-radio value="no" (ionSelect)="pulHyper(\'noPulHyper\')"></ion-radio>\n                                                </ion-item>\n                                              </ion-col>\n                                            </ion-row>\n                                            \n                                </ion-list>\n                            </div>\n      <ion-item text-wrap no-lines style="background-color : #56ace0 !important" class="setMarginTop">\n          <ion-label class="my-font" >Do you want STOP-BANG for Obstructive Age?</ion-label>\n          <ion-checkbox color="calculate" (click)="isActive = !isActive" item-width="80px"></ion-checkbox>\n          </ion-item>\n          <div class="color-boxes" [ngClass]="{\'show\': isActive}">\n                <ion-list>\n                        <ion-item text-wrap no-lines class="radioBackground">\n                          <ion-avatar item-start>\n                            <img src="img/icons/snoaring.png">\n                          </ion-avatar>\n                          <p class="my-font" style="color:#000"><b>Do you snore loudly(louder than talking or heard through a closed door)?</b></p>\n                        </ion-item>\n                      <ion-row radio-group>\n                    <ion-col class="colDesign">\n                          <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                            <ion-label class="my-font">Yes</ion-label>\n                            <ion-radio value="yes" (ionSelect)="snore(\'yesSnore\')"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                        <ion-col class="colDesignRight"> \n                          <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                           <ion-label class="my-font">No</ion-label>\n                            <ion-radio value="no" (ionSelect)="snore(\'noSnore\')"></ion-radio>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                      <!-- <ion-item text-wrap no-lines class="radioBackground">\n                        <ion-avatar item-start>\n                          <img src="img/icons/sleeping.png">\n                        </ion-avatar>\n                        <p class="my-font">Do you fall asleep in daytime?</p>\n                      </ion-item>\n                    <ion-row radio-group>\n                  <ion-col class="colDesign">\n                        <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                          <ion-label class="my-font">Yes</ion-label>\n                          <ion-radio value="yes" (ionSelect)="asleep(\'yesAsleep\')"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col class="colDesignRight">\n                        <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                         <ion-label class="my-font">No</ion-label>\n                          <ion-radio value="no" (ionSelect)="asleep(\'noAsleep\')"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row> -->\n                      <ion-item text-wrap no-lines class="radioBackground">\n                            <ion-avatar item-start >\n                              <img src="img/icons/sleeping.png">\n                            </ion-avatar>\n                            <p class="my-font" style="color:#000"><b>Do you often feel tired, fatigued or sleepy during the daytime?</b></p>\n                          </ion-item>\n                        <ion-row radio-group>\n                      <ion-col class="colDesign">\n                            <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                              <ion-label class="my-font" >Yes</ion-label>\n                              <ion-radio value="yes" (ionSelect)="tired(\'yesTired\')"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col class="colDesignRight">\n                            <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                             <ion-label class="my-font">No</ion-label>\n                              <ion-radio value="no" (ionSelect)="tired(\'noTired\')"></ion-radio>\n                            </ion-item>\n                          </ion-col>\n                        </ion-row>\n                     \n                            <ion-item text-wrap no-lines class="radioBackground">\n                                    <ion-avatar item-start>\n                                      <img src="img/icons/breathe.png">\n                                    </ion-avatar>\n                                    <p class="my-font" style="color:#000"><b>Has anyone observed you stop breathing or choking or gasping during your sleep?</b></p>\n                                  </ion-item>\n                                <ion-row radio-group>\n                              <ion-col class="colDesign">\n                                    <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                      <ion-label class="my-font">Yes</ion-label>\n                                      <ion-radio value="yes" (ionSelect)="choking(\'yesChoking\')"></ion-radio>\n                                    </ion-item>\n                                  </ion-col>\n                                  <ion-col class="colDesignRight">\n                                    <ion-item no-lines class="radioBackground" style="width: 85px !important;">\n                                     <ion-label class="my-font">No</ion-label>\n                                      <ion-radio value="no" (ionSelect)="choking(\'noChoking\')"></ion-radio>\n                                    </ion-item>\n                                  </ion-col>\n                                </ion-row>\n                                <ion-item text-wrap no-lines class="radioBackground" style="height: 44px;">\n                                  <ion-avatar item-start>\n                                    <img src="img/icons/hypertension.png">\n                                  </ion-avatar>\n                                  <p class="my-font" style="color:#000"><b>Are you being treated for high blood pressure?</b></p>\n                                  </ion-item>\n                                <ion-item no-lines class="radioBackground" style="padding-left: 62px;">\n                                <ion-input class="my-font" type="text" value="Yes" readonly></ion-input>\n                                </ion-item>\n                                <ion-item text-wrap no-lines class="radioBackground">\n                                  <ion-avatar item-start>\n                                    <img src="img/icons/calculator.png" >\n                                  </ion-avatar>\n                                  <ion-label class="my-font" style="color:#000"><b>BMI:</b></ion-label>\n                                  <ion-input class="my-font" type="text" [(ngModel)]="bmi" name="bmi" placeholder="" readonly></ion-input>\n                                  </ion-item>\n                                <ion-item text-wrap no-lines class="radioBackground">\n                                  <ion-avatar item-start>\n                                    <img src="img/icons/age.png">\n                                  </ion-avatar>\n                                  <ion-label class="my-font" style="color:#000"><b>Age:</b></ion-label>\n                                    <ion-input class="my-font" type="text" [(ngModel)]="todo.age" name="age" readonly></ion-input>\n                                  </ion-item>\n                               \n                                <ion-item text-wrap no-lines class="radioBackground">\n                                        <ion-avatar item-start>\n                                          <img src="img/icons/neckcircum.png">\n                                        </ion-avatar>\n                                        <p class="my-font" style="color:#000"><b>Neck Circumference?</b></p>\n                                        </ion-item>\n                                      <ion-item class="radioBackground" id="rounds" style="padding-left: 0px; margin-left: 62px;">\n                                      <ion-input class="my-font" type="number" placeholder="Enter neck circum. in cm" [(ngModel)]="neck" name="neck" ></ion-input>\n                                      </ion-item>\n                                      <ion-item text-wrap no-lines class="radioBackground">\n                                        <ion-avatar item-start>\n                                          <img src="img/icons/gender.png">\n                                        </ion-avatar>\n                                        <ion-label class="my-font" style="color:#000"><b>Gender:</b></ion-label>\n                                        <ion-input class="my-font" type="text" [(ngModel)]="gen1" name="gen1" readonly></ion-input>\n                                        </ion-item>\n                                      \n                    </ion-list>\n                </div>\n              </div>\n      </ion-list>\n      <div id="ifHeighErr" style="display:none">\n        <ion-item no-lines style="background-color:#f6f6f8 !important ; color:#000">\n            <p class="my-font">Sorry, all fields are required!</p>\n        </ion-item>\n        </div>\n<ion-item text-wrap no-lines>\n      <ion-label class="my-font" style="margin-bottom: 0px;">I agree to <button ion-button clear type="button" style="text-transform: none;" class="terms" color="terms" (click)="load()">Terms and Condition</button></ion-label>\n      <ion-checkbox color="calculate" (click)="isEnable = !isEnable"></ion-checkbox>\n</ion-item>\n  <br>\n  <div text-center class="calculate-boxes" [ngClass]="{\'enable\': isEnable}">\n        <button ion-button color ="calculate" round style="text-transform: none;" type="submit" [disabled]="!isEnable" class="my-font">Calculate & Recommend</button>\n     </div>\n  </form>\n  </ion-content>\n  <ion-footer>\n    <div text-center style="background-color: #ffffff;">\n      <button ion-button class="my-label" clear style="text-transform: none;" color="about" (click)="about()">About BariCalc</button>\n    </div>\n  </ion-footer>\n'/*ion-inline-end:"C:\Users\Apptroid\BariCalculator\src\pages\mains\mains.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MainsPage);
    return MainsPage;
}());

//# sourceMappingURL=mains.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\Users\Apptroid\BariCalculator\src\pages\terms\terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="my-quess">Terms and Condition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p class="my-quess">\n        The World Health Organization (WHO) uses a class\n        system to define obesity (Table 1). Statistics for 2013\n        from the UK, Health and Social Care Information Centre\n        show that in adults, 24% of men and 25% of women\n        are classified as obese and over 3% have class-3 obesity\n        [5]. For an average UK district general hospital serving\n        an adult population of 200 000, this equates to 52 000\n        obese and over 6000 class-3 obese patients [6].\n        Obese patients are more likely to present to hospital\n        because they are more prone to concomitant disease.\n        Between 2001–2002 and 2011–2012, there was an\n        eleven-fold increase in the number of patients (from\n        1019 to 11 736) of all ages admitted to NHS hospitals\n        with a primary diagnosis of obesity (Fig. 1) [6]. In\n        2007, the UK Government’s Foresight Report predicted\n        that 50% of the UK population would be clinically\n        obese by 2050, costing the NHS an extra £45.5 billion\n        (€61.5 billion; $70.1 billion) per year, but even this\n        may be an underestimate [7].\n        This consensus guidance is a synthesis of expert\n        opinion, current practice and literature review,\n        designed to replace the 2007 edition [1] and act as a\n        guide to the delivery of safe anaesthesia to this clinically\n        demanding group</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Apptroid\BariCalculator\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecommendationPage = (function () {
    function RecommendationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isBmiShown = false;
        this.isIbwShown = false;
        this.isLbwShown = false;
        this.isAbwShown = false;
        this.isRiskShown = false;
        this.count = 0;
        this.counter = 0;
        this.weight = this.navParams.get('weight');
        this.height = this.navParams.get('height');
        this.hUnit = this.navParams.get('hUnit');
        this.wUnit = this.navParams.get('wUnit');
        this.neckCircum = this.navParams.get('neckCircum');
        this.conHeight = this.navParams.get('conHeight');
        this.conWeight = this.navParams.get('conWeight');
        this.conIbwHeight = this.navParams.get('conIbwHeight');
        this.hypertens = this.navParams.get('hypertension');
        this.count = this.navParams.get('sumCounter');
        this.age = this.navParams.get('age');
        this.gender = this.navParams.get('gender');
        if (this.wUnit != "kg") {
            this.weigh = this.weight + " " + this.wUnit;
            this.weigh1 = "(" + this.conWeight + " kg)";
            this.weigh2 = this.weigh1;
        }
        else {
            this.weigh = this.weight + " " + this.wUnit;
            this.weigh1 = " ";
            this.weigh2 = this.weigh;
        }
        this.heigh = this.height + " " + this.hUnit;
        this.a = this.age + " yrs";
        this.calculateBmi();
        this.calculateIbw();
        this.calculateAbw();
        this.calculateLbw();
        this.calculateLbwDosage();
        this.calculateTbwDosage();
        this.risk();
    }
    RecommendationPage.prototype.calculateBmi = function () {
        console.log("conHeight" + this.conHeight);
        this.bmi1 = this.conWeight / this.conHeight;
        this.bmi2 = this.bmi1 / this.conHeight;
        this.bmi = this.bmi2.toFixed(1);
        this.BmiClassification();
        console.log("bmi" + this.bmi);
    };
    RecommendationPage.prototype.BmiClassification = function () {
        if (this.bmi < 18.5) {
            this.classi = "Underweight";
        }
        else if (this.bmi > 40.0) {
            this.classi = "Obese 3";
        }
        else if (35.0 < this.bmi && this.bmi < 39.9) {
            this.classi = "Obese 2";
        }
        else if (30.0 < this.bmi && this.bmi < 34.9) {
            this.classi = "Obese 1";
        }
        else if (25.0 < this.bmi && this.bmi < 29.9) {
            this.classi = "Overweight";
        }
        else if (18.5 < this.bmi && this.bmi < 24.9) {
            this.classi = "Normal";
        }
        this.bminclass = this.bmi + " (" + this.classi + ")";
    };
    RecommendationPage.prototype.calculateLbwDosage = function () {
        var LBW11 = Math.round(this.LBW);
        //thiopental
        var minThio = LBW11 * 3;
        var maxThio = LBW11 * 5;
        this.thiopental = minThio + "-" + maxThio + " mg";
        console.log(minThio + "-" + maxThio + "mg");
        //propofol
        var minProp = LBW11 * 1;
        var maxProp = LBW11 * 2;
        this.propofol = minProp + "-" + maxProp + " mg";
        console.log(minProp + "-" + maxProp + "mg");
        //fentanyl
        var minFenta = LBW11 * 1;
        var maxFenta = LBW11 * 2;
        this.fentanyl = minFenta + "-" + maxFenta + " microgram";
        console.log(minFenta + "-" + maxFenta + "microgram");
        //morphine
        var minMorph = LBW11 * 0.1;
        var maxMorph = LBW11 * 0.2;
        this.morphine = Math.round(minMorph) + "-" + Math.round(maxMorph) + " mg";
        console.log(minMorph + "-" + maxMorph + "mg");
        //vecuronium
        var dosageVecuro = LBW11 * 0.1;
        this.vecuronium = Math.round(dosageVecuro);
        this.vecuronium = this.vecuronium + " mg";
        console.log(this.vecuronium);
        //paracetamol
        var minPara = LBW11 * 0.9;
        var maxPara = LBW11 * 1.2;
        minPara = Math.round(minPara);
        maxPara = Math.round(maxPara);
        this.paracetamol = minPara + "-" + maxPara + " mg";
        console.log(minPara + "-" + maxPara + "mg");
        //atracurium
        var dosageAtra = LBW11 * 0.5;
        dosageAtra = Math.round(dosageAtra);
        this.atracurium = dosageAtra + " mg";
        console.log(this.atracurium);
        //rocuronium
        var dosageRocuro = LBW11 * 0.6;
        dosageRocuro = Math.round(dosageRocuro);
        this.rocuronium = dosageRocuro + " mg";
        console.log(this.rocuronium);
        //bupivacain
        var dosageBupi = LBW11 * 2;
        this.bupivacain = dosageBupi + " mg";
        console.log(this.bupivacain);
        //lidocaine
        var dosageLigno = LBW11 * 3;
        this.lignocaine = dosageLigno + " mg";
        console.log(this.lignocaine);
    };
    RecommendationPage.prototype.calculateTbwDosage = function () {
        //suxamethonium
        var minSuxam = this.conWeight * 1;
        var maxSuxam = this.conWeight * 2;
        this.suxamethonium = minSuxam + "-" + maxSuxam + " mg";
        console.log(minSuxam + "-" + maxSuxam + "mg");
    };
    RecommendationPage.prototype.calculateIbw = function () {
        if (this.gender == 'female') {
            this.IBW = this.conIbwHeight - 105;
            this.IBW1 = this.IBW + " kg";
            console.log("IBW female" + this.IBW + "kg");
        }
        else {
            this.IBW = this.conIbwHeight - 100;
            this.IBW1 = this.IBW + " kg";
            console.log("IBW male" + this.IBW);
        }
    };
    RecommendationPage.prototype.calculateAbw = function () {
        var first = this.conWeight - this.IBW;
        this.ABW = this.IBW + 0.4 * first;
        this.ABW = this.ABW.toFixed(1);
        this.ABW1 = this.ABW + " kg";
        console.log("ABW" + this.ABW);
    };
    RecommendationPage.prototype.calculateLbw = function () {
        var firstStep = 9270 * this.conWeight;
        if (this.gender == 'male') {
            var secondStep = 216 * this.bmi;
            var thirdStep = 6680 + secondStep;
            this.LBW = firstStep / thirdStep;
            this.LBW = this.LBW.toFixed(1);
            this.LBW1 = this.LBW + " kg";
            console.log("LBW Male" + this.LBW);
        }
        else {
            var secondStep = 244 * this.bmi;
            var thirdStep = 8780 + secondStep;
            this.LBW = firstStep / thirdStep;
            this.LBW = this.LBW.toFixed(1);
            this.LBW1 = this.LBW + " kg";
            console.log("LBW Female" + this.LBW);
        }
    };
    RecommendationPage.prototype.risk = function () {
        this.counter = this.count + this.counter;
        if (this.gender == 'male') {
            this.counter = this.counter + 1;
        }
        if (this.gender == 'female' && this.neckCircum > 41) {
            this.counter = this.counter + 1;
        }
        if (this.gender == 'male' && this.neckCircum > 43) {
            this.counter = this.counter + 1;
        }
        if (this.bmi > 50) {
            this.counter = this.counter + 1;
        }
        if (this.age > 45) {
            this.counter = this.counter + 1;
        }
        if (this.hypertens == 'yesHyper') {
            this.counter = this.counter + 1;
        }
        console.log("Counter" + this.counter);
        this.riskClass();
    };
    RecommendationPage.prototype.riskClass = function () {
        if (this.counter >= 0 && this.counter <= 1) {
            //alert("0.2% to 0.3%");
            this.riskMortality = "0.2% - 0.3%";
            this.riskFactorClass = "Class A";
        }
        else if (this.counter >= 2 && this.counter <= 3) {
            //alert("1.1% to 1.5%")
            this.riskMortality = "1.1% to 1.5%";
            this.riskFactorClass = "Class B";
        }
        else if (this.counter >= 4) {
            //alert("2.4% to 3.0%");
            this.riskMortality = "2.4% to 3.0%";
            this.riskFactorClass = "Class C";
        }
    };
    RecommendationPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */]);
    };
    RecommendationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommendationPage');
    };
    RecommendationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommendation',template:/*ion-inline-start:"C:\Users\Apptroid\BariCalculator\src\pages\recommendation\recommendation.html"*/'<!--\n  Generated template for the RecommendationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title class="head">Calculations</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content>\n    <ion-list style="margin-bottom: 0px;">\n      <div style="clear: left; background-color:#f6f6f8 !important; padding-left: 10px !important; ">\n        <!-- <p style="float: left; padding : 7px;">\n          <img src="img/icons/recommendation.png" height="90" width="90" border="1px">\n        </p>\n        <ion-label class="my-label" color="about">Calculations</ion-label> -->\n        <ion-grid>\n        <ion-row no-padding no-margin >\n          <ion-col no-padding no-margin>\n            <ion-item no-lines id="rounds" class="itemDesign" style="background-color:#f6f6f8 !important;">\n              <ion-icon item-start style="margin-right: 3px;height:35px;width:30px;">\n                <img src="img/icons/age.png">\n              </ion-icon>\n              <ion-input style="padding-right: 0px; padding-bottom: 4px;" class="item-align" [(ngModel)]="a" name="a" no-margin readonly no-padding></ion-input>\n             </ion-item>\n          </ion-col>\n          <ion-col no-padding no-margin>\n            <ion-item  no-lines id="rounds" class="itemDesign" style="background-color:#f6f6f8 !important;">\n              <ion-icon item-start style="margin-right: 0px; height:25px; width:25px;">\n                <img src="img/icons/height.png" style="height: 30px;">\n              </ion-icon>\n              <p class="item-align" style="color: #000 ;padding-top: 5px;">{{heigh}}</p>\n              <!-- <ion-input style="padding-right: 0px;" class="item-align" [(ngModel)]="heigh" name="heigh" text-wrap no-margin readonly no-padding></ion-input> -->\n            </ion-item>\n          </ion-col>\n         <ion-col no-padding no-margin>\n           <ion-item no-lines id="rounds" class="itemDesign" style="background-color:#f6f6f8 !important;"  text-wrap>\n            <ion-icon item-start style="margin-right: 0px; height:35px; width:35px;">\n              <img src="img/icons/weight.png" style="height: 35px; width: 32px;">\n              </ion-icon>\n              <p class="item-align" style="color: #000">{{weigh}}</p>\n              <p class="item-align" style="color: #000">{{weigh1}}</p>\n           \n          </ion-item>\n          \n          </ion-col>\n        </ion-row>\n        </ion-grid>\n \n      \n        \n        <!-- <ion-row style="background-color:#f6f6f8 !important;" no-padding no-margin>\n            <ion-col>\n                <ion-item no-lines no-padding no-margin style="background-color:#f6f6f8 !important;">\n                  <ion-input class="item-align" [(ngModel)]="heigh" name="heigh" no-margin readonly></ion-input>\n                 \n                </ion-item>\n              </ion-col> -->\n          <!-- <ion-col>\n            <ion-item no-lines no-padding no-margin style="background-color:#f6f6f8 !important;">\n              <ion-input class="item-align" [(ngModel)]="weigh" name="weigh" no-margin readonly></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item no-lines no-padding no-margin style="background-color:#f6f6f8 !important;">\n              <ion-input class="item-align" [(ngModel)]="a" name="a" no-margin readonly>yrs</ion-input>\n            </ion-item>\n          </ion-col> -->\n          \n        <!-- </ion-row> -->\n      </div>\n      \n    </ion-list>\n    <form style="background-color:#f1f8ff !important;">\n      <ion-list>\n        <ion-item style="background-color:#514f50 !important;" no-lines>\n          <ion-label no-padding no-margin class="heading" color="primary">BMI & other details</ion-label>\n        </ion-item>\n        <ion-row no-padding no-margin>\n          <ion-col style="padding-left:5px; padding-bottom: 0px;" no-margin>\n            <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n              <ion-label color="about" class="head" text-wrap style="padding-left:10px !important;padding-top: 3px;height: 73px;">BMI (WHO Classification): <button ion-button clear icon-only class="infoBlueButton"  type="button" (click)="isBmiShown = !isBmiShown" >\n                <ion-icon name="information-circle" style="\n                padding-left: 2px;\n                padding-right: 5px;\n                padding-bottom: 7px; font-size:1.7em"></ion-icon>\n              </button>\n           </ion-label>\n            </ion-item>\n           </ion-col>\n          <ion-col no-padding no-margin>\n            <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important; padding-left:5px !important;">\n              <ion-input no-margin  style="padding-left:5px !important;" [(ngModel)]="bminclass" name="bminclass" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row style="border-bottom: 1px solid #bfbfbf !important;">\n        <div class="color-boxes" [ngClass]="{\'show\': isBmiShown}" style="background-color:#ffffff !important;" >\n          <p style="padding-left:10px !important; margin-top:0px; margin-bottom:0px;" class="my-ques">World Health Organization classification of obesity.</p>\n          <ion-grid>\n              <ion-row style="border-bottom: 1px solid #bfbfbf !important; " >\n                <ion-col col-8 col-sm class="my-ques">\n                  Body mass index; kg.m<sup>2</sup>\n                </ion-col>\n                <ion-col col-4 col-sm style="font-size: 12px !important; font-family: \'MontSerratBold\'; font-weight: bolder;">\n                  Classification\n                </ion-col>\n              </ion-row>\n              <ion-row style="border-bottom: 1px solid #bfbfbf !important;" class="my-quess">  \n                  <ion-col col-8 col-sm>\n                     < 18.5\n                  </ion-col>\n                  <ion-col col-4 col-sm>\n                    Underweight\n                  </ion-col>\n                </ion-row>\n                <ion-row style="border-bottom: 1px solid #bfbfbf !important;" class="my-quess">\n                    <ion-col col-8 col-sm>\n                      18.5-24.9\n                    </ion-col>\n                    <ion-col col-4 col-sm>\n                      Normal\n                    </ion-col>\n                  </ion-row>\n                  <ion-row style="border-bottom: 1px solid #bfbfbf !important;" class="my-quess">\n                      <ion-col col-8 col-sm>\n                        25.0-29.9\n                      </ion-col>\n                      <ion-col col-4 col-sm>\n                        overweight\n                      </ion-col>\n                    </ion-row>\n                    <ion-row style="border-bottom: 1px solid #bfbfbf !important;" class="my-quess">\n                        <ion-col col-8 col-sm>\n                         30.0-34.9\n                        </ion-col>\n                        <ion-col col-4 col-sm>\n                          Obese 1\n                        </ion-col>\n                      </ion-row>\n                      <ion-row style="border-bottom: 1px solid #bfbfbf !important;" class="my-quess">\n                          <ion-col col-8 col-sm>\n                            35.0-39.9\n                          </ion-col>\n                          <ion-col col-4 col-sm>\n                              Obese 2\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class="my-quess">\n                            <ion-col col-8 col-sm>\n                               >40.0\n                            </ion-col>\n                            <ion-col col-4 col-sm>\n                                Obese 3 (previously \'morbid obesity\')\n                            </ion-col>\n                          </ion-row>\n            </ion-grid>\n              <!-- <ion-col no-margin>\n                <img src="img/icons/bmi.png" style ="height: 150px;width: 280px;padding-left: 0px;margin-left: 10px;">\n                </ion-col> -->\n        </div>\n      </ion-row>\n         <ion-row >\n          <ion-col style="padding-left:5px;padding-bottom: 0px;" no-margin>\n            <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n              <ion-label color="about" class="head" text-wrap style="padding-left:10px !important; padding-top: 3px;">Ideal Body Weight (IBW):\n                <button ion-button clear icon-only class="infoBlueButton"  type="button" (click)="isIbwShown = !isIbwShown" >\n                  <ion-icon name="information-circle" style="\n                  padding-left: 2px;\n                  padding-right: 5px;\n                  padding-bottom: 7px; font-size:1.7em"></ion-icon>\n                </button>\n              </ion-label>\n              <!-- <button ion-button clear color="about" (click)="isIbwShown = !isIbwShown" style="height:23px;padding-left:10px !important; margin:0px;font-size:13px;font-family: \'MontserratBold\';text-transform: none;">Ideal Body Weight (IBW):</button> -->\n            </ion-item>\n            </ion-col>\n          <ion-col no-margin style="padding-top:3px !important;">\n            <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n              <ion-input placeholder="Ideal Body Weight" [(ngModel)]="IBW1" name="IBW1" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n         <ion-row style="border-bottom: 1px solid #bfbfbf !important;">\n        <div class="color-boxes" [ngClass]="{\'show\': isIbwShown}" style="background-color:#ffffff !important;" >\n            <p style="padding-left:10px !important; margin-top:0px; margin-bottom:0px;" class="my-quess">What the patient should weigh with a normal ratio of lean to fat mass.Varies with age, and is usually approximated to a function of height and sex:<br>\n              <br>IBW(kg)= height(cm) - X <br>\n              <br>(where x=105 in females and 100 in males) \n            </p>\n           <!-- <ion-col no-margin>\n              <img src="img/icons/IBW.jpg" style ="height: 50px;width: 298px;padding-left: 0px;margin-left: 8px;">\n              </ion-col> -->\n        </div>\n    </ion-row>\n        <ion-row >\n            <ion-col style="padding-left:5px;padding-bottom: 0px;" no-margin>\n              <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n                <ion-label color="about" class="head" text-wrap style="padding-left:10px !important; padding-top: 3px;">Adjusted Body Weight (ABW):\n                  <button ion-button clear icon-only class="infoBlueButton"  type="button" (click)="isAbwShown = !isAbwShown" >\n                    <ion-icon name="information-circle" style="\n                    padding-left: 2px;\n                    padding-right: 5px;\n                    padding-bottom: 7px; font-size:1.7em"></ion-icon>\n                  </button>\n                </ion-label>\n                <!-- <button ion-button clear color="about"  (click)="isAbwShown = !isAbwShown" style="height:23px;padding-left:10px !important; margin:0px;font-size:12.5px;font-family: \'MontserratBold\';text-transform: none;">Adjusted Body Weight (ABW):</button> -->\n              </ion-item>\n              </ion-col>\n            <ion-col no-margin style="padding-top:3px !important;">\n              <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n                <ion-input placeholder="Adjust Body Weight" [(ngModel)]="ABW1" name="ABW1" readonly></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row style="border-bottom: 1px solid #bfbfbf !important;">\n              <div class="color-boxes" [ngClass]="{\'show\': isAbwShown}" style="background-color:#ffffff !important;" >\n                  <p style="padding-left:10px !important; margin-top:0px; margin-bottom:0px;" class="my-quess">Takes into account the fact that obese individuals have increased lean body mass and an increased volume of distributionfor drugs.It is calculated by adding 40% of excess weight to the IBW:<br>\n                   <br> ABW(kg)= IBW(kg) + 0.4 (TBW(kg) - IBW(kg))<br>\n                  </p>\n                <!-- <ion-col no-margin>\n                  <img src="img/icons/abw.png" style ="height:40px;width:298px; margin-left:10px;">\n                  </ion-col> -->\n                </div>\n            </ion-row>\n            <ion-row>\n              <ion-col style="padding-left:5px;padding-bottom: 0px;" no-margin>\n                <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n                  <ion-label color="about" class="head" text-wrap style="padding-left:10px !important;padding-top: 3px;">Lean Body Weight (LBW):\n                      <button ion-button clear icon-only class="infoBlueButton" style="padding-top: 4px !important;"  type="button" (click)="isLbwShown = !isLbwShown" >\n                    <ion-icon name="information-circle" style="\n                    padding-left: 2px;\n                    padding-right: 5px;\n                    padding-bottom: 7px; font-size:1.7em"></ion-icon>\n                  </button>\n                  </ion-label>\n                  <!-- <button ion-button clear color="about"  (click)="isLbwShown = !isLbwShown" style="height:23px;padding-left:10px !important; margin:0px;font-size:13px;font-family: \'MontserratBold\';text-transform: none;">Lean Body Weight (LBW):</button> -->\n                </ion-item>\n                \n              </ion-col>\n              <ion-col no-margin style="padding-top:3px !important; " >\n                <ion-item no-lines no-padding no-margin style="background-color:#f1f8fe !important;">\n                  <ion-input placeholder="Lean Body Weight" [(ngModel)]="LBW1" name="LBW1" readonly></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row style="border-bottom: 1px solid #bfbfbf !important;">\n                <div class="color-boxes" [ngClass]="{\'show\': isLbwShown}" style="background-color:#ffffff !important;" >\n                    <p class = "my-quess" style="padding-left:10px !important; margin-top:0px; margin-bottom:0px;" class="my-quess">\n                        The patient\'s weight excluding fat. Many of the formulae for calculating lean body weight are complex but one of the most widely used is that of Janmahasatian et al:<br>\n                    </p>\n                    <p class = "my-quess" style="text-align:center; margin-bottom: 0px;" >LBW(kg)(For men):</p><br>\n                    <p class = "my-quess" style="text-align:center; margin-top: 0px;margin-bottom: 0px;">9270 x TBW(kg)</p>\n                    <hr style="width:50%; height:1px;border:none;color:#333;background-color:#333;margin-top: 0px;margin-bottom: 0px;">\n                    <p class = "my-quess" style="text-align:center; margin-top: 0px;margin-bottom: 0px;">6680 + (216 x BMI(kg.m<sup>2</sup>))</p><br>\n\n                    <p class = "my-quess" style="text-align:center; margin-bottom: 0px;" >LBW(kg)(For women):</p><br>\n                    <p class = "my-quess" style="text-align:center; margin-top: 0px;margin-bottom: 0px;">9270 x TBW(kg)</p>\n                    <hr style="width:50%; height:1px;border:none;color:#333;background-color:#333;margin-top: 0px;margin-bottom: 0px;">\n                    <p class = "my-quess" style="text-align:center; margin-top: 0px;margin-bottom: 0px;">8780 + (244 x BMI(kg.m<sup>2</sup>))</p>\n                    <p class = "my-quess" style="padding-left:10px !important; margin-top:12px; margin-bottom:0px;">Regardless of total body weight, lean body weight rarely exceeds 100 kg in men and 70 kg in women.</p> \n                  </div>\n                  \n              </ion-row>\n           \n        <ion-item style="background-color:#514f50 !important;" no-lines>\n          <ion-label no-padding no-margin class="heading" color="primary" style="padding-top: 6px; padding-bottom: 6px">Drugs Dosages based on LBW:\n            <ion-label text-wrap style="font-size:10px !important; padding:0px; margin-top:3px;margin-bottom: 3px;">(Suggested initial dosing scalars for commonly used anaesthetic drugs for healthy obese adults (not- withstanding the fact that titration to a suitable end- point may be necessary)\n        </ion-label></ion-label>\n        </ion-item>\n        <div style="clear: left; background-color:#f1f8fe !important;">\n          <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Propofol (induction):</p>\n          <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p><br>\n          <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n          <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="propofol" name="propofol" placeholder="Dosage in mg/kg" readonly>\n          </ion-input></ion-item>\n      </div>\n      <div style="clear: left; background-color:#f1f8fe !important;">\n        <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Thiopental:</p>\n        <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n        <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n        <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="thiopental" name="thiopental" placeholder="Dosage in mg/kg" readonly>\n        </ion-input></ion-item>\n    </div>\n    <div style="clear: left; background-color:#f1f8fe !important;">\n      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Fentanyl:</p>\n      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="fentanyl" name="fentanyl" placeholder="Dosage in mg/kg" readonly>\n      </ion-input></ion-item>\n  </div>\n  <div style="clear: left; background-color:#f1f8fe !important;">\n    <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Rocuronium:</p>\n    <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n    <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n    <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="rocuronium" name="rocuronium" placeholder="Dosage in mg/kg" readonly>\n    </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Atracurium:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="atracurium" name="atracurium" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Vecuronium:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="vecuronium" name="vecuronium" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Morphine:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="morphine" name="morphine" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Paracetamol:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="paracetamol" name="paracetamol" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Bupivacain:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="bupivacain" name="bupivacain" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n<div style="clear: left; background-color:#f1f8fe !important;">\n  <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Lidocaine:</p>\n  <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>LBW: {{LBW1}}</p>\n  <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n  <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="lignocaine" name="lignocaine" placeholder="Dosage in mg/kg" readonly>\n  </ion-input></ion-item>\n</div>\n                    <ion-item style="background-color:#514f50 !important;" no-lines>\n                      <ion-label no-padding no-margin class="heading" color="primary" style="padding-top: 6px; padding-bottom: 6px">Drugs Dosages based on ABW:\n                        <ion-label text-wrap style="font-size:10px !important; padding:0px; margin-top:3px;margin-bottom: 3px;">(Suggested initial dosing scalars for commonly used anaesthetic drugs for healthy obese adults (not- withstanding the fact that titration to a suitable end- point may be necessary)</ion-label></ion-label>\n                    </ion-item>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Propofol (infusion) :</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Antibiotics :</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Low molecular<br> weight heparin:</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Alfentanil:</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Neostigmine<br> (maximum 5 mg):</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Sugammadex:</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>ABW: {{ABW1}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;"  placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                   \n                    <ion-item style="background-color:#514f50 !important;" no-lines>\n                      <ion-label no-padding no-margin class="heading" color="primary" style="padding-top: 6px; padding-bottom: 6px">Drugs Dosages based on TBW:\n                      <ion-label text-wrap style="font-size:10px !important; padding:0px; margin-top:3px;margin-bottom: 3px;">(Suggested initial dosing scalars for commonly used anaesthetic drugs for healthy obese adults (not- withstanding the fact that titration to a suitable end- point may be necessary)</ion-label></ion-label>\n                    </ion-item>\n                    <div style="clear: left; background-color:#f1f8fe !important;">\n                      <p style="float: left;margin-left: 17px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>Suxamethonium:</p>\n                      <p style="float: right;margin-right: 10px;margin-top: 13px;margin-bottom: 14px;" class="my-font" no-padding no-margin>TBW: {{weigh2}}</p>\n                      <ion-item style="background-color:#d5d5d5 !important; padding-left: 0px;">\n                      <ion-input type="text" class="my-font"  color="primary" style="margin-left: 10px;" [(ngModel)]="suxamethonium" name="suxamethonium" placeholder="Dosage in mg/kg" readonly>\n                      </ion-input></ion-item>\n                    </div>\n                   \n          <ion-item style="background-color:#514f50 !important;" no-lines>\n          <ion-label no-padding no-margin class="heading" color="primary">Risk of Mortality & class: <button ion-button clear icon-only class="infoButton"  type="button" (click)="isRiskShown = !isRiskShown" >\n            <ion-icon name="information-circle" style="\n            padding-left: 5px;\n            padding-right: 5px;\n            padding-bottom: 7px; font-size:1.7em"></ion-icon>\n          </button></ion-label>\n          <!-- <button ion-button clear color="primary" class="heading" (click)="isRiskShown = !isRiskShown" style="font-size: 1.4rem;text-transform: none;padding:0px; margin:0px;">Risk of Mortality & class:</button> -->\n         \n        </ion-item>\n        <div class="color-boxes" [ngClass]="{\'show\': isRiskShown}" style="background-color:#ffffff ;" >\n            <p style="padding-left:10px !important; margin-top:0px; margin-bottom:0px;" class="my-ques">The Obesity Surgery Mortality Risk Stratification score(a) risk factors; (b) risk of mortality:<br>\n             </p>\n             <ion-grid >\n                <ion-row style="background-color:#d5d5d5 !important;" class="my-ques">\n                  <ion-col col-9 col-sm>\n                   Risk factor\n                  </ion-col>\n                  <ion-col col-3 col-sm>\n                   Score \n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9 col-sm class="my-quess">\n                      (a)\n                    </ion-col>\n                    <ion-col col-3 col-sm>\n                     </ion-col>\n                  </ion-row>\n                  <ion-row class="my-quess">\n                      <ion-col col-9 col-sm>\n                        BMI > 50 kg.m<sup>2</sup>\n                      </ion-col>\n                      <ion-col col-3 col-sm>\n                       1\n                      </ion-col>\n                    </ion-row>\n                    <ion-row class="my-quess">\n                        <ion-col col-9 col-sm>\n                         Male\n                        </ion-col>\n                        <ion-col col-3 col-sm>\n                         1\n                        </ion-col>\n                      </ion-row>\n                      <ion-row class="my-quess">\n                          <ion-col col-9 col-sm>\n                           Age > 45 years\n                          </ion-col>\n                          <ion-col col-3 col-sm>\n                            1\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class="my-quess">\n                            <ion-col col-9 col-sm>\n                             Hypertension\n                            </ion-col>\n                            <ion-col col-3 col-sm>\n                                1\n                            </ion-col>\n                          </ion-row>\n                          <ion-row class="my-quess">\n                              <ion-col col-9 col-sm>\n                                 Risk factors for pulmonary embolism:<br>\n                                 Previous venous thromboembolism<br>\n                                 Vana canal filter<br>\n                                 Hypoventilation (sleep-disordered breathing)<br>\n                                 Pulmonary hypertension\n                              </ion-col>\n                              <ion-col col-3 col-sm>\n                                  1\n                              </ion-col>\n                            </ion-row>\n                            <ion-row style="background-color:#d5d5d5 !important;">\n                                <ion-col col-8 col-sm></ion-col>\n                                <ion-col col-4 col-sm class="my-ques">\n                                    Risk of \n                                    mortality\n                                </ion-col>\n                              </ion-row>\n                              <ion-row class="my-quess">\n                                  <ion-col col-8 col-sm>\n                                  (b)\n                                  </ion-col>\n                                  <ion-col col-4 col-sm>\n                                      \n                                  </ion-col>\n                                </ion-row>\n                                <ion-row class="my-quess">\n                                    <ion-col col-8 col-sm>\n                                     Class A: 0-1 points \n                                    </ion-col>\n                                    <ion-col col-4 col-sm>\n                                        0.2-0.3%\n                                    </ion-col>\n                                  </ion-row>\n                                  <ion-row class="my-quess">\n                                      <ion-col col-8 col-sm>\n                                       Class B: 2-3 points\n                                      </ion-col>\n                                      <ion-col col-4 col-sm>\n                                          1.1-1.5%\n                                      </ion-col>\n                                    </ion-row>\n                                    <ion-row class="my-quess">\n                                        <ion-col col-8 col-sm>\n                                         Class C: 4-5 points\n                                        </ion-col>\n                                        <ion-col col-4 col-sm>\n                                            2.4-3.0%\n                                        </ion-col>\n                                      </ion-row>\n                            \n              </ion-grid>\n            <!-- <img src="img/icons/risk.png" center style ="height: 220px;width: 250px;margin-left: 25px;"> -->\n          </div>\n        <div style="clear: left;">\n          <p style="float: left; padding-left: 16px !important;" class="my-font">Risk of Mortality</p>\n          <p style="float: right; padding-right: 10px;" class="my-font"> Risk of Mortality Class </p>\n          <ion-item style="background: #d5d5d5 !important;" no-lines>\n            <ion-input [(ngModel)]="riskMortality" name="riskMortality" class="my-font" readonly></ion-input>\n            <ion-input no-padding no-margin type="text" [(ngModel)]="riskFactorClass" name="riskFactorClass" readonly color="primary"\n            placeholder="Dosage in mg/kg" class="align-items-end my-font" style="padding-left: 15px;" readonly></ion-input>\n          </ion-item>\n  \n        </div>\n  \n      </ion-list>\n    \n    </form>\n  </ion-content>\n  <ion-footer>\n    <div text-center style="background-color: #ffffff;">\n      <button ion-button class="name" clear style="text-transform: none;" color="about" (click)="about()">About BariCalc</button>\n    </div>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Apptroid\BariCalculator\src\pages\recommendation\recommendation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], RecommendationPage);
    return RecommendationPage;
}());

//# sourceMappingURL=recommendation.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		281,
		3
	],
	"../pages/mains/mains.module": [
		282,
		2
	],
	"../pages/recommendation/recommendation.module": [
		283,
		1
	],
	"../pages/terms/terms.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_tooltips__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mains_mains__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recommendation_recommendation__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mains_mains__["a" /* MainsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recommendation_recommendation__["a" /* RecommendationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    scrollAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mains/mains.module#MainsPageModule', name: 'MainsPage', segment: 'mains', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recommendation/recommendation.module#RecommendationPageModule', name: 'RecommendationPage', segment: 'recommendation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mains_mains__["a" /* MainsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recommendation_recommendation__["a" /* RecommendationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mains_mains__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_mains_mains__["a" /* MainsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Apptroid\BariCalculator\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Apptroid\BariCalculator\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Apptroid\BariCalculator\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="my-quess">About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<p class="my-quess">\n    The World Health Organization (WHO) uses a class\n    system to define obesity (Table 1). Statistics for 2013\n    from the UK, Health and Social Care Information Centre\n    show that in adults, 24% of men and 25% of women\n    are classified as obese and over 3% have class-3 obesity\n    [5]. For an average UK district general hospital serving\n    an adult population of 200 000, this equates to 52 000\n    obese and over 6000 class-3 obese patients [6].\n    Obese patients are more likely to present to hospital\n    because they are more prone to concomitant disease.\n    Between 2001–2002 and 2011–2012, there was an\n    eleven-fold increase in the number of patients (from\n    1019 to 11 736) of all ages admitted to NHS hospitals\n    with a primary diagnosis of obesity (Fig. 1) [6]. In\n    2007, the UK Government’s Foresight Report predicted\n    that 50% of the UK population would be clinically\n    obese by 2050, costing the NHS an extra £45.5 billion\n    (€61.5 billion; $70.1 billion) per year, but even this\n    may be an underestimate [7].\n    This consensus guidance is a synthesis of expert\n    opinion, current practice and literature review,\n    designed to replace the 2007 edition [1] and act as a\n    guide to the delivery of safe anaesthesia to this clinically\n    demanding group</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Apptroid\BariCalculator\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map
webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameHudComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameHudComponent = (function () {
    function GameHudComponent() {
        this.startEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.newRound = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    GameHudComponent.prototype.ngOnInit = function () {
        this.seconds = 0;
        this.miliseconds = 0;
        this.ttc = 3;
        this.idle = true;
        this.randomChoice = [];
    };
    GameHudComponent.prototype.startPlaying = function () {
        if (this.idle) {
            this.lives = 5;
            this.score = 0;
            this.idle = false;
            this.startTheObs();
            console.log('emitting start');
            this.startEmitter.emit(true);
        }
    };
    GameHudComponent.prototype.stopPlaying = function (who) {
        if (!this.idle) {
            this.idle = true;
            console.log('emitting stop');
            this.startEmitter.emit(false);
            this.stopTimer();
        }
    };
    GameHudComponent.prototype.startTheObs = function () {
        var _this = this;
        // console.log('start counting');
        var timeObs = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].interval(200).map(function (x) { return x + 1; });
        var timeElapsed = 0;
        this.seconds = 0;
        this.miliseconds = 0;
        this.timer = timeObs.subscribe(function (x) {
            timeElapsed = x;
            if (_this.lives === 0) {
                _this.stopPlaying('dead');
            }
            if (timeElapsed % 5 === 0) {
                _this.seconds++;
                _this.miliseconds = 0;
            }
            else {
                _this.miliseconds += 2;
            }
            if (_this.seconds >= _this.ttc) {
                timeElapsed = 0;
                _this.variableReset();
                _this.newRound.emit();
                // console.log(this.ttc); Easier
                // this.ttc /= 0.9;
                // console.log(this.ttc);
                _this.lives--;
                console.log('You didnt click in time');
            }
            if (_this.userClicked.title !== '') {
                if (_this.userClicked.title === _this.randomChoice[0] || _this.userClicked.color === _this.randomChoice[0]) {
                    _this.score++;
                    timeElapsed = 0;
                    _this.variableReset();
                    _this.ttc *= 0.9; // Factor
                    _this.newRound.emit();
                    console.log('OK => new Round ! ttc=', _this.ttc);
                }
                else {
                    timeElapsed = 0;
                    _this.lives--;
                    _this.variableReset();
                    _this.newRound.emit();
                    console.log('Lost a life => new Round !');
                }
            }
        });
    };
    GameHudComponent.prototype.stopTimer = function () {
        this.timer.unsubscribe();
    };
    GameHudComponent.prototype.variableReset = function () {
        this.userClicked.title = '';
        this.userClicked.color = '';
        this.seconds = 0;
        this.miliseconds = 0;
    };
    return GameHudComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "randomChoice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "lives", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "score", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "userClicked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "startEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], GameHudComponent.prototype, "newRound", void 0);
GameHudComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-game-hud',
        template: __webpack_require__(161),
        styles: [__webpack_require__(157)],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], GameHudComponent);

//# sourceMappingURL=game-hud.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "td {color: white;font-size: 55px;padding: 0px; border: 1px #DDD solid;width: 100px; height: 100px}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)();
// imports


// module
exports.push([module.i, "td {\r\n    font-size: 20px;\r\n    padding: 0px;\r\n    border: 1px #DDD solid;\r\n    width: auto;\r\n    height: 30px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<br><br><br>\r\n<app-game-hud [score]=\"score\" [lives]=\"lives\" [randomChoice]=\"randomChoice\" [userClicked]=\"userClicked\" (startEmitter)=\"gameStart($event)\" (newRound)=\"refreshBoard($event) \">\r\n</app-game-hud>\r\n<app-game-board [columns]=\"columns\" [gridArray]=\"gridArray\" [endMessage]=\"endMessage\" (answer)=\"onClick($event)\">\r\n</app-game-board>"

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <table align=\"center\" cellspacing=\"0\">\r\n        <tr *ngFor=\"let i of rows;\">\r\n            <td *ngFor=\"let aBox of gridArray | slice:(i*columns):(i+1)*columns \" [style.background-color]=\"aBox.color\" (click)=\"emitAnswer(aBox)\">{{ aBox.title }} </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div>  {{endMessage}}</div>"

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div>\r\n        <button (click)=\"startPlaying()\">Start</button>\r\n        <button (click)=\"stopPlaying()\">Stop</button>\r\n    </div>\r\n    <table align=\"center\">\r\n        <tr>\r\n            <td style=\"width: 300px;display: inline-block;text-align: left\">Click the {{randomChoice[0]}} Box</td>\r\n            <td style=\"width: 300px;display: inline-block;text-align: right;\">Lives: {{lives}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td style=\"width: 300px;display: inline-block;text-align: left\">Time elapsed: {{seconds}}.{{miliseconds}}s</td>\r\n            <td style=\"width: 300px;display: inline-block;text-align: right;\">Score: {{score}}</td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 80;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(101);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_data_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(gameService) {
        this.gameService = gameService;
        this.columns = 6;
        this.score = 0;
        this.lives = 5;
        this.userClicked = { title: '', color: '' };
    }
    AppComponent.prototype.endGame = function () {
        this.gridArray = this.gameService.getGameOverGrid();
        // this.gridArray = []; this.endMessage = 'Game Over !';
    };
    AppComponent.prototype.gameStart = function (status) {
        if (status) {
            this.refreshBoard();
        }
        else {
            console.log('end pressed!');
            this.endGame();
        }
    };
    AppComponent.prototype.onClick = function (answer) {
        this.userClicked = answer;
    };
    AppComponent.prototype.refreshBoard = function () {
        // console.log('request new grid !');
        this.gridArray = this.gameService.getPopulatedGrid();
        this.gameService.shuffle(this.gridArray);
        this.randomChoice = this.gameService.getRandomChoice();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.gridArray = this.gameService.getEmptyGrid();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(159),
        styles: [__webpack_require__(155)],
        providers: [__WEBPACK_IMPORTED_MODULE_0__game_data_service__["a" /* GameDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__game_data_service__["a" /* GameDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__game_data_service__["a" /* GameDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__counter__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_board_game_board_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_hud_game_hud_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__game_board_game_board_component__["a" /* GameBoardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__game_hud_game_hud_component__["a" /* GameHudComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* StoreModule */].provideStore({ counter: __WEBPACK_IMPORTED_MODULE_6__counter__["a" /* counterReducer */] })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IDLE */
/* unused harmony export START_ROUND */
/* unused harmony export END_ROUND */
/* unused harmony export GAME_OVER */
/* harmony export (immutable) */ __webpack_exports__["a"] = counterReducer;
var IDLE = 'IDLE';
var START_ROUND = 'STARTROUND';
var END_ROUND = 'END_ROUND';
var GAME_OVER = 'GAMEOVER';
function counterReducer(state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case IDLE:
            return state + 1;
        case START_ROUND:
            return state - 1;
        case END_ROUND:
            return 0;
        case GAME_OVER:
            return 0;
        default:
            return state;
    }
}
//# sourceMappingURL=counter.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameBoardComponent = (function () {
    function GameBoardComponent() {
        this.answer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        this.rows = Array.from(Array(Math.ceil(this.gridArray.length / this.columns)).keys());
        console.log('keys = ', this.rows.keys());
    };
    GameBoardComponent.prototype.emitAnswer = function (theBox) {
        this.answer.emit(theBox);
    };
    return GameBoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "gridArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "endMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], GameBoardComponent.prototype, "answer", void 0);
GameBoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-game-board',
        template: __webpack_require__(160),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], GameBoardComponent);

//# sourceMappingURL=game-board.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameDataService = (function () {
    function GameDataService() {
        this.charset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.colors = ['Red', 'Green', 'Blue'];
    }
    GameDataService.prototype.shuffle = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    GameDataService.prototype.getPopulatedGrid = function () {
        this.shuffle(this.charset);
        this.shuffle(this.colors);
        this.letterOne = Object(this.charset)[0];
        var letterTwo = Object(this.charset)[1];
        this.colorOne = Object(this.colors)[0];
        var colorTwo = Object(this.colors)[1];
        this.genChoice();
        return [
            { title: letterTwo, color: colorTwo }, {}, {}, {}, {}, {},
            { title: this.letterOne, color: this.colorOne }, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {}
        ];
    };
    GameDataService.prototype.getEmptyGrid = function () {
        return [
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {},
            {}, {}, {}, {}, {}, {}
        ];
    };
    GameDataService.prototype.getGameOverGrid = function () {
        return [
            {}, {}, {}, {}, {}, {},
            // tslint:disable-next-line:max-line-length
            {}, { title: 'G', color: 'red' }, { title: 'A', color: 'orange' }, { title: 'M', color: 'gold' }, { title: 'E', color: 'LimeGreen' }, {},
            {}, {}, {}, {}, {}, {},
            {}, { title: 'O', color: 'green' }, {}, { title: 'E', color: 'indigo' }, { title: 'R', color: 'violet' }, {},
            {}, {}, { title: 'V', color: 'blue' }, {}, {}, {},
            {}, {}, {}, {}, {}, {}
        ];
    };
    GameDataService.prototype.genChoice = function () {
        this.choice = [this.letterOne, this.colorOne];
        this.shuffle(this.choice);
        return this.choice;
    };
    GameDataService.prototype.getRandomChoice = function () {
        return this.choice;
    };
    return GameDataService;
}());
GameDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameDataService);

//# sourceMappingURL=game-data.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.bundle.js.map
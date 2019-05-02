(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-root-user-rootUser-module"],{

/***/ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Detalhes da Empresa\n    <a [routerLink]=\"['/root/empresas']\">\n      <button class=\" btn btn-warning btn-xs fa fa-arrow-circle-left pull-right\" style=\"margin-top:2px;margin-right: 2px; padding: 2px;\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"detalhes-tab\" data-toggle=\"tab\" href=\"#detalhes\" role=\"tab\" aria-controls=\"detalhes\"\n          aria-selected=\"true\">Detalhes</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"obs-tab\" data-toggle=\"tab\" href=\"#obs\" role=\"tab\" aria-controls=\"obs\" aria-selected=\"false\">Obs</a>\n      </li>\n    </ul> \n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n    <div class=\"row tab-pane fade show active\" id=\"detalhes\" role=\"tabpanel\" aria-labelledby=\"detalhes-tab\">\n      <div class=\"col-xs-12\">\n        <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-8\">\n                <div class=\"form-group\">\n                  <label for=\"nome\">Nome</label>\n                  <input id=\"nome\" type=\"text\" class=\"form-control\" formControlName=\"nome\" ikUpCase />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"cnpj\">CNPJ</label>\n                  <input id=\"cnpj\" type=\"text\" class=\"form-control\" formControlName=\"cnpj\" IkMask=\"99.999.999/9999-99\" />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"telefone\">Telefone</label>\n                  <input id=\"telefone\" type=\"text\" class=\"form-control\" formControlName=\"telefone\" IkMask=\"(99)9999-9999\" />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-9\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\" ikLoCase />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"tipo\" class=\"control-label\">Tipo</label>\n                  <select class=\"form-control\" id=\"tipo\" formControlName=\"tipo\">\n                    <option value=\"Matriz\">Matriz</option>\n                    <option value=\"Filial\">Filial</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-8\" *ngIf=\"formulario.get('tipo').value === 'Filial' \">\n                <div class=\"form-group\">\n                  <label for=\"matriz\" class=\"control-label\">Matriz</label>\n                  <select class=\"form-control\" id=\"matriz\" formControlName=\"matriz\" [compareWith]=\"testEmpresa\">\n                    <option *ngFor=\"let empresa of empresas\" [ngValue]=\"empresa\">{{empresa.nome}}</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 card-flat\">\n            <div formGroupName=\"endereco\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cep\" class=\"control-label\">CEP</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cep\" (blur)=\"consultaCEP()\" formControlName=\"cep\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-8\">\n                  <div class=\"form-group\">\n                    <label for=\"rua\" class=\"control-label\">Rua</label>\n                    <input type=\"text\" class=\"form-control\" id=\"rua\" formControlName=\"logradouro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"numero\" class=\"control-label\">Número</label>\n                    <input type=\"text\" class=\"form-control\" id=\"numero\" formControlName=\"numero\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"complemento\" class=\"control-label\">Complemento</label>\n                    <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-5\">\n                  <div class=\"form-group\">\n                    <label for=\"bairro\" class=\"control-label\">Bairro</label>\n                    <input type=\"text\" class=\"form-control\" id=\"bairro\" formControlName=\"bairro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cidade\" class=\"control-label\">Cidade</label>\n                    <select class=\"form-control\" id=\"cidade\" formControlName=\"cidade\">\n                      <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"estado\" class=\"control-label\">Estado</label>\n                    <select class=\"form-control\" id=\"estado\" formControlName=\"estado\">\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr />\n          <button type=\"submit\" class=\"btn btn-primary \">Salvar</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"obs\" role=\"tabpanel\" aria-labelledby=\"obs-tab\">\n      teste de tab...\n    </div>\n\n    </div>\n  </div>\n  <modal-message></modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmpresasCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasCreateComponent", function() { return EmpresasCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmpresasCreateComponent = /** @class */ (function (_super) {
    __extends(EmpresasCreateComponent, _super);
    function EmpresasCreateComponent(empresaService, formBuilder, cepService, route) {
        var _this = _super.call(this, formBuilder, cepService, route) || this;
        _this.empresaService = empresaService;
        _this.formBuilder = formBuilder;
        _this.cepService = cepService;
        _this.route = route;
        return _this;
    }
    EmpresasCreateComponent.prototype.findById = function (id) {
        var _this = this;
        this.empresaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.empresa = responseApi.data;
            _this.cepService.getCidadeNome(_this.empresa.endereco.cidade).subscribe(function (dados) { return _this.cidades = dados; });
            _this.listFactory();
            _this.formulario = _this.formBuilder.group({
                id: [_this.empresa.id],
                nome: [_this.empresa.nome, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                cnpj: [_this.empresa.cnpj, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]],
                telefone: [_this.empresa.telefone, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                email: [_this.empresa.email, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                tipo: [_this.empresa.tipo, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                matriz: [_this.empresa.matriz],
                endereco: _this.formBuilder.group({
                    cep: [_this.empresa.endereco.cep, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    numero: [_this.empresa.endereco.numero],
                    complemento: [_this.empresa.endereco.complemento],
                    logradouro: [_this.empresa.endereco.logradouro, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    bairro: [_this.empresa.endereco.bairro, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cidade: [_this.empresa.endereco.cidade, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    estado: [_this.empresa.endereco.estado, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }),
                url_logo: [_this.empresa.url_logo],
            });
            _this.chageCitys();
        }, function (err) {
            _this.openModal("Falha ao localizar empresa!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].ERROR);
        });
    };
    EmpresasCreateComponent.prototype.newRecord = function () {
        this.listFactory();
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            cnpj: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]],
            telefone: [null, [, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            tipo: ["Matriz", [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            matriz: [null],
            endereco: this.formBuilder.group({
                cep: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                numero: [null],
                complemento: [null],
                logradouro: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                bairro: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                cidade: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                estado: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            url_logo: [""],
        });
        this.chageCitys();
    };
    EmpresasCreateComponent.prototype.onSubmite = function () {
        this.empresa = this.formulario.value;
        if (this.empresa.matriz === null) {
            this.empresa.matriz = new _shared__WEBPACK_IMPORTED_MODULE_4__["EmpresaDTO"](null, null, null, null, null);
        }
        this.save(this.empresa);
    };
    EmpresasCreateComponent.prototype.save = function (empresa) {
        var _this = this;
        this.empresaService.createOrUpdate(empresa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.empresa = null;
            var empRet = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].ERROR);
        });
    };
    EmpresasCreateComponent.prototype.listFactory = function () {
        var _this = this;
        this.empresaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.empresas = responseApi['data'];
        });
        this.cepService.getEstadosBr().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (dados) { return _this.estados = dados; });
    };
    EmpresasCreateComponent.prototype.testEmpresa = function (emp1, emp2) {
        return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2;
    };
    EmpresasCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresas-create',
            template: __webpack_require__(/*! ./empresas-create.component.html */ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.html"),
            styles: [__webpack_require__(/*! ./empresas-create.component.css */ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["EmpresaService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EmpresasCreateComponent);
    return EmpresasCreateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm\">\n    Empresas Cadastradas\n    <a [routerLink]=\"['0','add']\">\n      <button class=\" btn btn-primary btn-xs fa fa-plus-circle pull-right\" style=\"margin-top:2px;margin-right: 2px; padding: 2px;\"></button>\n    </a>\n  </div>\n  <div *ngIf=\"empresas === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"empresas !== undefined\">\n\n    <div class=\"card-body\">\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n          <tr>\n            <th>Nome</th>\n            <th>CNPJ</th>\n            <th>Telefone</th>\n            <th>E-mail</th>\n            <th>Opções</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let empresa of empresas\">\n            <td class=\"text-center\">{{empresa.nome}}</td>\n            <td class=\"text-center\">{{empresa.cnpj}}</td>\n            <td class=\"text-center\">{{empresa.telefone}}</td>\n            <td class=\"text-center\">{{empresa.email}}</td>\n            <td class=\"text-center\">\n              <a [routerLink]=\"[empresa.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-placement=\"bottom\"\n                  data-target=\"#modalUtil\" (click)=\"openModalDelete(empresa.id, empresa.nome, 'a Empresa')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ikPagination \n      [page]=\"page\" \n      [count]=\"count\" \n      [pages]=\"pages\" \n      [totalElements]=\"totalElements\" \n      (_pageData)=\"pagination($event)\">\n    </ikPagination>\n  </div>\n  <modal-message \n    (onConfirm)=\"deletar($event)\"> \n  </modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmpresasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresasListComponent", function() { return EmpresasListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmpresasListComponent = /** @class */ (function (_super) {
    __extends(EmpresasListComponent, _super);
    function EmpresasListComponent(dialogService, empresaService) {
        var _this = _super.call(this) || this;
        _this.dialogService = dialogService;
        _this.empresaService = empresaService;
        _this.empresas = [];
        return _this;
    }
    EmpresasListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    EmpresasListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.empresaService.findAllPage(page, count).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(function (responseApi) {
            _this.empresas = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    EmpresasListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Você deseja deletar a empresa selecionada?')
            .then(function (candelete) {
            if (candelete) {
                _this.empresaService.delete(id).subscribe(function (responseApi) {
                    _this.openModal("Empresa deletada com sucesso!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
                    _this.getList(_this.page, _this.count);
                    //this.dialogService.mostraDialogo("sdfsdf","info","2000")
                }, function (err) {
                    _this.openModal("Falha ao deletar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
                });
            }
        });
    };
    EmpresasListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].DELETE);
    };
    EmpresasListComponent.prototype.deletar = function (evento) {
        var _this = this;
        if (evento === true) {
            this.empresaService.delete(this.id).subscribe(function (responseApi) {
                _this.openModal("Empresa deletada com sucesso!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("Falha ao deletar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
            });
        }
    };
    EmpresasListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empresas-list',
            template: __webpack_require__(/*! ./empresas-list.component.html */ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.html"),
            styles: [__webpack_require__(/*! ./empresas-list.component.css */ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["EmpresaService"]])
    ], EmpresasListComponent);
    return EmpresasListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_2__["PageList"]));



/***/ }),

/***/ "./src/app/pages/root-user/root-user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/root-user/root-user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/root-user/root-user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/root-user/root-user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page card-transparente\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/pages/root-user/root-user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/root-user/root-user.component.ts ***!
  \********************************************************/
/*! exports provided: RootUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootUserComponent", function() { return RootUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootUserComponent = /** @class */ (function () {
    function RootUserComponent() {
    }
    RootUserComponent.prototype.ngOnInit = function () {
    };
    RootUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-user',
            template: __webpack_require__(/*! ./root-user.component.html */ "./src/app/pages/root-user/root-user.component.html"),
            styles: [__webpack_require__(/*! ./root-user.component.css */ "./src/app/pages/root-user/root-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RootUserComponent);
    return RootUserComponent;
}());



/***/ }),

/***/ "./src/app/pages/root-user/rootUser.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/root-user/rootUser.module.ts ***!
  \****************************************************/
/*! exports provided: RootUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootUserModule", function() { return RootUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _rootUser_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootUser.routing */ "./src/app/pages/root-user/rootUser.routing.ts");
/* harmony import */ var _root_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-user.component */ "./src/app/pages/root-user/root-user.component.ts");
/* harmony import */ var _usuarios_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios/usuarios-list/usuarios-list.component */ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.ts");
/* harmony import */ var _usuarios_usuarios_create_usuarios_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usuarios/usuarios-create/usuarios-create.component */ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.ts");
/* harmony import */ var _empresas_empresas_list_empresas_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./empresas/empresas-list/empresas-list.component */ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.ts");
/* harmony import */ var _empresas_empresas_create_empresas_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./empresas/empresas-create/empresas-create.component */ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RootUserModule = /** @class */ (function () {
    function RootUserModule() {
    }
    RootUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _Angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _rootUser_routing__WEBPACK_IMPORTED_MODULE_4__["RootUserRoutingModule"]
            ],
            declarations: [_root_user_component__WEBPACK_IMPORTED_MODULE_5__["RootUserComponent"],
                _usuarios_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_6__["UsuariosListComponent"], _usuarios_usuarios_create_usuarios_create_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosCreateComponent"], _empresas_empresas_list_empresas_list_component__WEBPACK_IMPORTED_MODULE_8__["EmpresasListComponent"], _empresas_empresas_create_empresas_create_component__WEBPACK_IMPORTED_MODULE_9__["EmpresasCreateComponent"]],
            exports: [_root_user_component__WEBPACK_IMPORTED_MODULE_5__["RootUserComponent"]]
        })
    ], RootUserModule);
    return RootUserModule;
}());



/***/ }),

/***/ "./src/app/pages/root-user/rootUser.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/root-user/rootUser.routing.ts ***!
  \*****************************************************/
/*! exports provided: RootUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootUserRoutingModule", function() { return RootUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _root_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root-user.component */ "./src/app/pages/root-user/root-user.component.ts");
/* harmony import */ var _empresas_empresas_list_empresas_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empresas/empresas-list/empresas-list.component */ "./src/app/pages/root-user/empresas/empresas-list/empresas-list.component.ts");
/* harmony import */ var _empresas_empresas_create_empresas_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empresas/empresas-create/empresas-create.component */ "./src/app/pages/root-user/empresas/empresas-create/empresas-create.component.ts");
/* harmony import */ var _usuarios_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios/usuarios-list/usuarios-list.component */ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.ts");
/* harmony import */ var _usuarios_usuarios_create_usuarios_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios/usuarios-create/usuarios-create.component */ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var rootUserRoutes = [
    { path: '', component: _root_user_component__WEBPACK_IMPORTED_MODULE_2__["RootUserComponent"],
        children: [
            { path: 'empresas', component: _empresas_empresas_list_empresas_list_component__WEBPACK_IMPORTED_MODULE_3__["EmpresasListComponent"] },
            { path: 'empresas/:id/add', component: _empresas_empresas_create_empresas_create_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasCreateComponent"] },
            { path: 'empresas/:id/edit', component: _empresas_empresas_create_empresas_create_component__WEBPACK_IMPORTED_MODULE_4__["EmpresasCreateComponent"] },
            { path: 'usuarios', component: _usuarios_usuarios_list_usuarios_list_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosListComponent"] },
            { path: 'usuarios/:id/add', component: _usuarios_usuarios_create_usuarios_create_component__WEBPACK_IMPORTED_MODULE_6__["UsuariosCreateComponent"] },
            { path: 'usuarios/:id/edit', component: _usuarios_usuarios_create_usuarios_create_component__WEBPACK_IMPORTED_MODULE_6__["UsuariosCreateComponent"] },
        ]
    },
];
var RootUserRoutingModule = /** @class */ (function () {
    function RootUserRoutingModule() {
    }
    RootUserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(rootUserRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RootUserRoutingModule);
    return RootUserRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top sombra\">\n    Cadastro de Usuário\n    <a [routerLink]=\"['/root/usuarios']\">\n      <button class=\" btn btn-warning btn-xs fa fa-arrow-circle-left pull-right\" style=\"margin-top:2px;margin-right: 2px; padding: 2px;\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"cadastro-tab\" data-toggle=\"tab\" href=\"#cadastro\" role=\"tab\" aria-controls=\"cadastro\"\n          aria-selected=\"true\">Cadastro</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"turmas-tab\" data-toggle=\"tab\" href=\"#turmas\" role=\"tab\" aria-controls=\"turmas\"\n          aria-selected=\"false\">Turmas</a>\n      </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n      <div class=\"row tab-pane fade show active\" id=\"cadastro\" role=\"tabpanel\" aria-labelledby=\"cadastro-tab\">\n\n        <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n          <div class=\"col-xl-12 card-flat\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-3 text-center\">\n                <div *ngIf=\"user === undefined\" class=\"text-center\">\n                  <loading-spinner></loading-spinner>\n                </div>\n                <img [src]=\"user.url_perfil\" class=\"img-fluid img-thumbnail\" style=\"width: 150px;\" *ngIf=\"user !== undefined\" />\n                <button type=\"button\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#ikUpload\">Upload\n                  foto</button>\n              </div>\n\n              <div class=\"col-xs-12 col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Nome</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nome\" ikUpCase />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"roles\">Email</label>\n                      <input type=\"email\" class=\"form-control\" formControlName=\"email\" ikLoCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Senha</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"senha\" ikUpCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label for=\"status\" class=\"control-label\">Status</label>\n                      <select class=\"form-control\" id=\"status\" formControlName=\"ativo\">\n                        <option value=true>Ativo</option>\n                        <option value=false>Inativo</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Telefone</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"telefone\" />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <div class=\"form-group\">\n                      <label>Celular</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"celular\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-12 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"roles\">Perfis</label>\n                  <app-checkbox-group [options]=\"userPerfis\" (toggle)=\"onRolesChange($event)\"></app-checkbox-group>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12 col-md-12\">\n                <div class=\"row\">\n\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>CPF</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"cpf\" IkMask=\"999.999.999-99\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>RG</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"rg\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Data Nascimento</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"dataNascimento\" IkMask=\"99/99/9999\" />\n                    </div>\n                  </div>\n\n                  <div class=\"form-group  col-xs-12 col-md-3\">\n                    <label for=empresa class=\"control-label\">Empresa</label>\n                    <select class=\"form-control\" id=\"empresa\" formControlName=\"empresa\" [compareWith]=\"testEmpresa\">\n                      <option *ngFor=\"let empresa of empresas\" [ngValue]=\"empresa\">{{empresa.nome}}</option>\n                    </select>\n                  </div>\n                  <div class=\"col-sm-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"sexo\" class=\"control-label\">Sexo</label>\n                      <select class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\n                        <option value=\"Masculino\">M</option>\n                        <option value=\"Feminino\">F</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Peso</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"peso\" />\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-xs-12 col-md-3\">\n                    <label for=empresa class=\"control-label\">Plano</label>\n                    <select class=\"form-control\" id=\"plano\" formControlName=\"plano\" [compareWith]=\"testPlano\">\n                      <option value=\"\" selected disabled>Selecione o Plano...</option>\n                      <option *ngFor=\"let plano of planos\" [ngValue]=\"plano\">{{plano.nome}}</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Dia Pagamento</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"diaPagamento\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-sm-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"tipoUser\" class=\"control-label\">Tipo</label>\n                      <select class=\"form-control\" id=\"tipoUser\" formControlName=\"tipoUser\">\n                        <option value=\"ADM_Sistema\">Administrador Sistema</option>\n                        <option value=\"ADM_Empresa\">Administrador Empresa</option>\n                        <option value=\"Instrutor\">Instrutor</option>\n                        <option value=\"Aluno\">Aluno</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 card-flat\">\n            <div formGroupName=\"endereco\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cep\" class=\"control-label\">CEP</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cep\" (blur)=\"consultaCEP()\" formControlName=\"cep\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"rua\" class=\"control-label\">Rua</label>\n                    <input type=\"text\" class=\"form-control\" id=\"rua\" formControlName=\"logradouro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"numero\" class=\"control-label\">Número</label>\n                    <input type=\"text\" class=\"form-control\" id=\"numero\" formControlName=\"numero\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"complemento\" class=\"control-label\">Complemento</label>\n                    <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"bairro\" class=\"control-label\">Bairro</label>\n                    <input type=\"text\" class=\"form-control\" id=\"bairro\" formControlName=\"bairro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cidade\" class=\"control-label\">Cidade</label>\n                    <select class=\"form-control\" id=\"cidade\" formControlName=\"cidade\">\n                      <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"estado\" class=\"control-label\">Estado</label>\n                    <select class=\"form-control\" id=\"estado\" formControlName=\"estado\">\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row align-items-center\">\n          <div class=\"col-10\">\n            <div class=\"form-group\">\n              <label>Observação</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"obs\" />\n            </div>\n          </div>\n          <div class=\"col-2\">\n            <button type=\"submit\" title=\"Salvar registro\" class=\"btn btn-primary pull-right sombra-btn\" \n               [disabled]=\"!formulario.valid\" style=\"vertical-align: middle; color: black\"><strong>Salvar</strong></button>\n          </div>\n        </div>\n        </form>\n\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"turmas\" role=\"tabpanel\" aria-labelledby=\"turmas-tab\">\n\n        <div class=\"col-xs-12 col-md-3\">\n          <form [formGroup]=\"frmTurma\" (ngSubmit)=\"addTurma(frmTurma.value.turma)\">\n            <label for=turmas class=\"control-label\">Turmas</label>\n            <select class=\"form-control\" id=\"turmas\" formControlName=\"turma\">\n              <option *ngFor=\"let turma of turmasDB\" [ngValue]=\"turma\">{{turma.dia}}/{{ turma.horario}}</option>\n            </select>\n            <button type=\"submit\">Adicionar</button>\n          </form>\n        </div>\n\n\n        <div class=\"col-xs-12 card-flat\">\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th>Dia</th>\n                <th>Horário</th>\n                <th>Instrutor</th>\n                <th>Opções</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let turma of turmas\">\n                <td class=\"text-center\">{{turma.dia | diaSemana}}</td>\n                <td class=\"text-center\">{{turma.horario}}</td>\n                <td class=\"text-center\">{{turma.instrutor.nome}}</td>\n                <td class=\"text-center\">\n                  <a class=\"componenteform\">\n                    <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-placement=\"bottom\"\n                      data-target=\"#modalUtil\" (click)=\"removeTurma(turma.id)\">\n                    </button>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ik-upload [id]=\"id\" [basePath]=\"pathUpload\" (urlFileUpload)=\"receiveUrl($event)\"> </ik-upload>\n  <modal-message></modal-message>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UsuariosCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosCreateComponent", function() { return UsuariosCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsuariosCreateComponent = /** @class */ (function (_super) {
    __extends(UsuariosCreateComponent, _super);
    function UsuariosCreateComponent(usuariosService, empresaService, planoService, turmaService, formBuilder, cepService, route) {
        var _this = _super.call(this, formBuilder, cepService, route) || this;
        _this.usuariosService = usuariosService;
        _this.empresaService = empresaService;
        _this.planoService = planoService;
        _this.turmaService = turmaService;
        _this.formBuilder = formBuilder;
        _this.cepService = cepService;
        _this.route = route;
        _this.perfis = [];
        _this.userPerfis = new Array();
        _this.pathUpload = "/usuarios";
        _this.shared = _services__WEBPACK_IMPORTED_MODULE_6__["SharedService"].getInstance();
        _this.frmTurma = _this.formBuilder.group({
            turma: [null]
        });
        return _this;
    }
    UsuariosCreateComponent.prototype.findById = function (id) {
        var _this = this;
        this.usuariosService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.turmas = _this.user.turmas;
            _this.cepService.getCidadeNome(_this.user.endereco.cidade).subscribe(function (dados) { return _this.cidades = dados; });
            _this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_5__["Listas"]._perfil.map(function (x) {
                if (_this.user.perfis.includes(x.perfil)) {
                    _this.perfis.push(x.cod);
                    return new _components__WEBPACK_IMPORTED_MODULE_4__["CheckboxItem"](x.cod, x.perfil, true);
                }
                else {
                    return new _components__WEBPACK_IMPORTED_MODULE_4__["CheckboxItem"](x.cod, x.perfil, false);
                }
            });
            _this.onRolesChange(_this.perfis);
            _this.listFactory();
            var dt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('pt-BR');
            _this.formulario = _this.formBuilder.group({
                id: [_this.user.id],
                nome: [_this.user.nome, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                email: [_this.user.email, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                ativo: [_this.user.ativo],
                senha: [_this.user.senha, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                endereco: _this.formBuilder.group({
                    cep: [_this.user.endereco.cep, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    numero: [_this.user.endereco.numero],
                    complemento: [_this.user.endereco.complemento],
                    logradouro: [_this.user.endereco.logradouro, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    bairro: [_this.user.endereco.bairro, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    estado: [_this.user.endereco.estado, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    cidade: [_this.user.endereco.cidade, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                }),
                telefone: [_this.user.telefone],
                celular: [_this.user.celular],
                rg: [_this.user.rg],
                cpf: [_this.user.cpf],
                dataNascimento: [dt.transform(_this.user.dataNascimento, 'dd/MM/yyyy')],
                dataCadastro: [_this.user.dataCadastro],
                sexo: [_this.user.sexo],
                peso: [_this.user.peso],
                diaPagamento: [_this.user.diaPagamento],
                plano: [_this.user.plano],
                obs: [_this.user.obs],
                tipoUser: [_this.user.tipoUser],
                turmas: [_this.turmas],
                empresa: [_this.user.empresa],
                url_perfil: [_this.user.url_perfil],
            });
            _this.chageCitys();
            _this.id = _this.formulario.value.id;
        }, function (err) {
            _this.openModal("Falha ao localizar usu\u00E1rio!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    UsuariosCreateComponent.prototype.newRecord = function () {
        this.listFactory();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_5__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_4__["CheckboxItem"](x.cod, x.perfil); });
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            email: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            ativo: [true],
            senha: ['123456', [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            endereco: this.formBuilder.group({
                cep: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                numero: [null],
                complemento: [null],
                logradouro: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                bairro: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                estado: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                cidade: [null, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }),
            telefone: [null],
            celular: [null],
            rg: [null],
            cpf: [null],
            dataNascimento: [null],
            dataCadastro: [null],
            sexo: [null],
            peso: [null],
            diaPagamento: [null],
            plano: [null],
            obs: [null],
            tipoUser: [null],
            turmas: [this.turmas],
            empresa: [null],
            url_perfil: ['/assets/img/prod.jpg'],
        });
        this.chageCitys();
    };
    UsuariosCreateComponent.prototype.onSubmite = function () {
        if (this.formulario.value.id === null) {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.dataCadastro = new Date();
            this.save(this.user);
        }
        else {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.dtr = this.formulario.value.dataNascimento;
            this.user.dataNascimento = null;
            this.update(this.user);
        }
    };
    UsuariosCreateComponent.prototype.save = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.user = _this.shared.userEmpty;
            var userRet = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    UsuariosCreateComponent.prototype.update = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this.openModal("Dados editados com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha ao editar!!(" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    UsuariosCreateComponent.prototype.addTurma = function (turma) {
        this.turmas.push(turma);
    };
    UsuariosCreateComponent.prototype.removeTurma = function (turma) {
        this.turmas.splice(this.turmas.indexOf(this.verificaTurma(turma)), 1);
    };
    UsuariosCreateComponent.prototype.verificaTurma = function (turma) {
        var turmaEncontrada = this.turmas.find(function (t) { return t.id === turma.id; });
        return turmaEncontrada;
    };
    UsuariosCreateComponent.prototype.receiveUrl = function (evento) {
        var _this = this;
        this.usuariosService.updateUrlPerfil(evento, this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this.findById(_this.id);
            _this.openModal("Upload ok", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha no upload!!(" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    UsuariosCreateComponent.prototype.listFactory = function () {
        var _this = this;
        this.empresaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.empresas = responseApi['data'];
        });
        this.planoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.planos = responseApi['data'];
        });
        this.turmaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.turmasDB = responseApi['data'];
        });
        this.cepService.getEstadosBr().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (dados) { return _this.estados = dados; });
    };
    UsuariosCreateComponent.prototype.onRolesChange = function (value) {
        this.perfis = value;
    };
    UsuariosCreateComponent.prototype.resetForm = function () {
        this.formulario.reset();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_5__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_4__["CheckboxItem"](x.cod, x.perfil); });
    };
    UsuariosCreateComponent.prototype.testEmpresa = function (emp1, emp2) {
        return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2;
    };
    UsuariosCreateComponent.prototype.testPlano = function (plano1, plano2) {
        return plano1 && plano2 ? (plano1.nome === plano2.nome && plano1.id === plano2.id) : plano1 === plano2;
    };
    UsuariosCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios-create',
            template: __webpack_require__(/*! ./usuarios-create.component.html */ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.html"),
            styles: [__webpack_require__(/*! ./usuarios-create.component.css */ "./src/app/pages/root-user/usuarios/usuarios-create/usuarios-create.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["EmpresaService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["PlanoService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["TurmaService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_6__["ConsultaCepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UsuariosCreateComponent);
    return UsuariosCreateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_5__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  \n  <div class=\"page-top shadow-sm\">\n    Usuarios Cadastrados\n    <a [routerLink]=\"['0','add']\">\n      <button class=\" btn btn-primary btn-xs fa fa-plus-circle pull-right\" \n        style=\"margin-top:2px;margin-right: 2px; padding: 2px;\"></button>\n    </a>  \n  </div>\n  <div *ngIf=\"usuarios === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"usuarios !== undefined\">\n  \n  <div class=\"card-body\">\n    <table class=\"table table-striped table-bordered\">\n      <thead>\n        <tr>\n          <th>Nome</th>\n          <th>Empresa</th>\n          <th>Celular</th>\n          <th>Email</th>\n          <th>Opções</th>\n        </tr> \n      </thead>\n      <tbody>  \n        <tr *ngFor=\"let usuario of usuarios\">\n          <td>{{usuario.nome}}</td> \n          <td class=\"text-center\">{{usuario.empresa.nome}}</td>\n          <td class=\"text-center\">{{usuario.celular}}</td>\n          <td class=\"text-center\">{{usuario.email}}</td>\n          <td class=\"text-center\">\n            <a [routerLink]=\"[usuario.id, 'edit']\" class=\"componenteform\">\n              <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" \n              data-toggle=\"tooltip\" data-placement=\"bottom\"></button>\n            </a>\n            <a class=\"componenteform\">\n              <button type=\"button\" class=\"btn btn-info fa fa-retweet sombra-btn\" \n                title=\"Resetar Senha\" data-placement=\"bottom\" (click)=\"resetPassword(usuario.email)\">\n              </button>\n            </a>\n            <a class=\"componenteform\" *ngIf=\"usuario.isAtivo === true\">\n              <button type=\"button\" class=\"btn btn-warning fa fa-level-down sombra-btn\" \n                title=\"Desabilitar\" data-placement=\"bottom\" (click)=\"isAtivo('false', usuario.id)\">\n              </button>\n            </a>\n            <a class=\"componenteform\" *ngIf=\"usuario.isAtivo === false\">\n              <button type=\"button\" class=\"btn btn-success fa fa-level-up sombra-btn\" \n                title=\"Habilitar\" data-placement=\"bottom\" (click)=\"isAtivo('true', usuario.id)\">\n              </button>\n            </a>\n            <a class=\"componenteform\">\n              <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\"  \n                title=\"Deletar\" data-placement=\"bottom\" data-target=\"#modalUtil\" (click)=\"openModalDelete(usuario.id, usuario.nome, 'o Usuário')\">\n              </button>\n            </a>\n          </td>\n        </tr>\n      </tbody>  \n    </table>\n\n    <ikPagination \n      [page]=\"page\" \n      [count]=\"count\" \n      [pages]=\"pages\" \n      [totalElements]=\"totalElements\" \n      (_pageData)=\"pagination($event)\">\n    </ikPagination>\n    \n    <modal-message\n      (onConfirm)=\"deletar($event)\">\n    </modal-message>\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UsuariosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListComponent", function() { return UsuariosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuariosListComponent = /** @class */ (function (_super) {
    __extends(UsuariosListComponent, _super);
    function UsuariosListComponent(dialogService, usuariosService) {
        var _this = _super.call(this) || this;
        _this.dialogService = dialogService;
        _this.usuariosService = usuariosService;
        _this.usuarios = [];
        return _this;
    }
    UsuariosListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    UsuariosListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.usuariosService.findAll(page, count).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(function (responseApi) {
            _this.usuarios = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    UsuariosListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].DELETE);
    };
    UsuariosListComponent.prototype.deletar = function (evento) {
        var _this = this;
        if (evento === true) {
            this.usuariosService.delete(this.id).subscribe(function (responseApi) {
                _this.openModal("Usu\u00E1rio deletado com sucesso!", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("Falha ao deletar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
            });
        }
    };
    UsuariosListComponent.prototype.resetPassword = function (email) {
    };
    UsuariosListComponent.prototype.isAtivo = function (status, id) {
        var _this = this;
        if (status != null) {
            this.usuariosService.updateStatus(status, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("erro ao modificar status: (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
            });
        }
    };
    UsuariosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuarios-list',
            template: __webpack_require__(/*! ./usuarios-list.component.html */ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.html"),
            styles: [__webpack_require__(/*! ./usuarios-list.component.css */ "./src/app/pages/root-user/usuarios/usuarios-list/usuarios-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["DialogService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UsuariosListComponent);
    return UsuariosListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_4__["PageList"]));



/***/ })

}]);
//# sourceMappingURL=pages-root-user-rootUser-module.js.map
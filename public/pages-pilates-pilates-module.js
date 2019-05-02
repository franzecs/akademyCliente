(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pilates-pilates-module"],{

/***/ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top sombra\">\n    Cadastro de Aluno\n    <a [routerLink]=\"['/pilates/alunos']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"cadastro-tab\" data-toggle=\"tab\" href=\"#cadastro\" role=\"tab\" aria-controls=\"cadastro\"\n          aria-selected=\"true\">Cadastro</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"turmas-tab\" data-toggle=\"tab\" href=\"#turmas\" role=\"tab\" aria-controls=\"turmas\"\n          aria-selected=\"false\">Turmas</a>\n      </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n      <div class=\"row tab-pane fade show active\" id=\"cadastro\" role=\"tabpanel\" aria-labelledby=\"cadastro-tab\">\n\n        <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n          <div class=\"col-xl-12 card-flat\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-3 text-center\">\n                <div *ngIf=\"user === undefined\" class=\"text-center\" style=\"width: 150px; margin-top: 10px;\">\n                  <loading-spinner></loading-spinner>\n                </div>\n                <img [src]=\"user.url_perfil\" class=\"img-fluid img-thumbnail\" style=\"width: 150px; height: 150px;\" *ngIf=\"user !== undefined\" />\n                <button type=\"button\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#ikUpload\"\n                          [disabled]=\"!formulario.value.id\">Upload foto</button>\n              </div>\n\n              <div class=\"col-xs-12 col-md-9\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Nome</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nome\" ikUpCase />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"roles\">Email</label>\n                      <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" ikLoCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Senha</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"senha\" ikUpCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-sm-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label for=\"status\" class=\"control-label\">Status</label>\n                      <select class=\"form-control\" id=\"status\" formControlName=\"ativo\">\n                        <option value=true>Ativo</option>\n                        <option value=false>Inativo</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Telefone</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"telefone\" IkMask=\"(99) 9999-9999\" />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Celular</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"celular\" IkMask=\"(99) 99999-9999\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>CPF</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"cpf\" IkMask=\"999.999.999-99\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12 col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>RG</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"rg\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Dt Nasc. ( {{idade}} )</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"dataNascimento\" IkMask=\"99/99/9999\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-sm-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"sexo\" class=\"control-label\">Sexo</label>\n                      <select class=\"form-control\" id=\"sexo\" formControlName=\"sexo\">\n                        <option value=\"Masculino\">M</option>\n                        <option value=\"Feminino\">F</option>\n                      </select>\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-1\">\n                    <div class=\"form-group\">\n                      <label>Peso</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"peso\" />\n                    </div>\n                  </div>\n                  <div class=\"form-group  col-xs-12 col-md-2\">\n                    <label for=empresa class=\"control-label\">Plano</label>\n                    <select class=\"form-control\" id=\"plano\" formControlName=\"plano\" [compareWith]=\"testPlano\">\n                      <option value=\"\" selected disabled>Selecione o Plano...</option>\n                      <option *ngFor=\"let plano of planos\" [ngValue]=\"plano\">{{plano.nome}}</option>\n                    </select>\n                  </div>\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Pagamento</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"diaPagamento\" />\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 card-flat\">\n            <div formGroupName=\"endereco\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cep\" class=\"control-label\">CEP</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cep\" (blur)=\"consultaCEP()\" formControlName=\"cep\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"rua\" class=\"control-label\">Rua</label>\n                    <input type=\"text\" class=\"form-control\" id=\"rua\" formControlName=\"logradouro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"numero\" class=\"control-label\">Número</label>\n                    <input type=\"text\" class=\"form-control\" id=\"numero\" formControlName=\"numero\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"complemento\" class=\"control-label\">Complemento</label>\n                    <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"bairro\" class=\"control-label\">Bairro</label>\n                    <input type=\"text\" class=\"form-control\" id=\"bairro\" formControlName=\"bairro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cidade\" class=\"control-label\">Cidade</label>\n                    <select class=\"form-control\" id=\"cidade\" formControlName=\"cidade\">\n                      <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"estado\" class=\"control-label\">Estado</label>\n                    <select class=\"form-control\" id=\"estado\" formControlName=\"estado\">\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row align-items-center\">\n            <div class=\"col-10\">\n              <div class=\"form-group\">\n                <label>Observação</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"obs\" />\n              </div>\n            </div>\n            <div class=\"col-2\">\n              <button type=\"submit\" title=\"Salvar registro\" class=\"btn btn-primary pull-right sombra-btn\" [disabled]=\"!formulario.valid\"\n                style=\"vertical-align: middle; color: black\"><strong>Salvar</strong></button>\n            </div>\n          </div>\n        </form>\n\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"turmas\" role=\"tabpanel\" aria-labelledby=\"turmas-tab\">\n\n        <div class=\"col-xs-12 col-md-3 align-items-center\">\n          <form [formGroup]=\"frmTurma\" (ngSubmit)=\"addTurma(frmTurma.value.turma)\" class=\"form-inline \">\n            <div class=\"form-group\">\n              <select class=\"form-control\" id=\"turmas\" formControlName=\"turma\" title=\"Selecione a turma\">\n                <option *ngFor=\"let turma of turmasDB\" [ngValue]=\"turma\">{{turma.dia}}/{{ turma.horario}}/{{turma.instrutor.nome}}</option>\n              </select>\n              <button type=\"submit\" class=\"btn btn-success fa fa-plus sombra-btn\" style=\"margin-left: 5px\"></button>\n            </div>\n          </form>\n        </div>\n\n\n        <div class=\"col-xs-12 card-flat\">\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th>Dia</th>\n                <th>Horário</th>\n                <th>Instrutor</th>\n                <th>Opções</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let turma of turmas\">\n                <td class=\"text-center\">{{turma.dia | diaSemana}}</td>\n                <td class=\"text-center\">{{turma.horario}}</td>\n                <td class=\"text-center\">{{turma.instrutor.nome}}</td>\n                <td class=\"text-center\">\n                  <a class=\"componenteform\">\n                    <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-placement=\"bottom\"\n                      data-target=\"#modalUtil\" (click)=\"removeTurma(turma.id)\">\n                    </button>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ik-upload [id]=\"id\" [basePath]=\"pathUpload\" (urlFileUpload)=\"receiveUrl($event)\"> </ik-upload>\n  <modal-message></modal-message>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AlunosCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosCreateOrUpdateComponent", function() { return AlunosCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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








var AlunosCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(AlunosCreateOrUpdateComponent, _super);
    function AlunosCreateOrUpdateComponent(usuariosService, authService, planoService, turmaService, formBuilder, cepService, route) {
        var _this = _super.call(this, formBuilder, cepService, route) || this;
        _this.usuariosService = usuariosService;
        _this.authService = authService;
        _this.planoService = planoService;
        _this.turmaService = turmaService;
        _this.formBuilder = formBuilder;
        _this.cepService = cepService;
        _this.route = route;
        _this.perfis = [];
        _this.userPerfis = new Array();
        _this.pathUpload = '/usuarios';
        _this.idade = 0;
        _this.shared = _services__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
        _this.frmTurma = _this.formBuilder.group({
            turma: [null]
        });
        return _this;
    }
    AlunosCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.usuariosService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.turmas = _this.user.turmas;
            _this.idade = new Date().getFullYear() - new Date(_this.user.dataNascimento).getFullYear();
            _this.cepService.getCidadeNome(_this.user.endereco.cidade).subscribe(function (dados) { return _this.cidades = dados; });
            _this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) {
                if (_this.user.perfis.includes(x.perfil)) {
                    _this.perfis.push(x.cod);
                    return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil, true);
                }
                else {
                    return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil, false);
                }
            });
            _this.onRolesChange(_this.perfis);
            _this.listFactory();
            var dt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('pt-BR');
            _this.formulario = _this.formBuilder.group({
                id: [_this.user.id],
                nome: [_this.user.nome, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                email: [_this.user.email, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                ativo: [_this.user.ativo],
                senha: [_this.user.senha, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
                endereco: _this.formBuilder.group({
                    cep: [_this.user.endereco.cep],
                    numero: [_this.user.endereco.numero],
                    complemento: [_this.user.endereco.complemento],
                    logradouro: [_this.user.endereco.logradouro],
                    bairro: [_this.user.endereco.bairro],
                    estado: [_this.user.endereco.estado],
                    cidade: [_this.user.endereco.cidade],
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
            _this.openModal("Falha ao localizar usu\u00E1rio!! (" + err.error.message + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    AlunosCreateOrUpdateComponent.prototype.newRecord = function () {
        var _this = this;
        this.listFactory();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil); });
        this.authService.getCurrentUser().subscribe(function (resposta) {
            _this.empresaUser = resposta['data'].empresa;
        });
        this.perfis.push('4');
        this.perfis.push('5');
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            email: [this.shared.emailFactory(), [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            ativo: [true],
            senha: ['123456', [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            endereco: this.formBuilder.group({
                cep: [null],
                numero: [null],
                complemento: [null],
                logradouro: [null],
                bairro: [null],
                estado: [null],
                cidade: [null],
            }),
            telefone: [null],
            celular: [null],
            rg: [null],
            cpf: [null],
            dataNascimento: [new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('pt-BR').transform(new Date(), 'dd/MM/yyyy')],
            dataCadastro: [null],
            sexo: [null],
            peso: [null],
            diaPagamento: [null],
            plano: [null],
            obs: [null],
            tipoUser: ['Aluno'],
            turmas: [this.turmas],
            empresa: [this.empresaUser],
            url_perfil: ['../../../../../assets/img/prod.webp'],
        });
        this.chageCitys();
    };
    AlunosCreateOrUpdateComponent.prototype.onSubmite = function () {
        if (this.formulario.value.id === null) {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.empresa = this.empresaUser;
            this.user.dataCadastro = new Date();
            this.user.dtr = this.formulario.value.dataNascimento;
            this.user.dataNascimento = null;
            this.testEmail(this.user);
        }
        else {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.dtr = this.formulario.value.dataNascimento;
            this.user.dataNascimento = null;
            if (this.formulario.value.ativo === "false") {
                this.user.turmas = [];
            }
            this.update(this.user);
        }
    };
    AlunosCreateOrUpdateComponent.prototype.save = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (responseApi) {
            _this.user = _this.shared.userEmpty;
            var userRet = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err.error.message + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    AlunosCreateOrUpdateComponent.prototype.update = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.openModal("Dados editados com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha ao editar!!(" + err.error.message + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    AlunosCreateOrUpdateComponent.prototype.addTurma = function (turma) {
        this.turmas.push(turma);
    };
    AlunosCreateOrUpdateComponent.prototype.removeTurma = function (turma) {
        this.turmas.splice(this.turmas.indexOf(this.verificaTurma(turma)), 1);
    };
    AlunosCreateOrUpdateComponent.prototype.verificaTurma = function (turma) {
        var turmaEncontrada = this.turmas.find(function (t) { return t.id === turma.id; });
        return turmaEncontrada;
    };
    AlunosCreateOrUpdateComponent.prototype.receiveUrl = function (evento) {
        var _this = this;
        this.usuariosService.updateUrlPerfil(evento, this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
            _this.findById(_this.id);
            _this.openModal("Upload ok", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha no upload!!(" + err.error.message + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    AlunosCreateOrUpdateComponent.prototype.listFactory = function () {
        var _this = this;
        this.planoService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.planos = responseApi['data'];
        });
        this.turmaService.findOnlyTurmas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.turmasDB = responseApi['data'];
        });
        this.cepService.getEstadosBr().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (dados) { return _this.estados = dados; });
    };
    AlunosCreateOrUpdateComponent.prototype.onRolesChange = function (value) {
        this.perfis = value;
    };
    AlunosCreateOrUpdateComponent.prototype.resetForm = function () {
        this.formulario.reset();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil); });
    };
    AlunosCreateOrUpdateComponent.prototype.testEmpresa = function (emp1, emp2) {
        return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2;
    };
    AlunosCreateOrUpdateComponent.prototype.testPlano = function (plano1, plano2) {
        return plano1 && plano2 ? (plano1.nome === plano2.nome && plano1.id === plano2.id) : plano1 === plano2;
    };
    AlunosCreateOrUpdateComponent.prototype.testEmail = function (usuario) {
        var _this = this;
        this.authService.currentUser(usuario.email).subscribe(function (resposta) {
            if (resposta['data'].email != usuario.email) {
                _this.save(usuario);
            }
            else {
                _this.openModal('Email já utilizado!', _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
                document.getElementById('email').focus();
            }
        });
    };
    AlunosCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alunos-create-or-update',
            template: __webpack_require__(/*! ./alunos-create-or-update.component.html */ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./alunos-create-or-update.component.css */ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["PlanoService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["TurmaService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ConsultaCepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AlunosCreateOrUpdateComponent);
    return AlunosCreateOrUpdateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_1__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\r\n    color: red;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm\">\n    <div class=\"row btn-toolbar\" role=\"toolbar\">\n      <div class=\"col-sm-6 text-center\">\n        Alunos Cadastrados\n      </div>\n      <div class=\"input-group col-sm-4\" role=\"group\" style=\"margin-top: 2px;\">\n        <select class=\"form-control search-input\" id=\"status\" [(ngModel)]=\"count\" (change)=\"ngOnInit()\">\n          <option *ngFor=\"let opt of counts\" [ngValue]=\"opt\">{{opt}}</option>\n        </select>\n        <input type=\"text\" class=\"form-control search-bar\" id=\"nomeAluno\" [(ngModel)]=\"search\" (keyup)=\"ngOnInit()\"\n          placeholder=\"Nome Aluno\" title=\"Busca de aluno\">\n      </div>\n      <a>\n          <button class=\"btn btn-dwn btn-xs btn-pdr text-center fa fa-download sombra-btn\" \n          type=\"button\" title=\"Baixar Dados\" (click)=\"baixarPlanilha()\"></button>\n        </a>\n        <a [routerLink]=\"['0','add']\">\n          <button class=\" btn btn-success btn-xs btn-pdr  fa fa-plus-circle pull-rigth sombra-btn\" \n            type=\"button\" title=\"Novo Aluno\"></button>\n        </a>\n    </div>\n  </div>\n\n  <div *ngIf=\"usuarios === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"usuarios !== undefined\">\n\n    <div class=\"card-body\" id=\"tbbx\">\n      <table class=\"table table-striped table-bordered table-sm\" id=\"tablebx\">\n        <thead>\n          <tr>\n            <th>Nome</th>\n            <th>Celular</th>\n            <th>Email</th>\n            <th>Opções</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let usuario of usuarios\">\n            <td [class.red]=\"usuario.ativo === false\">{{usuario.nome}}</td>\n            <td class=\"text-center\">{{usuario.celular}}</td>\n            <td class=\"text-center\">{{usuario.email}}</td>\n            <td class=\"text-center\">\n              <a [routerLink]=\"[usuario.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-info fa fa-retweet sombra-btn\" title=\"Resetar Senha\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\" (click)=\"resetPassword(usuario.email)\">\n                </button>\n              </a>\n              <a class=\"componenteform\" *ngIf=\"usuario.ativo === true\">\n                <button type=\"button\" class=\"btn btn-warning fa fa-level-down sombra-btn\" title=\"Desabilitar\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\" (click)=\"isAtivo('false', usuario.id)\">\n                </button>\n              </a>\n              <a class=\"componenteform\" *ngIf=\"usuario.ativo === false\">\n                <button type=\"button\" class=\"btn btn-success fa fa-level-up sombra-btn\" title=\"Habilitar\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\" (click)=\"isAtivo('true', usuario.id)\">\n                </button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\" data-target=\"#modalUtil\" (click)=\"openModalDelete(usuario.id, usuario.nome, 'o Aluno')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <ikPagination [page]=\"page\" [count]=\"count\" [pages]=\"pages\" [totalElements]=\"totalElements\" (_pageData)=\"pagination($event)\">\n      </ikPagination>\n\n      <modal-message (onConfirm)=\"deletar($event)\">\n      </modal-message>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: AlunosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosListComponent", function() { return AlunosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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






var AlunosListComponent = /** @class */ (function (_super) {
    __extends(AlunosListComponent, _super);
    function AlunosListComponent(usuariosService, router) {
        var _this = _super.call(this) || this;
        _this.usuariosService = usuariosService;
        _this.router = router;
        _this.usuarios = [];
        _this.shared = _services__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
        return _this;
    }
    AlunosListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    AlunosListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.usuariosService.findAllByTipoNome(page, count, 'Aluno', this.search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (responseApi) {
            _this.usuarios = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
        });
    };
    AlunosListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].DELETE);
    };
    AlunosListComponent.prototype.deletar = function (evento) {
        var _this = this;
        if (evento === true) {
            this.usuariosService.delete(this.id).subscribe(function (responseApi) {
                _this.openModal("Aluno deletado com sucesso!", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].SUCCESS);
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("Falha ao deletar!! (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
            });
        }
    };
    AlunosListComponent.prototype.resetPassword = function (email) {
    };
    AlunosListComponent.prototype.isAtivo = function (status, id) {
        var _this = this;
        if (status != null) {
            this.usuariosService.updateStatus(status, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("erro ao modificar status: (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
            });
        }
    };
    AlunosListComponent.prototype.baixarPlanilha = function () {
        var tabela = '<table>' + document.getElementById('tablebx').innerHTML + '</table>';
        this.shared.saveXls(tabela, 'Alunos');
    };
    AlunosListComponent.prototype.creatOreditPage = function () {
        this.router.navigate(['/alunos', this.id]);
    };
    AlunosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alunos-list',
            template: __webpack_require__(/*! ./alunos-list.component.html */ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.html"),
            styles: [__webpack_require__(/*! ./alunos-list.component.css */ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AlunosListComponent);
    return AlunosListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_2__["PageList"]));



/***/ }),

/***/ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/frequencia/frequencia.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\r\n    background-color: red;\r\n}\r\n\r\n.blue{\r\n    background-color: blue;\r\n}\r\n\r\n.yellow{\r\n    background-color: yellow;\r\n}\r\n\r\n@media print {\r\n\r\n    * { \r\n        background: transparent !important; \r\n        color: #000 !important; \r\n        text-shadow: none !important; \r\n        -webkit-filter:none !important; \r\n                filter:none !important; \r\n        -ms-filter: none !important; \r\n    } \r\n\r\n    body {\r\n        margin:0; \r\n        padding:0;\r\n        line-height: 1.4em;\r\n        font: 12pt Georgia, \"Times New Roman\", Times, serif;\r\n        color: #000;\r\n    }\r\n\r\n    @page {\r\n        margin: 1.5cm;\r\n    }\r\n\r\n    .wrap { \r\n        width: 100%; \r\n        margin: 0; \r\n        float: none !important; \r\n    }\r\n\r\n    .no-print, nav, footer, video, audio, object, embed { \r\n        display:none; \r\n    }\r\n\r\n    .print {\r\n        display: block;\r\n    }\r\n\r\n    img {\r\n        max-width: 100%;\r\n    }\r\n\r\n    aside {\r\n        display:block;\r\n        page-break-before: always;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 24pt;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 18pt;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 14pt;\r\n    }\r\n    \r\n    p {\r\n        font-size: 12pt;\r\n        widows: 3;\r\n        orphans: 3;\r\n    }\r\n\r\n    a, a:visited {\r\n        text-decoration: underline;\r\n    }\r\n\r\n    a:link:after, a:visited:after { \r\n        content: \" (\" attr(href) \") \";\r\n    }\r\n\r\n    p a {\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    q:after {\r\n        content: \" (\" attr(cite) \")\"\r\n    }\r\n\r\n    a:after, a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after { \r\n        content: \"\"; \r\n    }  \r\n\r\n    .page-break { \r\n        page-break-before: always; \r\n    }\r\n    \r\n    /*Estilos da Demo*/\r\n    .header.print h1{\r\n        width: 100%;\r\n        margin-bottom: 0.5cm;\r\n        font-size: 18pt;\r\n    }\r\n\r\n    .header.print:after {\r\n        content: \"Este artigo foi escrito pela designer Dani Guerrato e retirado do site Tableless.\";\r\n    }\r\n\r\n    .artigo {\r\n        margin-top: 0;\r\n        border-top: 1px solid #000;\r\n        padding-top: 1cm;\r\n    }\r\n\r\n    h1 a:link:after, h1 a:visited:after { \r\n        content: \"\"; \r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/frequencia/frequencia.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm text-center\">\n    <strong>Frequência</strong>\n  </div>\n  <div>\n\n    <div class=\"text-center\"> \n      <button class=\"btn btn-rlt btn-lg btn-pdr fa fa-print sombra-btn\" (click)=\"relatorio()\"\n        title=\"imprimir\"> Gerar frequência do mês atual</button>\n    </div>\n\n    <!--div class=\"text-center\"> \n      <button class=\"btn btn-rlt btn-lg btn-pdr fa fa-print sombra-btn\" (click)=\"teste(2019,3)\"\n        title=\"imprimir\"> teste</button>\n    </div-->\n\n    <!--div class=\"card-body main\" id=\"tbbx\">\n      <table class=\"table table-striped table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th>Frequência</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of itensFrequencia\">\n            <td>\n              <span class=\"text-center\">\n                <strong><u>{{item.dia}} - {{item.horario}}</u></strong>\n              </span>\n          <tr>\n            <td>Aluno</td>\n            <td>01</td>\n            <td>02</td>\n            <td>03</td>\n            <td>04</td>\n            <td>05</td>\n            <td>06</td>\n            <td>07</td>\n            <td>08</td>\n            <td>09</td>\n            <td>10</td>\n            <td>11</td>\n            <td>12</td>\n            <td>13</td>\n            <td>14</td>\n            <td>15</td>\n            <td>16</td>\n            <td>17</td>\n            <td>18</td>\n            <td>19</td>\n            <td>20</td>\n            <td>21</td>\n            <td>22</td>\n            <td>23</td>\n            <td>24</td>\n            <td>25</td>\n            <td>26</td>\n            <td>27</td>\n            <td>28</td>\n            <td>29</td>\n            <td>30</td>\n            <td>31</td>\n          </tr>\n          <tr *ngFor=\"let aluno of item.alunos\">\n            <td>{{aluno.nome}}</td>\n            <td *ngFor=\"let s of dias\" [class.red]=\"s.sem === item.intDia\"></td>\n          </tr>\n          </td>\n          </tr>\n        </tbody>\n      </table>\n    </div-->\n  </div>\n</div>\n\n<modal-message>\n</modal-message>"

/***/ }),

/***/ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pilates/alunos/frequencia/frequencia.component.ts ***!
  \*************************************************************************/
/*! exports provided: FrequenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequenciaComponent", function() { return FrequenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_models_itemFrequencia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/itemFrequencia */ "./src/app/shared/models/itemFrequencia.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/relatorio.service */ "./src/app/services/relatorio.service.ts");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FrequenciaComponent = /** @class */ (function () {
    function FrequenciaComponent(turmaService, relatorioService, http) {
        this.turmaService = turmaService;
        this.relatorioService = relatorioService;
        this.http = http;
        this.mes = new Date().getMonth() + 1;
        this.dias = [
            { 'dia': '01', 'sem': new Date("2019/" + this.mes + "/01").getDay() },
            { 'dia': "02", 'sem': new Date("2019/" + this.mes + "/02").getDay() },
            { 'dia': "03", 'sem': new Date("2019/" + this.mes + "/03").getDay() },
            { 'dia': "04", 'sem': new Date("2019/" + this.mes + "/04").getDay() },
            { 'dia': "05", 'sem': new Date("2019/" + this.mes + "/05").getDay() },
            { 'dia': "06", 'sem': new Date("2019/" + this.mes + "/06").getDay() },
            { 'dia': "07", 'sem': new Date("2019/" + this.mes + "/07").getDay() },
            { 'dia': "08", 'sem': new Date("2019/" + this.mes + "/08").getDay() },
            { 'dia': "09", 'sem': new Date("2019/" + this.mes + "/09").getDay() },
            { 'dia': "10", 'sem': new Date("2019/" + this.mes + "/10").getDay() },
            { 'dia': '11', 'sem': new Date("2019/" + this.mes + "/11").getDay() },
            { 'dia': "12", 'sem': new Date("2019/" + this.mes + "/12").getDay() },
            { 'dia': "13", 'sem': new Date("2019/" + this.mes + "/13").getDay() },
            { 'dia': "14", 'sem': new Date("2019/" + this.mes + "/14").getDay() },
            { 'dia': "15", 'sem': new Date("2019/" + this.mes + "/15").getDay() },
            { 'dia': "16", 'sem': new Date("2019/" + this.mes + "/16").getDay() },
            { 'dia': "17", 'sem': new Date("2019/" + this.mes + "/17").getDay() },
            { 'dia': "18", 'sem': new Date("2019/" + this.mes + "/18").getDay() },
            { 'dia': "19", 'sem': new Date("2019/" + this.mes + "/19").getDay() },
            { 'dia': "20", 'sem': new Date("2019/" + this.mes + "/20").getDay() },
            { 'dia': '21', 'sem': new Date("2019/" + this.mes + "/21").getDay() },
            { 'dia': "22", 'sem': new Date("2019/" + this.mes + "/22").getDay() },
            { 'dia': "23", 'sem': new Date("2019/" + this.mes + "/23").getDay() },
            { 'dia': "24", 'sem': new Date("2019/" + this.mes + "/24").getDay() },
            { 'dia': "25", 'sem': new Date("2019/" + this.mes + "/25").getDay() },
            { 'dia': "26", 'sem': new Date("2019/" + this.mes + "/26").getDay() },
            { 'dia': "27", 'sem': new Date("2019/" + this.mes + "/27").getDay() },
            { 'dia': "28", 'sem': new Date("2019/" + this.mes + "/28").getDay() },
            { 'dia': "29", 'sem': new Date("2019/" + this.mes + "/29").getDay() },
            { 'dia': "30", 'sem': new Date("2019/" + this.mes + "/30").getDay() },
            { 'dia': "31", 'sem': new Date("2019/" + this.mes + "/31").getDay() }
        ];
        this.semana = [
            { 'semana': 'Segunda', 'int': 1 },
            { 'semana': 'Terça', 'int': 2 },
            { 'semana': 'Quarta', 'int': 3 },
            { 'semana': 'Quinta', 'int': 4 },
            { 'semana': 'Sexta', 'int': 5 },
        ];
        this.itensFrequencia = [];
        this.objFrq = [];
        this.shared = src_app_services__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    FrequenciaComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    FrequenciaComponent.prototype.getList = function () {
        var _this = this;
        this.turmaService.findAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (responseApi) {
            _this.turmas = responseApi.data;
            for (var _i = 0, _a = _this.turmas; _i < _a.length; _i++) {
                var t = _a[_i];
                _this.itemFrequencia = new src_app_shared_models_itemFrequencia__WEBPACK_IMPORTED_MODULE_3__["ItemFrequencia"](t.dia, t.horario, t.alunos);
                _this.itensFrequencia.push(_this.itemFrequencia);
            }
        });
    };
    FrequenciaComponent.prototype.relatorio = function () {
        var _this = this;
        this.messageModal.showAlertInfo('Gerando frequencias...');
        this.relatorioService.relFrequencia()
            .then(function (relatorio) {
            var url = window.URL.createObjectURL(relatorio);
            window.open(url);
        })
            .then(function () { return _this.messageModal.hideMsg(); });
    };
    FrequenciaComponent.prototype.teste = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_components__WEBPACK_IMPORTED_MODULE_6__["ModalMessage"]),
        __metadata("design:type", src_app_components__WEBPACK_IMPORTED_MODULE_6__["ModalMessage"])
    ], FrequenciaComponent.prototype, "messageModal", void 0);
    FrequenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frequencia',
            template: __webpack_require__(/*! ./frequencia.component.html */ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.html"),
            styles: [__webpack_require__(/*! ./frequencia.component.css */ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["TurmaService"],
            src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_5__["RelatorioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FrequenciaComponent);
    return FrequenciaComponent;
}());



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Detalhes da Despesa\n    <a [routerLink]=\"['/pilates/financeiro/despesas']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\" \n      title=\"Voltar\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n\n    <div class=\"col-xs-12\">\n      <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n        <div class=\"col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"descricao\">Descrição</label>\n                <input id=\"descricao\" type=\"text\" class=\"form-control\" formControlName=\"descricao\" />\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"dia\">Dia</label>\n                <input id=\"dia\" type=\"number\" class=\"form-control\" formControlName=\"dia\" />\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"valor\">Valor</label>\n                <input id=\"valor\" type=\"number\" class=\"form-control\" formControlName=\"valor\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formulario.valid\">Salvar</button>\n      </form>\n    </div>\n  </div>\n  <modal-message></modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DespesasCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DespesasCreateOrUpdateComponent", function() { return DespesasCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
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







var DespesasCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(DespesasCreateOrUpdateComponent, _super);
    function DespesasCreateOrUpdateComponent(itemFluxoService, authService, formBuilder, route) {
        var _this = _super.call(this, formBuilder, null, route) || this;
        _this.itemFluxoService = itemFluxoService;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.itemFluxo = new src_app_shared__WEBPACK_IMPORTED_MODULE_4__["ItemFluxoCaixa"](null, null, null, null, null, null, null, null);
        return _this;
    }
    DespesasCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.itemFluxoService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.itemFluxo = responseApi.data;
            _this.formulario = _this.formBuilder.group({
                id: [_this.itemFluxo.id],
                empresa: [_this.itemFluxo.empresa],
                fluxoCaixa: [_this.itemFluxo.fluxoCaixa],
                tipo: [_this.itemFluxo.tipo],
                dia: [_this.itemFluxo.dia],
                descricao: [_this.itemFluxo.descricao],
                valor: [_this.itemFluxo.valor],
                status: [_this.itemFluxo.status]
            });
        }, function (err) {
            _this.openModal("Falha ao localizar despesa!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    DespesasCreateOrUpdateComponent.prototype.newRecord = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (resposta) {
            _this.empresaUser = resposta['data'].empresa;
        });
        this.formulario = this.formBuilder.group({
            id: [this.itemFluxo.id],
            empresa: [this.empresaUser],
            fluxoCaixa: [this.itemFluxo.fluxoCaixa],
            tipo: ['DESPESASFIXAS'],
            dia: [this.itemFluxo.dia],
            descricao: [this.itemFluxo.descricao],
            valor: [this.itemFluxo.valor],
            status: [this.itemFluxo.status]
        });
    };
    DespesasCreateOrUpdateComponent.prototype.onSubmite = function () {
        this.itemFluxo = this.formulario.value;
        this.save(this.itemFluxo);
    };
    DespesasCreateOrUpdateComponent.prototype.save = function (itemFluxo) {
        var _this = this;
        this.itemFluxoService.createOrUpdate(itemFluxo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.itemFluxo = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    DespesasCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-despesas-create-or-update',
            template: __webpack_require__(/*! ./despesas-create-or-update.component.html */ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./despesas-create-or-update.component.css */ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_5__["ItemFluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DespesasCreateOrUpdateComponent);
    return DespesasCreateOrUpdateComponent;
}(src_app_shared__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 text-center\">\n        Despesas Cadastrados\n      </div>\n      <div class=\"col-sm-1\">\n        <select class=\"form-control search-input text-center\" id=\"status\" [(ngModel)]=\"count\" (change)=\"ngOnInit()\"\n          title=\"Registros por página\">\n          <option *ngFor=\"let opt of counts\" [ngValue]=\"opt\">{{opt}}</option>\n        </select>\n      </div>\n      <div class=\"col-sm-1\">\n        <a [routerLink]=\"['/pilates/financeiro']\">\n          <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\" title=\"voltar\"\n            title=\"Voltar\"></button>\n        </a>\n      </div>\n      <div class=\"col-sm-1\">\n        <a [routerLink]=\"['0','add']\">\n          <button class=\" btn btn-success btn-pdr btn-xs fa fa-plus-circle pull-right sombra-btn\"\n            title=\"Nova Despesa\"></button>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"despesas === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"despesas !== undefined\">\n\n    <div class=\"card-body\">\n      <table class=\"table table-striped table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th>Descrição</th>\n            <th>Valor</th>\n            <th>Opções</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let despesa of despesas\">\n            <td class=\"text-center\">{{despesa.descricao}}</td>\n            <td class=\"text-center\">{{despesa.valor | currency: 'BRL'}}</td>\n            <td class=\"text-center\">\n              <a [routerLink]=\"[despesa.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\"\n                  data-placement=\"bottom\" data-target=\"#modalUtil\"\n                  (click)=\"openModalDelete(despesa.id, despesa.descricao, 'a Despesa')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ikPagination [page]=\"page\" [count]=\"count\" [pages]=\"pages\" [totalElements]=\"totalElements\"\n      (_pageData)=\"pagination($event)\">\n    </ikPagination>\n  </div>\n  <modal-message (onConfirm)=\"deletar($event)\">\n  </modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DespesasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DespesasListComponent", function() { return DespesasListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
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





var DespesasListComponent = /** @class */ (function (_super) {
    __extends(DespesasListComponent, _super);
    function DespesasListComponent(itemFluxoService) {
        var _this = _super.call(this) || this;
        _this.itemFluxoService = itemFluxoService;
        return _this;
    }
    DespesasListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    DespesasListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.itemFluxoService.listDespesas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.despesas = responseApi;
        });
    };
    DespesasListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].DELETE);
    };
    DespesasListComponent.prototype.deletar = function (evento) {
        if (evento === true) {
            this.deleteFluxo(this.id);
        }
    };
    DespesasListComponent.prototype.deleteFluxo = function (id) {
        var _this = this;
        this.itemFluxoService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.openModal("Despesa deletada com sucesso!", src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
            _this.getList(_this.page, _this.count);
        }, function (err) {
            _this.openModal("Falha ao deletar!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    DespesasListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-despesas-list',
            template: __webpack_require__(/*! ./despesas-list.component.html */ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.html"),
            styles: [__webpack_require__(/*! ./despesas-list.component.css */ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["ItemFluxoCaixaService"]])
    ], DespesasListComponent);
    return DespesasListComponent;
}(src_app_shared__WEBPACK_IMPORTED_MODULE_2__["PageList"]));



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/financeiro.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/financeiro.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/financeiro.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/financeiro.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Resumos Financeiros ({{mes}})\n    <a [routerLink]=\"['/pilates/financeiro/fluxo']\">\n      <button class=\" btn btn-success btn-xs btn-pdr fa fa-list-ul pull-right sombra-btn\"\n        title=\"Fluxos de Caixa\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-4 card-flat\">\n        <div class=\"col-12 page-top pt-info\">Previsão faturamento</div>\n        <div *ngIf=\"alunos === undefined\" class=\"text-center\">\n          <loading-spinner></loading-spinner>\n        </div>\n        <div class=\"col-12 card-flat\" *ngIf=\"alunos !== undefined\">Alunos ativos:{{alunos.length}}</div>\n        <div class=\"col-12 card-flat\">Faturamento: {{totalAlunos | currency: 'BRL'}} </div>\n        <div class=\"col-12 page-top pt-info\">Total: {{totalAlunos | currency: 'BRL'}}</div>\n      </div>\n      <div class=\"col-4 card-flat\">\n        <div class=\"page-top pt-danger\">\n          Despesas Fixas\n          <a [routerLink]=\"['/pilates/financeiro/despesas']\">\n            <button class=\" btn btn-warning btn-xs btn-pdr fa fa-list-alt pull-right sombra-btn\"\n              title=\"Despesas\"></button>\n          </a>\n        </div>\n        <br>\n        <span *ngFor=\"let item of itens\">\n          <div *ngIf=\"itens === undefined\" class=\"text-center\">\n            <loading-spinner></loading-spinner>\n          </div>\n\n          <div class=\"col-12 card-flat\">\n            {{item.descricao}}: {{item.valor | currency: 'BRL'}} </div>\n        </span>\n        <div class=\"page-top pt-danger\">Total: {{totalDespesas | currency: 'BRL'}}</div>\n      </div>\n      <div class=\"col-4 card-flat\">\n        <div class=\"page-top pt-warning\">Pagamento Instrutores</div>\n        <span *ngFor=\"let instrutor of instrutores\">\n          <div class=\"col-12 card-flat\">\n            <b>{{instrutor.nome}}</b>\n            <div *ngIf=\"instrutor.semana !== undefined\">\n              <b title=\"Carga horário semanal\">CHS: </b><b>S:</b>{{instrutor.semana.segunda}} - <b>T:</b>{{instrutor.semana.terca}} -\n              <b>Q:</b>{{instrutor.semana.quarta}} - <b>Q:</b>{{instrutor.semana.quinta}} -\n              <b>S:</b>{{instrutor.semana.sexta}} = {{instrutor.semana.total}}\n            </div>\n            <div *ngIf=\"instrutor.semana !== undefined\">\n              <b title=\"Dias da semana do mês\">DSM: </b><b>S:</b>{{semanaMes.segunda}} - <b>T:</b>{{semanaMes.terca}} -\n              <b>Q:</b>{{semanaMes.quarta}} - <b>Q:</b>{{semanaMes.quinta}} -\n              <b>S:</b>{{semanaMes.sexta}}\n            </div>\n            <div *ngIf=\"instrutor.semana !== undefined\">\n              <b title=\"Valor hora/aula\">VHA:</b> {{instrutor.comissao | currency: 'BRL'}}\n            </div>\n\n            <hr>\n            <div *ngIf=\"instrutor.faturamento === undefined\" class=\"text-center\">\n              <loading-spinner></loading-spinner>\n            </div>\n            <b>{{instrutor.faturamento | currency: 'BRL'}}</b>\n          </div>\n        </span>\n        <div class=\"page-top pt-warning\">Total: {{totalInstrutores | currency: 'BRL'}} </div>\n      </div>\n\n      <div class=\"col-12\">\n        <div class=\"page-top pt-success\">Saldo atual</div>\n        <div class=\"row\">\n          <div class=\"col-3 card-flat\"><b>Faturamento:</b> {{totalAlunos | currency: 'BRL'}}</div>\n          <div class=\"col-3 card-flat\"><b>- Despesas Fixas:</b> {{totalDespesas | currency: 'BRL'}} </div>\n          <div class=\"col-3 card-flat\"><b>- Instrutores:</b> {{totalInstrutores | currency: 'BRL'}}</div>\n          <div class=\"col-3 card-flat\"><b>= Saldo:</b>\n            {{totalAlunos - totalDespesas - totalInstrutores  | currency: 'BRL'}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<modal-message>\n</modal-message>\n"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/financeiro.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/financeiro.component.ts ***!
  \******************************************************************/
/*! exports provided: FinanceiroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroComponent", function() { return FinanceiroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_itemFluxoCaixa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/itemFluxoCaixa.service */ "./src/app/services/itemFluxoCaixa.service.ts");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
/* harmony import */ var _financeiro_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financeiro.service */ "./src/app/pages/pilates/financeiro/financeiro.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FinanceiroComponent = /** @class */ (function () {
    function FinanceiroComponent(userService, turmaService, itemFluxoService, shared) {
        this.userService = userService;
        this.turmaService = turmaService;
        this.itemFluxoService = itemFluxoService;
        this.shared = shared;
        this.turmas = [];
        this.comissao = 0;
        this.totalInstrutores = 0;
        this.totalAlunos = 0;
        this.totalDespesas = 0;
        this.semana = new src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Semana"](0, 0, 0, 0, 0, 0, 0);
        this.semanaMes = new src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Semana"](0, 0, 0, 0, 0, 0, 0);
        var data = new Date();
        this.semanaMes = this.shared.diasSemanaMes(data.getFullYear(), data.getMonth() + 1);
        this.mes = this.shared.searchNameMonth(data.getMonth() + 1);
    }
    FinanceiroComponent.prototype.ngOnInit = function () {
        this.mensalidades();
        this.despesasFixas();
        this.pagamentoProfessor();
    };
    FinanceiroComponent.prototype.despesasFixas = function () {
        var _this = this;
        this.itemFluxoService.listDespesas().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.itens = responseApi;
            _this.totalDespesas = _this.itens.reduce(function (total, item) {
                return total + item.valor;
            }, 0);
        }, function (erro) { }, function () { return _financeiro_service__WEBPACK_IMPORTED_MODULE_6__["FinanceiroService"].itens = _this.itens; });
    };
    FinanceiroComponent.prototype.mensalidades = function () {
        var _this = this;
        this.userService.findListAlunosAtivos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.alunos = responseApi.data;
            _this.totalAlunos = _this.alunos.reduce(function (total, aluno) {
                return total + aluno.plano.valor;
            }, 0);
        }, function (erro) { }, function () { return _financeiro_service__WEBPACK_IMPORTED_MODULE_6__["FinanceiroService"].alunos = _this.alunos; });
    };
    FinanceiroComponent.prototype.pagamentoProfessor = function () {
        var _this = this;
        this.userService.findListAllByTipo('Instrutor').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.instrutores = responseApi;
            var _loop_1 = function (instrutor) {
                _this.turmaService.findListByInstrutor(instrutor.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (resposta) {
                    _this.turmas = resposta.data;
                    _this.semana = new src_app_shared__WEBPACK_IMPORTED_MODULE_2__["Semana"](0, 0, 0, 0, 0, 0, 0);
                    for (var _i = 0, _a = _this.turmas; _i < _a.length; _i++) {
                        var t = _a[_i];
                        if (t.alunos.length > 0) {
                            if (t.dia === 'SEGUNDA') {
                                _this.semana.segunda = _this.semana.segunda + 1;
                            }
                            if (t.dia === 'TERCA') {
                                _this.semana.terca = _this.semana.terca + 1;
                            }
                            if (t.dia === 'QUARTA') {
                                _this.semana.quarta = _this.semana.quarta + 1;
                            }
                            if (t.dia === 'QUINTA') {
                                _this.semana.quinta = _this.semana.quinta + 1;
                            }
                            if (t.dia === 'SEXTA') {
                                _this.semana.sexta = _this.semana.sexta + 1;
                            }
                        }
                    }
                    _this.semana.geraTotal();
                    instrutor.semana = _this.semana;
                    var remunera = (instrutor.semana.segunda * instrutor.comissao * _this.semanaMes.segunda) +
                        (instrutor.semana.terca * instrutor.comissao * _this.semanaMes.terca) +
                        (instrutor.semana.quarta * instrutor.comissao * _this.semanaMes.quarta) +
                        (instrutor.semana.quinta * instrutor.comissao * _this.semanaMes.quinta) +
                        (instrutor.semana.sexta * instrutor.comissao * _this.semanaMes.sexta);
                    instrutor.faturamento = 0;
                    instrutor.faturamento = remunera; // instrutor.comissao * this.turmas.length * 4
                    _this.totalInstrutores = _this.totalInstrutores + instrutor.faturamento;
                }, function (erro) { }, function () { _financeiro_service__WEBPACK_IMPORTED_MODULE_6__["FinanceiroService"].instrutores = _this.instrutores; });
            };
            for (var _i = 0, _a = _this.instrutores; _i < _a.length; _i++) {
                var instrutor = _a[_i];
                _loop_1(instrutor);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_components__WEBPACK_IMPORTED_MODULE_5__["ModalMessage"]),
        __metadata("design:type", src_app_components__WEBPACK_IMPORTED_MODULE_5__["ModalMessage"])
    ], FinanceiroComponent.prototype, "messageModal", void 0);
    FinanceiroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-financeiro',
            template: __webpack_require__(/*! ./financeiro.component.html */ "./src/app/pages/pilates/financeiro/financeiro.component.html"),
            styles: [__webpack_require__(/*! ./financeiro.component.css */ "./src/app/pages/pilates/financeiro/financeiro.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_1__["TurmaService"],
            src_app_services_itemFluxoCaixa_service__WEBPACK_IMPORTED_MODULE_4__["ItemFluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], FinanceiroComponent);
    return FinanceiroComponent;
}());



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/financeiro.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/financeiro.service.ts ***!
  \****************************************************************/
/*! exports provided: FinanceiroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceiroService", function() { return FinanceiroService; });
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

var FinanceiroService = /** @class */ (function () {
    function FinanceiroService() {
    }
    FinanceiroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FinanceiroService);
    return FinanceiroService;
}());



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n.green{\r\n    color: green;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Detalhes do Fluxo de Caixa\n    <a [routerLink]=\"['/pilates/financeiro/fluxo']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\"\n        title=\"Voltar\"></button>\n    </a>\n    <a>\n      <button class=\" btn btn-rlt btn-xs btn-pdr fa fa-print pull-right sombra-btn\" (click)=\"relatorio()\"\n        title=\"Imprimir\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <div *ngIf=\"formulario === undefined\" class=\"text-center\">\n      <loading-spinner></loading-spinner>\n    </div>\n\n    <div class=\"col-xs-12\">\n      <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n        <div class=\"col-xs-12\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"mes\" class=\"control-label\">Mês</label>\n                <select class=\"form-control\" id=\"mes\" formControlName=\"mes\">\n                  <option value=1>Janeiro</option>\n                  <option value=2>Fevereiro</option>\n                  <option value=3>Março</option>\n                  <option value=4>Abril</option>\n                  <option value=5>Maio</option>\n                  <option value=6>Junho</option>\n                  <option value=7>Julho</option>\n                  <option value=8>Agosto</option>\n                  <option value=9>Setembro</option>\n                  <option value=10>Outubro</option>\n                  <option value=11>Novembro</option>\n                  <option value=12>Dezembro</option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"ano\">Ano</label>\n                <input id=\"ano\" type=\"number\" class=\"form-control\" formControlName=\"ano\" IkMask=\"9999\" />\n              </div>\n            </div>\n\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"previsto\">Previsto</label>\n                <input id=\"previsto\" type=\"number\" class=\"form-control\" formControlName=\"previsto\"\n                  [attr.disabled]=\"true\" />\n              </div>\n            </div>\n\n            <div class=\"col-sm-12 col-md-3\">\n              <div class=\"form-group\">\n                <label for=\"executado\">Executado</label>\n                <input id=\"executado\" type=\"number\" class=\"form-control\" formControlName=\"executado\"\n                  [attr.disabled]=\"true\" />\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <hr />\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formulario.valid\"\n          *ngIf=\"fluxoCaixa.id === null\">Salvar</button>\n      </form>\n      <hr />\n    </div>\n    <div>\n      <table class=\"table table-striped table-bordered table-sm\" *ngIf=\"fluxoCaixa.itens !== undefined\">\n        <thead>\n          <tr>\n            <th>Descrição</th>\n            <th>Dia pagamento</th>\n            <th>Valor</th>\n            <th>Status</th>\n            <th>Opções\n              <a [routerLink]=\"['/pilates/financeiro/itens',0,fluxoCaixa.id, 'add']\" class=\"componenteform\">\n                <button class=\" btn btn-success btn-xs btn-pdr fa fa-plus-circle pull-right sombra-btn\" title=\"Detalhes\"\n                  data-toggle=\"tooltip\" data-placement=\"bottom\"></button>\n              </a>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of fluxoCaixa.itens\">\n            <td class=\"text-center\">{{item.descricao}}</td>\n            <td class=\"text-center\">{{item.dia}}</td>\n            <td class=\"text-center\" [class.red]=\"item.valor < 0\">{{item.valor | currency: 'BRL'}}</td>\n            <td class=\"text-center\" [class.red]=\"item.status === 'PENDENTE'\"\n              [class.green]=\"item.status === 'REALIZADO'\">{{item.status}}</td>\n            <td class=\"text-center\">\n              <a [routerLink]=\"['/pilates/financeiro/itens',item.id,fluxoCaixa.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\"\n                  data-placement=\"bottom\" data-target=\"#modalUtil\"\n                  (click)=\"openModalDelete(item.id, item.descricao, 'o item')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n  <modal-message (onConfirm)=\"deletar($event)\">\n  </modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: FluxoCaixaCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxoCaixaCreateOrUpdateComponent", function() { return FluxoCaixaCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
/* harmony import */ var src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/relatorio.service */ "./src/app/services/relatorio.service.ts");
/* harmony import */ var _financeiro_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../financeiro.service */ "./src/app/pages/pilates/financeiro/financeiro.service.ts");
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









var FluxoCaixaCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(FluxoCaixaCreateOrUpdateComponent, _super);
    function FluxoCaixaCreateOrUpdateComponent(userService, turmaService, fluxoCaixaService, itemFluxoService, relatorioService, authService, formBuilder, route) {
        var _this = _super.call(this, formBuilder, null, route) || this;
        _this.userService = userService;
        _this.turmaService = turmaService;
        _this.fluxoCaixaService = fluxoCaixaService;
        _this.itemFluxoService = itemFluxoService;
        _this.relatorioService = relatorioService;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.fluxoCaixa = new src_app_shared__WEBPACK_IMPORTED_MODULE_3__["FluxoCaixa"](null, null, null, null, null, null);
        _this.itemFluxo = new src_app_shared__WEBPACK_IMPORTED_MODULE_3__["ItemFluxoCaixa"](null, null, null, null, null, null, null, null);
        _this.despesas = [];
        return _this;
    }
    FluxoCaixaCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.fluxoCaixaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (responseApi) {
            _this.fluxoCaixa = responseApi.data;
            console.log(_this.fluxoCaixa);
            _this.fluxoCaixa.previsto = _this.fluxoCaixa.itens.reduce(function (prevVal, elem) {
                return prevVal + elem.valor;
            }, 0);
            _this.fluxoCaixa.executado = _this.fluxoCaixa.itens.reduce(function (prevVal, elem) {
                if (elem.status === 'REALIZADO') {
                    return prevVal + elem.valor;
                }
                else {
                    return prevVal + 0;
                }
            }, 0);
            _this.formulario = _this.formBuilder.group({
                id: [_this.fluxoCaixa.id],
                empresa: [_this.fluxoCaixa.empresa],
                mes: [_this.fluxoCaixa.mes, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                ano: [_this.fluxoCaixa.ano, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
                previsto: [_this.fluxoCaixa.previsto],
                executado: [_this.fluxoCaixa.executado],
            });
        }, function (err) {
            _this.openModal("Falha ao localizar turma!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.newRecord = function () {
        var _this = this;
        this.authService.getCurrentUser().subscribe(function (resposta) {
            _this.empresaUser = resposta['data'].empresa;
        });
        this.formulario = this.formBuilder.group({
            id: [this.fluxoCaixa.id],
            empresa: [this.fluxoCaixa.empresa],
            mes: [this.fluxoCaixa.mes, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            ano: [this.fluxoCaixa.ano, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            previsto: [this.fluxoCaixa.previsto],
            executado: [this.fluxoCaixa.executado],
        });
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.onSubmite = function () {
        this.fluxoCaixa = this.formulario.value;
        this.save(this.fluxoCaixa);
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.save = function (fluxoCaixa) {
        var _this = this;
        this.fluxoCaixaService.createOrUpdate(fluxoCaixa).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (responseApi) {
            _this.fluxoCaixa = responseApi.data;
            _this.modalMsg.showAlertSuccess('Cadastro realizado com sucesso!!');
            _this.geraItens(_this.fluxoCaixa);
        }, function (err) {
            _this.modalMsg.showAlertDanger("Falha ao realizar cadastro!! (" + err['error']['message'] + ")");
        });
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.geraItens = function (fluxo) {
        this.modalMsg.showAlertInfo('Gerando itens do Fluxo de Caixa...');
        for (var _i = 0, _a = _financeiro_service__WEBPACK_IMPORTED_MODULE_8__["FinanceiroService"].itens; _i < _a.length; _i++) {
            var d = _a[_i];
            var item = new src_app_shared__WEBPACK_IMPORTED_MODULE_3__["ItemFluxoCaixa"](null, d.empresa, fluxo, "SAIDA", d.dia, d.descricao, d.valor * -1, 'PENDENTE');
            this.itemFluxoService.createOrUpdate(item).subscribe(function (resposta) {
            });
        }
        for (var _b = 0, _c = _financeiro_service__WEBPACK_IMPORTED_MODULE_8__["FinanceiroService"].instrutores; _b < _c.length; _b++) {
            var instrutor = _c[_b];
            var item = new src_app_shared__WEBPACK_IMPORTED_MODULE_3__["ItemFluxoCaixa"](null, instrutor.empresa, fluxo, "SAIDA", '5', "Pag.Inst.: " + instrutor.nome, instrutor.faturamento * -1, 'PENDENTE');
            this.itemFluxoService.createOrUpdate(item).subscribe(function (resposta) {
            });
        }
        for (var _d = 0, _e = _financeiro_service__WEBPACK_IMPORTED_MODULE_8__["FinanceiroService"].alunos; _d < _e.length; _d++) {
            var a = _e[_d];
            var item = new src_app_shared__WEBPACK_IMPORTED_MODULE_3__["ItemFluxoCaixa"](null, a.empresa, fluxo, "ENTRADA", a.diaPagamento, "Mesalidade: " + a.nome, a.plano.valor, 'PENDENTE');
            this.itemFluxoService.createOrUpdate(item).subscribe(function (resposta) {
            });
        }
        /*
    
        this.itemFluxoService.listDespesas().pipe(take(1))
          .subscribe((responseApi: any) => {
            this.despesas = responseApi;
            for (let d of this.despesas) {
              let item = new ItemFluxoCaixa(null, d.empresa, fluxo, "SAIDA", d.dia, d.descricao, d.valor * -1, 'PENDENTE');
              this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
              })
            }
          })
    
        this.userService.findListAllByTipo('Instrutor').pipe(take(1)).subscribe((responseApi: ResponseApi) => {
          this.instrutores = responseApi;
          for (let instrutor of this.instrutores) {
            this.turmaService.findListByInstrutor(instrutor.id).subscribe((resposta: ResponseApi) => {
              this.turmas = resposta.data;
              instrutor.faturamento = instrutor.comissao * this.turmas.length * 4
              let item = new ItemFluxoCaixa(null, instrutor.empresa, fluxo, "SAIDA", '5', `Pag.Inst.: ${instrutor.nome}`, instrutor.faturamento * -1, 'PENDENTE');
              this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
              })
            })
          }
        })
    
        this.userService.findListAlunosAtivos().pipe(take(1))
          .subscribe((responseApi: ResponseApi) => {
            this.alunos = responseApi.data;
            this.openModal("Gerando itens de Mensalidades!!", MsgType.INFO)
            for (let a of this.alunos) {
              let item = new ItemFluxoCaixa(null, a.empresa, fluxo, "ENTRADA", a.diaPagamento, `Mesalidade: ${a.nome}`, a.plano.valor, 'PENDENTE');
              this.itemFluxoService.createOrUpdate(item).subscribe((resposta) => {
              })
            }
          }, error => { }
            , () => { this.modalMsg.hideMsg() })
       */
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.idItem = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].DELETE);
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.deletar = function (evento) {
        if (evento === true) {
            this.deleteFluxo(this.idItem);
        }
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.deleteFluxo = function (id) {
        var _this = this;
        this.itemFluxoService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (responseApi) {
            _this.openModal("Fluxo de Caixa deletado com sucesso!", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].SUCCESS);
            _this.ngOnInit();
        }, function (err) {
            _this.openModal("Falha ao deletar!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    FluxoCaixaCreateOrUpdateComponent.prototype.relatorio = function () {
        var _this = this;
        this.modalMsg.showAlertInfo('Gerando Fluxo de Caixa...');
        this.relatorioService.relFluxoCaixa(this.fluxoCaixa)
            .then(function (relatorio) {
            var url = window.URL.createObjectURL(relatorio);
            window.open(url);
        })
            .then(function () { return _this.modalMsg.hideMsg(); });
    };
    FluxoCaixaCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fluxo-caixa-create-or-update',
            template: __webpack_require__(/*! ./fluxo-caixa-create-or-update.component.html */ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./fluxo-caixa-create-or-update.component.css */ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["TurmaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["FluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["ItemFluxoCaixaService"],
            src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_7__["RelatorioService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FluxoCaixaCreateOrUpdateComponent);
    return FluxoCaixaCreateOrUpdateComponent;
}(src_app_shared__WEBPACK_IMPORTED_MODULE_3__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red{\r\n    color: red;\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 text-center\">\n        Fluxos de Caixa Cadastrados\n      </div>\n      <div class=\"col-sm-1\">\n        <select class=\"form-control search-input text-center\" id=\"status\" [(ngModel)]=\"count\" (change)=\"ngOnInit()\"\n          title=\"Registros por página\">\n          <option *ngFor=\"let opt of counts\" [ngValue]=\"opt\">{{opt}}</option>\n        </select>\n      </div>\n      <div class=\"col-sm-1\">\n        <input type=\"text\" class=\"form-control search-input text-center\" id=\"shAno\" [(ngModel)]=\"ano\"\n          (keyup)=\"ngOnInit()\" placeholder=\"ano\" title=\"pesquisa por ano\">\n      </div>\n      <div class=\"col-sm-1\">\n        <a [routerLink]=\"['/pilates/financeiro']\">\n          <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\" title=\"voltar\"\n            title=\"Voltar\"></button>\n        </a>\n      </div>\n      <div class=\"col-sm-1\">\n        <a [routerLink]=\"['0','add']\">\n          <button class=\" btn btn-success btn-xs btn-pdr fa fa-plus-circle pull-right sombra-btn\"\n            title=\"Novo Fluxo de Caixa\"></button>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"fluxos === undefined\" class=\"text-center\">\n    <loading-spinner [message]=\"message\"></loading-spinner>\n  </div>\n  <div *ngIf=\"fluxos !== undefined\">\n\n    <div class=\"card-body\">\n      <table class=\"table table-striped table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th>Ano</th>\n            <th>Mês</th>\n            <!--th>Previsto</th>\n            <th>Executado</th-->\n            <th>Opções</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let fluxo of fluxos\">\n            <td class=\"text-center\">{{fluxo.ano}}</td>\n            <td class=\"text-center\">{{fluxo.mes | mes}}</td>\n            <!--td class=\"text-center\" [class.red]=\"fluxo.previsto < 0\">{{fluxo.previsto | currency: 'BRL'}}</td>\n            <td class=\"text-center\" [class.red]=\"fluxo.executado < 0\">{{fluxo.executado | currency: 'BRL'}}</td-->\n            <td class=\"text-center\">\n              <a [routerLink]=\"[fluxo.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\"\n                  data-placement=\"bottom\" data-target=\"#myModal\" \n                  (click)=\"openModalDelete(fluxo.id, fluxo.mes, 'o Fluxo')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ikPagination [page]=\"page\" [count]=\"count\" [pages]=\"pages\" [totalElements]=\"totalElements\"\n      (_pageData)=\"pagination($event)\">\n    </ikPagination>\n  </div>\n  <modal-message (onConfirm)=\"deletar($event)\">\n  </modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FluxoCaixaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxoCaixaListComponent", function() { return FluxoCaixaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
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





var FluxoCaixaListComponent = /** @class */ (function (_super) {
    __extends(FluxoCaixaListComponent, _super);
    function FluxoCaixaListComponent(fluxoCaixaService, itemFluxoService) {
        var _this = _super.call(this) || this;
        _this.fluxoCaixaService = fluxoCaixaService;
        _this.itemFluxoService = itemFluxoService;
        _this.ano = 2019;
        _this.fluxo = null;
        return _this;
    }
    FluxoCaixaListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    FluxoCaixaListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.message = 'Processando informações...';
        this.fluxoCaixaService.findAllPage(page, count, this.ano).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.fluxos = responseApi['data']['content'];
            for (var _i = 0, _a = _this.fluxos; _i < _a.length; _i++) {
                var f = _a[_i];
                f.previsto = f.itens.reduce(function (prevVal, elem) {
                    return prevVal + elem.valor;
                }, 0);
                f.executado = f.itens.reduce(function (prevVal, elem) {
                    if (elem.status === 'REALIZADO') {
                        return prevVal + elem.valor;
                    }
                    else {
                        return prevVal + 0;
                    }
                }, 0);
            }
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    FluxoCaixaListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].DELETE);
    };
    FluxoCaixaListComponent.prototype.deletar = function (evento) {
        if (evento === true) {
            this.deleteFluxo(this.id);
        }
    };
    FluxoCaixaListComponent.prototype.deleteFluxo = function (id) {
        var _this = this;
        this.fluxoCaixaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.fluxo = responseApi.data;
            _this.openModal("Deletando itens!", src_app_components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].INFO);
            for (var _i = 0, _a = _this.fluxo.itens; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.itemFluxoService.delete(i.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                    .subscribe(function () { });
            }
        }, function (err) { }, function () {
            _this.del();
        });
    };
    FluxoCaixaListComponent.prototype.del = function () {
        var _this = this;
        this.fluxoCaixaService.delete(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.modalMsg.showAlertSuccess("Fluxo de Caixa deletado com sucesso!");
            _this.getList(_this.page, _this.count);
        }, function (err) {
            _this.modalMsg.showAlertDanger("Falha ao deletar!! (" + err['error']['message'] + ")");
        });
    };
    FluxoCaixaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fluxo-caixa-list',
            template: __webpack_require__(/*! ./fluxo-caixa-list.component.html */ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.html"),
            styles: [__webpack_require__(/*! ./fluxo-caixa-list.component.css */ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_1__["FluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_1__["ItemFluxoCaixaService"]])
    ], FluxoCaixaListComponent);
    return FluxoCaixaListComponent;
}(src_app_shared__WEBPACK_IMPORTED_MODULE_2__["PageList"]));



/***/ }),

/***/ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"page-top\">\n      Detalhes do item\n      <a [routerLink]=\"['/pilates/financeiro/fluxo',idf,'edit']\">\n        <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\" \n        title=\"Voltar\"></button>\n      </a>\n    </div>\n    <div class=\"card-body\">\n  \n      <div class=\"col-xs-12\">\n        <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n          <div class=\"col-xs-12\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-3\">\n                <div class=\"form-group\">\n                  <label for=\"descricao\">Descrição</label>\n                  <input id=\"descricao\" type=\"text\" class=\"form-control\" formControlName=\"descricao\" />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-2\">\n                <div class=\"form-group\">\n                  <label for=\"dia\">Dia</label>\n                  <input id=\"dia\" type=\"number\" class=\"form-control\" formControlName=\"dia\" />\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-2\">\n                <div class=\"form-group\">\n                  <label for=\"valor\">Valor</label>\n                  <input id=\"valor\" type=\"number\" class=\"form-control\" formControlName=\"valor\" />\n                </div>\n              </div>\n\n              <div class=\"col-sm-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"tipo\" class=\"control-label\">Tipo</label>\n                    <select class=\"form-control\" id=\"dia\" formControlName=\"tipo\">\n                      <option value=\"ENTRADA\">Entrada</option>\n                      <option value=\"SAIDA\">Saída</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"tipo\" class=\"control-label\">Status</label>\n                      <select class=\"form-control\" id=\"dia\" formControlName=\"status\">\n                        <option value=\"PENDENTE\">Pendente</option>\n                        <option value=\"REALIZADO\">Realizado</option>\n                      </select>\n                    </div>\n                  </div>\n\n            </div>\n          </div>\n          <hr />\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formulario.valid\">Salvar</button>\n        </form>\n      </div>\n    </div>\n    <modal-message></modal-message>\n  </div>"

/***/ }),

/***/ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ItensCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItensCreateOrUpdateComponent", function() { return ItensCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var ItensCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(ItensCreateOrUpdateComponent, _super);
    function ItensCreateOrUpdateComponent(itemFluxoService, fluxoService, authService, formBuilder, route) {
        var _this = _super.call(this, formBuilder, null, route) || this;
        _this.itemFluxoService = itemFluxoService;
        _this.fluxoService = fluxoService;
        _this.authService = authService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        _this.itemFluxo = new src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ItemFluxoCaixa"](null, null, null, null, null, null, null, null);
        _this.fluxo = null;
        _this.authService.getCurrentUser().subscribe(function (resposta) {
            _this.empresaUser = resposta['data'].empresa;
        });
        _this.checkIdFluxo();
        return _this;
    }
    ItensCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.itemFluxoService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.itemFluxo = responseApi.data;
            _this.formulario = _this.formBuilder.group({
                id: [_this.itemFluxo.id],
                empresa: [_this.empresaUser],
                fluxoCaixa: [_this.itemFluxo.fluxoCaixa],
                tipo: [_this.itemFluxo.tipo],
                dia: [_this.itemFluxo.dia],
                descricao: [_this.itemFluxo.descricao],
                valor: [_this.itemFluxo.valor],
                status: [_this.itemFluxo.status]
            });
        }, function (err) {
            _this.openModal("Falha ao localizar despesa!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].ERROR);
        });
    };
    ItensCreateOrUpdateComponent.prototype.newRecord = function () {
        this.checkIdFluxo();
        this.formulario = this.formBuilder.group({
            id: [this.itemFluxo.id],
            empresa: [this.empresaUser],
            fluxoCaixa: [this.fluxo],
            tipo: [this.itemFluxo.tipo],
            dia: [this.itemFluxo.dia],
            descricao: [this.itemFluxo.descricao],
            valor: [this.itemFluxo.valor],
            status: [this.itemFluxo.status]
        });
    };
    ItensCreateOrUpdateComponent.prototype.onSubmite = function () {
        this.itemFluxo = this.formulario.value;
        this.itemFluxo.fluxoCaixa = this.fluxo;
        if (this.itemFluxo.tipo === 'SAIDA') {
            if (this.itemFluxo.valor > 0) {
                this.itemFluxo.valor = this.itemFluxo.valor * -1;
            }
        }
        this.save(this.itemFluxo);
    };
    ItensCreateOrUpdateComponent.prototype.save = function (itemFluxo) {
        var _this = this;
        this.itemFluxoService.createOrUpdate(itemFluxo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (responseApi) {
            _this.itemFluxo = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", src_app_components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['message'] + ")", src_app_components__WEBPACK_IMPORTED_MODULE_5__["MsgType"].ERROR);
        });
    };
    ItensCreateOrUpdateComponent.prototype.checkIdFluxo = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (parametros) {
            _this.idf = parametros['idf'];
            _this.fluxoService.findById(_this.idf).subscribe(function (responseApi) {
                _this.fluxo = responseApi.data;
            });
        });
    };
    ItensCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itens-create-or-update',
            template: __webpack_require__(/*! ./itens-create-or-update.component.html */ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./itens-create-or-update.component.css */ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_2__["ItemFluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["FluxoCaixaService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ItensCreateOrUpdateComponent);
    return ItensCreateOrUpdateComponent;
}(src_app_shared__WEBPACK_IMPORTED_MODULE_1__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/index.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pilates/index.ts ***!
  \****************************************/
/*! exports provided: AlunosListComponent, AlunosCreateOrUpdateComponent, FrequenciaComponent, FinanceiroComponent, DespesasCreateOrUpdateComponent, DespesasListComponent, FluxoCaixaCreateOrUpdateComponent, FluxoCaixaListComponent, ItensCreateOrUpdateComponent, InstrutoresListComponent, InstrutoresCreateOrUpdateComponent, PlanosListComponent, PlanosCreateOrUpdateComponent, TurmasListComponent, TurmasCreateOrUpdateComponent, ListTurmasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alunos_alunos_list_alunos_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alunos/alunos-list/alunos-list.component */ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlunosListComponent", function() { return _alunos_alunos_list_alunos_list_component__WEBPACK_IMPORTED_MODULE_0__["AlunosListComponent"]; });

/* harmony import */ var _alunos_alunos_create_or_update_alunos_create_or_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alunos/alunos-create-or-update/alunos-create-or-update.component */ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlunosCreateOrUpdateComponent", function() { return _alunos_alunos_create_or_update_alunos_create_or_update_component__WEBPACK_IMPORTED_MODULE_1__["AlunosCreateOrUpdateComponent"]; });

/* harmony import */ var _alunos_frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alunos/frequencia/frequencia.component */ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrequenciaComponent", function() { return _alunos_frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_2__["FrequenciaComponent"]; });

/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/pages/pilates/financeiro/financeiro.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FinanceiroComponent", function() { return _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_3__["FinanceiroComponent"]; });

/* harmony import */ var _financeiro_despesas_create_or_update_despesas_create_or_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./financeiro/despesas-create-or-update/despesas-create-or-update.component */ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DespesasCreateOrUpdateComponent", function() { return _financeiro_despesas_create_or_update_despesas_create_or_update_component__WEBPACK_IMPORTED_MODULE_4__["DespesasCreateOrUpdateComponent"]; });

/* harmony import */ var _financeiro_despesas_list_despesas_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financeiro/despesas-list/despesas-list.component */ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DespesasListComponent", function() { return _financeiro_despesas_list_despesas_list_component__WEBPACK_IMPORTED_MODULE_5__["DespesasListComponent"]; });

/* harmony import */ var _financeiro_fluxo_caixa_create_or_update_fluxo_caixa_create_or_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component */ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FluxoCaixaCreateOrUpdateComponent", function() { return _financeiro_fluxo_caixa_create_or_update_fluxo_caixa_create_or_update_component__WEBPACK_IMPORTED_MODULE_6__["FluxoCaixaCreateOrUpdateComponent"]; });

/* harmony import */ var _financeiro_fluxo_caixa_list_fluxo_caixa_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./financeiro/fluxo-caixa-list/fluxo-caixa-list.component */ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FluxoCaixaListComponent", function() { return _financeiro_fluxo_caixa_list_fluxo_caixa_list_component__WEBPACK_IMPORTED_MODULE_7__["FluxoCaixaListComponent"]; });

/* harmony import */ var _financeiro_itens_create_or_update_itens_create_or_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./financeiro/itens-create-or-update/itens-create-or-update.component */ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItensCreateOrUpdateComponent", function() { return _financeiro_itens_create_or_update_itens_create_or_update_component__WEBPACK_IMPORTED_MODULE_8__["ItensCreateOrUpdateComponent"]; });

/* harmony import */ var _instrutores_instrutores_list_instrutores_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./instrutores/instrutores-list/instrutores-list.component */ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstrutoresListComponent", function() { return _instrutores_instrutores_list_instrutores_list_component__WEBPACK_IMPORTED_MODULE_9__["InstrutoresListComponent"]; });

/* harmony import */ var _instrutores_instrutores_create_or_update_instrutores_create_or_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instrutores/instrutores-create-or-update/instrutores-create-or-update.component */ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstrutoresCreateOrUpdateComponent", function() { return _instrutores_instrutores_create_or_update_instrutores_create_or_update_component__WEBPACK_IMPORTED_MODULE_10__["InstrutoresCreateOrUpdateComponent"]; });

/* harmony import */ var _planos_planos_list_planos_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./planos/planos-list/planos-list.component */ "./src/app/pages/pilates/planos/planos-list/planos-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanosListComponent", function() { return _planos_planos_list_planos_list_component__WEBPACK_IMPORTED_MODULE_11__["PlanosListComponent"]; });

/* harmony import */ var _planos_planos_create_or_update_planos_create_or_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./planos/planos-create-or-update/planos-create-or-update.component */ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanosCreateOrUpdateComponent", function() { return _planos_planos_create_or_update_planos_create_or_update_component__WEBPACK_IMPORTED_MODULE_12__["PlanosCreateOrUpdateComponent"]; });

/* harmony import */ var _turmas_turmas_list_turmas_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./turmas/turmas-list/turmas-list.component */ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TurmasListComponent", function() { return _turmas_turmas_list_turmas_list_component__WEBPACK_IMPORTED_MODULE_13__["TurmasListComponent"]; });

/* harmony import */ var _turmas_turmas_create_or_update_turmas_create_or_update_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./turmas/turmas-create-or-update/turmas-create-or-update.component */ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TurmasCreateOrUpdateComponent", function() { return _turmas_turmas_create_or_update_turmas_create_or_update_component__WEBPACK_IMPORTED_MODULE_14__["TurmasCreateOrUpdateComponent"]; });

/* harmony import */ var _turmas_list_turmas_list_turmas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./turmas/list-turmas/list-turmas.component */ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTurmasComponent", function() { return _turmas_list_turmas_list_turmas_component__WEBPACK_IMPORTED_MODULE_15__["ListTurmasComponent"]; });



















/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top sombra\">\n    Cadastro de Instrutores\n    <a [routerLink]=\"['/pilates/instrutores']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\"\n        title=\"Voltar\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"cadastro-tab\" data-toggle=\"tab\" href=\"#cadastro\" role=\"tab\"\n          aria-controls=\"cadastro\" aria-selected=\"true\">Cadastro</a>\n      </li>\n      <li class=\"nav-item\">\n        <div *ngIf=\"alunos == undefined\" class=\"loader\"></div>\n        <a  *ngIf=\"turmas !== undefined\" class=\"nav-link\" id=\"turmas-tab\" data-toggle=\"tab\" href=\"#turmas\" role=\"tab\" aria-controls=\"turmas\"\n          aria-selected=\"false\">Turmas(<strong>{{turmas.length}}</strong>)</a>\n      </li>\n      <li class=\"nav-item\">\n        <div *ngIf=\"alunos == undefined\" class=\"loader\"></div>\n        <a *ngIf=\"alunos !== undefined\" class=\"nav-link\" id=\"alunos-tab\" data-toggle=\"tab\" href=\"#alunos\" role=\"tab\"\n          aria-controls=\"alunos\" aria-selected=\"false\">Alunos(<strong>{{alunos.length}})</strong></a>\n      </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n      <div class=\"row tab-pane fade show active\" id=\"cadastro\" role=\"tabpanel\" aria-labelledby=\"cadastro-tab\">\n\n        <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n          <div class=\"col-xl-12 card-flat\">\n            <div class=\"row\">\n              <div class=\"col-xs-12 col-sm-3 text-center\">\n                <div *ngIf=\"user === undefined\" class=\"text-center\">\n                  <loading-spinner></loading-spinner>\n                </div>\n                <img [src]=\"user.url_perfil\" class=\"img-fluid img-thumbnail\" style=\"width: 150px;\"\n                  *ngIf=\"user !== undefined\" />\n                <button type=\"button\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#ikUpload\"\n                  [disabled]=\"!formulario.value.id\">Upload foto</button>\n              </div>\n\n              <div class=\"col-xs-12 col-md-9\">\n                <div class=\"row\">\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Nome</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"nome\" ikUpCase />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"roles\">Email</label>\n                      <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" ikLoCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Senha</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"senha\" ikUpCase />\n                    </div>\n                  </div>\n\n                  <div class=\"col-sm-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label for=\"status\" class=\"control-label\">Status</label>\n                      <select class=\"form-control\" id=\"status\" formControlName=\"ativo\">\n                        <option value=true>Ativo</option>\n                        <option value=false>Inativo</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Telefone</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"telefone\" IkMask=\"(99) 9999-9999\" />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Celular</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"celular\" IkMask=\"(99) 99999-9999\" />\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Pagamento</label>\n                      <input type=\"text\" class=\"form-control\" value=\"Hora/Aula\" disabled=true/>\n                    </div>\n                  </div>\n                  <div class=\"col-xs-12 col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Valor</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"comissao\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>CPF</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"cpf\" IkMask=\"999.999.999-99\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>RG</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"rg\" />\n                    </div>\n                  </div>\n\n                  <div class=\"col-xs-12 col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Data Nascimento</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"dataNascimento\" IkMask=\"99/99/9999\" />\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-12 card-flat\">\n            <div formGroupName=\"endereco\">\n              <div class=\"row\">\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cep\" class=\"control-label\">CEP</label>\n                    <input type=\"text\" class=\"form-control\" id=\"cep\" (blur)=\"consultaCEP()\" formControlName=\"cep\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"rua\" class=\"control-label\">Rua</label>\n                    <input type=\"text\" class=\"form-control\" id=\"rua\" formControlName=\"logradouro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"numero\" class=\"control-label\">Número</label>\n                    <input type=\"text\" class=\"form-control\" id=\"numero\" formControlName=\"numero\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"complemento\" class=\"control-label\">Complemento</label>\n                    <input type=\"text\" class=\"form-control\" id=\"complemento\" formControlName=\"complemento\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"bairro\" class=\"control-label\">Bairro</label>\n                    <input type=\"text\" class=\"form-control\" id=\"bairro\" formControlName=\"bairro\">\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"cidade\" class=\"control-label\">Cidade</label>\n                    <select class=\"form-control\" id=\"cidade\" formControlName=\"cidade\">\n                      <option *ngFor=\"let cidade of cidades\" [value]=\"cidade.nome\">{{ cidade.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"estado\" class=\"control-label\">Estado</label>\n                    <select class=\"form-control\" id=\"estado\" formControlName=\"estado\">\n                      <option *ngFor=\"let estado of estados\" [value]=\"estado.sigla\">{{ estado.nome }}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row align-items-center\">\n            <div class=\"col-10\">\n              <div class=\"form-group\">\n                <label>Observação</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"obs\" />\n              </div>\n            </div>\n            <div class=\"col-2\">\n              <button type=\"submit\" title=\"Salvar registro\" class=\"btn btn-primary pull-right sombra-btn\"\n                [disabled]=\"!formulario.valid\"\n                style=\"vertical-align: middle; color: black\"><strong>Salvar</strong></button>\n            </div>\n          </div>\n        </form>\n\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"turmas\" role=\"tabpanel\" aria-labelledby=\"turmas-tab\">\n\n        <div class=\"col-xs-12 card-flat\">\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th>Dia</th>\n                <th>Horário</th>\n                <th>Qtd Alunos</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let turma of turmas\">\n                <td class=\"text-center\">{{turma.dia | diaSemana}}</td>\n                <td class=\"text-center\">{{turma.horario}}</td>\n                <td class=\"text-center\" title=\"turma.alunos\">{{turma.alunos.length}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"alunos\" role=\"tabpanel\" aria-labelledby=\"alunos-tab\">\n\n        <div class=\"col-xs-12 card-flat\">\n          <table class=\"table table-striped table-bordered\" *ngIf=\"formulario !== undefined\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th>Email</th>\n                <th>Celular</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let aluno of alunos\">\n                <td class=\"text-center\">{{aluno.nome}}</td>\n                <td class=\"text-center\">{{aluno.email}}</td>\n                <td class=\"text-center\">{{aluno.celular}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <ik-upload [id]=\"id\" [basePath]=\"pathUpload\" (urlFileUpload)=\"receiveUrl($event)\"> </ik-upload>\n  <modal-message></modal-message>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: InstrutoresCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrutoresCreateOrUpdateComponent", function() { return InstrutoresCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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








var InstrutoresCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(InstrutoresCreateOrUpdateComponent, _super);
    function InstrutoresCreateOrUpdateComponent(usuariosService, authService, turmaService, formBuilder, cepService, route) {
        var _this = _super.call(this, formBuilder, cepService, route) || this;
        _this.usuariosService = usuariosService;
        _this.authService = authService;
        _this.turmaService = turmaService;
        _this.formBuilder = formBuilder;
        _this.cepService = cepService;
        _this.route = route;
        _this.perfis = [];
        _this.userPerfis = new Array();
        _this.pathUpload = "/usuarios";
        _this.comissao = 0;
        _this.shared = _services__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
        _this.frmTurma = _this.formBuilder.group({
            turma: [null]
        });
        return _this;
    }
    InstrutoresCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.usuariosService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.usuariosService.findAlunoByInstrutor(_this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (responseApi) {
                _this.alunos = responseApi.data;
            });
            _this.turmaService.findListByInstrutor(_this.user.id).subscribe(function (resposta) {
                _this.turmas = resposta.data;
                for (var _i = 0, _a = _this.turmas; _i < _a.length; _i++) {
                    var turma = _a[_i];
                    turma.faturamento = turma.alunos.reduce(function (total, aluno) {
                        _this.comissao = _this.comissao + aluno.plano.valor;
                        return total + aluno.plano.valor;
                    }, 0);
                }
            });
            _this.cepService.getCidadeNome(_this.user.endereco.cidade).subscribe(function (dados) { return _this.cidades = dados; });
            _this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) {
                if (_this.user.perfis.includes(x.perfil)) {
                    _this.perfis.push(x.cod);
                    return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil, true);
                }
                else {
                    return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil, false);
                }
            });
            _this.onRolesChange(_this.perfis);
            _this.listFactory();
            var dt = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('pt-BR');
            _this.formulario = _this.formBuilder.group({
                id: [_this.user.id],
                nome: [_this.user.nome, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
                email: [_this.user.email, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
                ativo: [_this.user.ativo],
                senha: [_this.user.senha, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
                endereco: _this.formBuilder.group({
                    cep: [_this.user.endereco.cep],
                    numero: [_this.user.endereco.numero],
                    complemento: [_this.user.endereco.complemento],
                    logradouro: [_this.user.endereco.logradouro],
                    bairro: [_this.user.endereco.bairro],
                    estado: [_this.user.endereco.estado],
                    cidade: [_this.user.endereco.cidade],
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
                comissao: [_this.user.comissao],
                url_perfil: [_this.user.url_perfil],
            });
            _this.chageCitys();
            _this.id = _this.formulario.value.id;
        }, function (err) {
            _this.openModal("Falha ao localizar instrutor!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    InstrutoresCreateOrUpdateComponent.prototype.newRecord = function () {
        var _this = this;
        this.listFactory();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil); });
        this.authService.getCurrentUser().subscribe(function (resposta) {
            _this.empresaUser = resposta['data'].empresa;
        });
        this.perfis.push("3");
        this.perfis.push("5");
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            email: [this.shared.emailFactory(), [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            ativo: [true],
            senha: ['123456', [_Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            endereco: this.formBuilder.group({
                cep: [null],
                numero: [null],
                complemento: [null],
                logradouro: [null],
                bairro: [null],
                estado: [null],
                cidade: [null],
            }),
            telefone: [null],
            celular: [null],
            rg: [null],
            cpf: [null],
            dataNascimento: [new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('pt-BR').transform(new Date(), 'dd/MM/yyyy')],
            dataCadastro: [null],
            sexo: [null],
            peso: [null],
            diaPagamento: [null],
            plano: [null],
            obs: [null],
            tipoUser: ['Instrutor'],
            turmas: [this.turmas],
            empresa: [this.empresaUser],
            comissao: [0],
            url_perfil: ['/assets/img/prod.jpg'],
        });
        this.chageCitys();
    };
    InstrutoresCreateOrUpdateComponent.prototype.onSubmite = function () {
        if (this.formulario.value.id === null) {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.empresa = this.empresaUser;
            this.user.dataCadastro = new Date();
            this.user.dtr = this.formulario.value.dataNascimento;
            this.user.dataNascimento = null;
            this.testEmail(this.user);
        }
        else {
            this.user = this.formulario.value;
            this.user.perfis = this.perfis;
            this.user.dtr = this.formulario.value.dataNascimento;
            this.user.dataNascimento = null;
            this.update(this.user);
        }
    };
    InstrutoresCreateOrUpdateComponent.prototype.save = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (responseApi) {
            _this.user = _this.shared.userEmpty;
            var userRet = responseApi.data;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    InstrutoresCreateOrUpdateComponent.prototype.update = function (user) {
        var _this = this;
        this.usuariosService.createOrUpdate(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
            _this.openModal("Dados editados com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha ao editar!!(" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    InstrutoresCreateOrUpdateComponent.prototype.addTurma = function (turma) {
        this.turmas.push(turma);
    };
    InstrutoresCreateOrUpdateComponent.prototype.removeTurma = function (turma) {
        this.turmas.splice(this.turmas.indexOf(this.verificaTurma(turma)), 1);
    };
    InstrutoresCreateOrUpdateComponent.prototype.verificaTurma = function (turma) {
        var turmaEncontrada = this.turmas.find(function (t) { return t.id === turma.id; });
        return turmaEncontrada;
    };
    InstrutoresCreateOrUpdateComponent.prototype.receiveUrl = function (evento) {
        var _this = this;
        this.usuariosService.updateUrlPerfil(evento, this.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
            _this.findById(_this.id);
            _this.openModal("Upload ok", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].SUCCESS);
        }, function (err) {
            _this.openModal("Falha no upload!!(" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
        });
    };
    InstrutoresCreateOrUpdateComponent.prototype.listFactory = function () {
        var _this = this;
        this.cepService.getEstadosBr().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (dados) { return _this.estados = dados; });
    };
    InstrutoresCreateOrUpdateComponent.prototype.onRolesChange = function (value) {
        this.perfis = value;
    };
    InstrutoresCreateOrUpdateComponent.prototype.resetForm = function () {
        this.formulario.reset();
        this.userPerfis = _shared__WEBPACK_IMPORTED_MODULE_1__["Listas"]._perfil.map(function (x) { return new _components__WEBPACK_IMPORTED_MODULE_2__["CheckboxItem"](x.cod, x.perfil); });
    };
    InstrutoresCreateOrUpdateComponent.prototype.testEmpresa = function (emp1, emp2) {
        return emp1 && emp2 ? (emp1.nome === emp2.nome && emp1.id === emp2.id) : emp1 === emp2;
    };
    InstrutoresCreateOrUpdateComponent.prototype.testPlano = function (plano1, plano2) {
        return plano1 && plano2 ? (plano1.nome === plano2.nome && plano1.id === plano2.id) : plano1 === plano2;
    };
    InstrutoresCreateOrUpdateComponent.prototype.testEmail = function (usuario) {
        var _this = this;
        this.authService.currentUser(usuario.email).subscribe(function (resposta) {
            if (resposta['data'].email != usuario.email) {
                _this.save(usuario);
            }
            else {
                _this.openModal('Email já utilizado!', _components__WEBPACK_IMPORTED_MODULE_2__["MsgType"].ERROR);
                document.getElementById('email').focus();
            }
        });
    };
    InstrutoresCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instrutores-create-or-update',
            template: __webpack_require__(/*! ./instrutores-create-or-update.component.html */ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./instrutores-create-or-update.component.css */ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["TurmaService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ConsultaCepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], InstrutoresCreateOrUpdateComponent);
    return InstrutoresCreateOrUpdateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_1__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  \n  <div class=\"page-top shadow-sm\">\n    Instrutores Cadastrados\n    <a [routerLink]=\"['0','add']\">\n      <button class=\" btn btn-success btn-xs btn-pdr fa fa-plus-circle pull-right sombra-btn\" \n        title=\"Novo Instrutor\"></button>\n    </a>  \n  </div>\n  <div *ngIf=\"usuarios === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"usuarios !== undefined\">\n  \n  <div class=\"card-body\">\n    <table class=\"table table-striped table-bordered table-sm\">\n      <thead>\n        <tr>\n          <th>Nome</th>\n          <th>Celular</th>\n          <th>Email</th>\n          <th>Opções</th>\n        </tr> \n      </thead>\n      <tbody>  \n        <tr *ngFor=\"let usuario of usuarios\">\n          <td>{{usuario.nome}}</td> \n          <td class=\"text-center\">{{usuario.celular}}</td>\n          <td class=\"text-center\">{{usuario.email}}</td>\n          <td class=\"text-center\">\n            <a [routerLink]=\"[usuario.id, 'edit']\" class=\"componenteform\">\n              <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" \n              data-toggle=\"tooltip\" data-placement=\"bottom\"></button>\n            </a>\n            <a class=\"componenteform\">\n              <button type=\"button\" class=\"btn btn-info fa fa-retweet sombra-btn\" \n                title=\"Resetar Senha\" data-placement=\"bottom\" (click)=\"resetPassword(usuario.email)\">\n              </button>\n            </a>\n            <a class=\"componenteform\" *ngIf=\"usuario.isAtivo === true\">\n              <button type=\"button\" class=\"btn btn-warning fa fa-level-down sombra-btn\" \n                title=\"Desabilitar\" data-placement=\"bottom\" (click)=\"isAtivo('false', usuario.id)\">\n              </button>\n            </a>\n            <a class=\"componenteform\" *ngIf=\"usuario.isAtivo === false\">\n              <button type=\"button\" class=\"btn btn-success fa fa-level-up sombra-btn\" \n                title=\"Habilitar\" data-placement=\"bottom\" (click)=\"isAtivo('true', usuario.id)\">\n              </button>\n            </a>\n            <a class=\"componenteform\">\n              <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\"  \n                title=\"Deletar\" data-placement=\"bottom\" data-target=\"#modalUtil\" (click)=\"openModalDelete(usuario.id, usuario.nome, 'o Instrutor')\">\n              </button>\n            </a>\n          </td>\n        </tr>\n      </tbody>  \n    </table>\n\n    <ikPagination \n      [page]=\"page\" \n      [count]=\"count\" \n      [pages]=\"pages\" \n      [totalElements]=\"totalElements\" \n      (_pageData)=\"pagination($event)\">\n    </ikPagination>\n    \n    <modal-message\n      (onConfirm)=\"deletar($event)\">\n    </modal-message>\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: InstrutoresListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrutoresListComponent", function() { return InstrutoresListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var InstrutoresListComponent = /** @class */ (function (_super) {
    __extends(InstrutoresListComponent, _super);
    function InstrutoresListComponent(dialogService, usuariosService) {
        var _this = _super.call(this) || this;
        _this.dialogService = dialogService;
        _this.usuariosService = usuariosService;
        _this.usuarios = [];
        return _this;
    }
    InstrutoresListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    InstrutoresListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.usuariosService.findAllByTipo(page, count, 'Instrutor').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (responseApi) {
            _this.usuarios = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
        });
    };
    InstrutoresListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].DELETE);
    };
    InstrutoresListComponent.prototype.deletar = function (evento) {
        var _this = this;
        if (evento === true) {
            this.usuariosService.delete(this.id).subscribe(function (responseApi) {
                _this.openModal("Instrutor deletado com sucesso!", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].SUCCESS);
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("Falha ao deletar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
            });
        }
    };
    InstrutoresListComponent.prototype.resetPassword = function (email) {
    };
    InstrutoresListComponent.prototype.isAtivo = function (status, id) {
        var _this = this;
        if (status != null) {
            this.usuariosService.updateStatus(status, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("erro ao modificar status: (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_3__["MsgType"].ERROR);
            });
        }
    };
    InstrutoresListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instrutores-list',
            template: __webpack_require__(/*! ./instrutores-list.component.html */ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.html"),
            styles: [__webpack_require__(/*! ./instrutores-list.component.css */ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], InstrutoresListComponent);
    return InstrutoresListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_1__["PageList"]));



/***/ }),

/***/ "./src/app/pages/pilates/pilates.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/pilates/pilates.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/pilates.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pilates/pilates.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page card-transparente\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pilates/pilates.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pilates/pilates.component.ts ***!
  \****************************************************/
/*! exports provided: PilatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilatesComponent", function() { return PilatesComponent; });
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

var PilatesComponent = /** @class */ (function () {
    function PilatesComponent() {
    }
    PilatesComponent.prototype.ngOnInit = function () {
    };
    PilatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pilates',
            template: __webpack_require__(/*! ./pilates.component.html */ "./src/app/pages/pilates/pilates.component.html"),
            styles: [__webpack_require__(/*! ./pilates.component.css */ "./src/app/pages/pilates/pilates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PilatesComponent);
    return PilatesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pilates/pilates.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pilates/pilates.module.ts ***!
  \*************************************************/
/*! exports provided: PilatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilatesModule", function() { return PilatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pilates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pilates.component */ "./src/app/pages/pilates/pilates.component.ts");
/* harmony import */ var _pilates_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pilates.routing */ "./src/app/pages/pilates/pilates.routing.ts");
/* harmony import */ var _instrutores_instrutores_list_instrutores_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrutores/instrutores-list/instrutores-list.component */ "./src/app/pages/pilates/instrutores/instrutores-list/instrutores-list.component.ts");
/* harmony import */ var _instrutores_instrutores_create_or_update_instrutores_create_or_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instrutores/instrutores-create-or-update/instrutores-create-or-update.component */ "./src/app/pages/pilates/instrutores/instrutores-create-or-update/instrutores-create-or-update.component.ts");
/* harmony import */ var _alunos_alunos_create_or_update_alunos_create_or_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alunos/alunos-create-or-update/alunos-create-or-update.component */ "./src/app/pages/pilates/alunos/alunos-create-or-update/alunos-create-or-update.component.ts");
/* harmony import */ var _alunos_alunos_list_alunos_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alunos/alunos-list/alunos-list.component */ "./src/app/pages/pilates/alunos/alunos-list/alunos-list.component.ts");
/* harmony import */ var _financeiro_fluxo_caixa_list_fluxo_caixa_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./financeiro/fluxo-caixa-list/fluxo-caixa-list.component */ "./src/app/pages/pilates/financeiro/fluxo-caixa-list/fluxo-caixa-list.component.ts");
/* harmony import */ var _financeiro_fluxo_caixa_create_or_update_fluxo_caixa_create_or_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component */ "./src/app/pages/pilates/financeiro/fluxo-caixa-create-or-update/fluxo-caixa-create-or-update.component.ts");
/* harmony import */ var _turmas_turmas_create_or_update_turmas_create_or_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./turmas/turmas-create-or-update/turmas-create-or-update.component */ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.ts");
/* harmony import */ var _turmas_turmas_list_turmas_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./turmas/turmas-list/turmas-list.component */ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.ts");
/* harmony import */ var _planos_planos_list_planos_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./planos/planos-list/planos-list.component */ "./src/app/pages/pilates/planos/planos-list/planos-list.component.ts");
/* harmony import */ var _planos_planos_create_or_update_planos_create_or_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./planos/planos-create-or-update/planos-create-or-update.component */ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.ts");
/* harmony import */ var _turmas_list_turmas_list_turmas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./turmas/list-turmas/list-turmas.component */ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.ts");
/* harmony import */ var _alunos_frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alunos/frequencia/frequencia.component */ "./src/app/pages/pilates/alunos/frequencia/frequencia.component.ts");
/* harmony import */ var _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./financeiro/financeiro.component */ "./src/app/pages/pilates/financeiro/financeiro.component.ts");
/* harmony import */ var _financeiro_despesas_list_despesas_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./financeiro/despesas-list/despesas-list.component */ "./src/app/pages/pilates/financeiro/despesas-list/despesas-list.component.ts");
/* harmony import */ var _financeiro_despesas_create_or_update_despesas_create_or_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./financeiro/despesas-create-or-update/despesas-create-or-update.component */ "./src/app/pages/pilates/financeiro/despesas-create-or-update/despesas-create-or-update.component.ts");
/* harmony import */ var _financeiro_itens_create_or_update_itens_create_or_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./financeiro/itens-create-or-update/itens-create-or-update.component */ "./src/app/pages/pilates/financeiro/itens-create-or-update/itens-create-or-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var PilatesModule = /** @class */ (function () {
    function PilatesModule() {
    }
    PilatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _pilates_routing__WEBPACK_IMPORTED_MODULE_5__["PilatesRoutingModule"]
            ],
            declarations: [_pilates_component__WEBPACK_IMPORTED_MODULE_4__["PilatesComponent"], _instrutores_instrutores_list_instrutores_list_component__WEBPACK_IMPORTED_MODULE_6__["InstrutoresListComponent"], _instrutores_instrutores_create_or_update_instrutores_create_or_update_component__WEBPACK_IMPORTED_MODULE_7__["InstrutoresCreateOrUpdateComponent"],
                _alunos_alunos_create_or_update_alunos_create_or_update_component__WEBPACK_IMPORTED_MODULE_8__["AlunosCreateOrUpdateComponent"], _alunos_alunos_list_alunos_list_component__WEBPACK_IMPORTED_MODULE_9__["AlunosListComponent"], _financeiro_fluxo_caixa_list_fluxo_caixa_list_component__WEBPACK_IMPORTED_MODULE_10__["FluxoCaixaListComponent"],
                _financeiro_fluxo_caixa_create_or_update_fluxo_caixa_create_or_update_component__WEBPACK_IMPORTED_MODULE_11__["FluxoCaixaCreateOrUpdateComponent"], _turmas_turmas_create_or_update_turmas_create_or_update_component__WEBPACK_IMPORTED_MODULE_12__["TurmasCreateOrUpdateComponent"], _turmas_turmas_list_turmas_list_component__WEBPACK_IMPORTED_MODULE_13__["TurmasListComponent"],
                _planos_planos_list_planos_list_component__WEBPACK_IMPORTED_MODULE_14__["PlanosListComponent"], _planos_planos_create_or_update_planos_create_or_update_component__WEBPACK_IMPORTED_MODULE_15__["PlanosCreateOrUpdateComponent"], _turmas_list_turmas_list_turmas_component__WEBPACK_IMPORTED_MODULE_16__["ListTurmasComponent"],
                _alunos_frequencia_frequencia_component__WEBPACK_IMPORTED_MODULE_17__["FrequenciaComponent"], _financeiro_financeiro_component__WEBPACK_IMPORTED_MODULE_18__["FinanceiroComponent"], _financeiro_despesas_list_despesas_list_component__WEBPACK_IMPORTED_MODULE_19__["DespesasListComponent"], _financeiro_despesas_create_or_update_despesas_create_or_update_component__WEBPACK_IMPORTED_MODULE_20__["DespesasCreateOrUpdateComponent"], _financeiro_itens_create_or_update_itens_create_or_update_component__WEBPACK_IMPORTED_MODULE_21__["ItensCreateOrUpdateComponent"]],
            exports: [_pilates_component__WEBPACK_IMPORTED_MODULE_4__["PilatesComponent"]]
        })
    ], PilatesModule);
    return PilatesModule;
}());



/***/ }),

/***/ "./src/app/pages/pilates/pilates.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/pilates/pilates.routing.ts ***!
  \**************************************************/
/*! exports provided: PilatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PilatesRoutingModule", function() { return PilatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pilates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pilates.component */ "./src/app/pages/pilates/pilates.component.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/pages/pilates/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var pilatesRoutes = [
    { path: '', component: _pilates_component__WEBPACK_IMPORTED_MODULE_2__["PilatesComponent"],
        children: [
            { path: 'alunos', component: ___WEBPACK_IMPORTED_MODULE_3__["AlunosListComponent"] },
            { path: 'alunos/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["AlunosCreateOrUpdateComponent"] },
            { path: 'alunos/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["AlunosCreateOrUpdateComponent"] },
            { path: 'alunos/frequencia', component: ___WEBPACK_IMPORTED_MODULE_3__["FrequenciaComponent"] },
            { path: 'instrutores', component: ___WEBPACK_IMPORTED_MODULE_3__["InstrutoresListComponent"] },
            { path: 'instrutores/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["InstrutoresCreateOrUpdateComponent"] },
            { path: 'instrutores/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["InstrutoresCreateOrUpdateComponent"] },
            { path: 'turmas', component: ___WEBPACK_IMPORTED_MODULE_3__["TurmasListComponent"] },
            { path: 'turmas/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["TurmasCreateOrUpdateComponent"] },
            { path: 'turmas/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["TurmasCreateOrUpdateComponent"] },
            { path: 'listturmas', component: ___WEBPACK_IMPORTED_MODULE_3__["ListTurmasComponent"] },
            { path: 'planos', component: ___WEBPACK_IMPORTED_MODULE_3__["PlanosListComponent"] },
            { path: 'planos/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["PlanosCreateOrUpdateComponent"] },
            { path: 'planos/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["PlanosCreateOrUpdateComponent"] },
            { path: 'financeiro', component: ___WEBPACK_IMPORTED_MODULE_3__["FinanceiroComponent"] },
            { path: 'financeiro/fluxo', component: ___WEBPACK_IMPORTED_MODULE_3__["FluxoCaixaListComponent"] },
            { path: 'financeiro/fluxo/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["FluxoCaixaCreateOrUpdateComponent"] },
            { path: 'financeiro/fluxo/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["FluxoCaixaCreateOrUpdateComponent"] },
            { path: 'financeiro/despesas', component: ___WEBPACK_IMPORTED_MODULE_3__["DespesasListComponent"] },
            { path: 'financeiro/despesas/:id/add', component: ___WEBPACK_IMPORTED_MODULE_3__["DespesasCreateOrUpdateComponent"] },
            { path: 'financeiro/despesas/:id/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["DespesasCreateOrUpdateComponent"] },
            { path: 'financeiro/itens/:id/:idf/add', component: ___WEBPACK_IMPORTED_MODULE_3__["ItensCreateOrUpdateComponent"] },
            { path: 'financeiro/itens/:id/:idf/edit', component: ___WEBPACK_IMPORTED_MODULE_3__["ItensCreateOrUpdateComponent"] },
        ]
    },
];
var PilatesRoutingModule = /** @class */ (function () {
    function PilatesRoutingModule() {
    }
    PilatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pilatesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PilatesRoutingModule);
    return PilatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Detalhes do Plano\n    <a [routerLink]=\"['/pilates/planos']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\" \n        title=\"Voltar\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"detalhes-tab\" data-toggle=\"tab\" href=\"#detalhes\" role=\"tab\" aria-controls=\"detalhes\"\n          aria-selected=\"true\">Detalhes</a>\n      </li>\n      <!--li class=\"nav-item disabled\">\n        <a class=\"nav-link\" id=\"obs-tab\" data-toggle=\"tab\" href=\"#obs\" role=\"tab\" aria-controls=\"obs\" aria-selected=\"false\">Alunos</a>\n      </li-->\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n      <div class=\"row tab-pane fade show active\" id=\"detalhes\" role=\"tabpanel\" aria-labelledby=\"detalhes-tab\" style=\"margin-left: 10px;\">\n        <div class=\"col-xs-12\">\n          <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n            <div class=\"col-xs-12\">\n              <div class=\"row\">\n\n                <div class=\"col-sm-12 col-md-5\">\n                  <div class=\"form-group\">\n                    <label for=\"nome\">Nome</label>\n                    <input id=\"nome\" type=\"text\" class=\"form-control\" formControlName=\"nome\" ikUpCase />\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12 col-md-2\">\n                  <div class=\"form-group\">\n                    <label for=\"valor\">valor</label>\n                    <input id=\"valor\" type=\"number\" step=\".1\" class=\"form-control\" formControlName=\"valor\" ikUpCase />\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12 col-md-12\">\n                  <div class=\"form-group\">\n                    <label for=\"descricao\">Descrição</label>\n                    <input id=\"descricao\" type=\"text\" class=\"form-control\" formControlName=\"descricao\" ikUpCase />\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <hr />\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formulario.valid\">Salvar</button>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"obs\" role=\"tabpanel\" aria-labelledby=\"obs-tab\">\n        teste de tab...\n      </div>\n\n    </div>\n  </div>\n  <modal-message></modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PlanosCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosCreateOrUpdateComponent", function() { return PlanosCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
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







var PlanosCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(PlanosCreateOrUpdateComponent, _super);
    function PlanosCreateOrUpdateComponent(planoService, formBuilder, route) {
        var _this = _super.call(this, formBuilder, null, route) || this;
        _this.planoService = planoService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        return _this;
    }
    PlanosCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.planoService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.plano = responseApi.data;
            _this.formulario = _this.formBuilder.group({
                id: [_this.plano.id],
                nome: [_this.plano.nome, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                valor: [_this.plano.valor, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(11)]],
                descricao: [_this.plano.descricao],
                empresa: [_this.plano.empresa],
            });
        }, function (err) {
            _this.openModal("Falha ao localizar plano!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    PlanosCreateOrUpdateComponent.prototype.newRecord = function () {
        this.formulario = this.formBuilder.group({
            id: [null],
            nome: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            valor: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            descricao: [null],
            empresa: [null],
        });
    };
    PlanosCreateOrUpdateComponent.prototype.onSubmite = function () {
        this.plano = this.formulario.value;
        this.save(this.plano);
    };
    PlanosCreateOrUpdateComponent.prototype.save = function (plano) {
        var _this = this;
        this.planoService.createOrUpdate(plano).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.plano = null;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    PlanosCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planos-create-or-update',
            template: __webpack_require__(/*! ./planos-create-or-update.component.html */ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./planos-create-or-update.component.css */ "./src/app/pages/pilates/planos/planos-create-or-update/planos-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["PlanoService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlanosCreateOrUpdateComponent);
    return PlanosCreateOrUpdateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-list/planos-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-list/planos-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-list/planos-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-list/planos-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n    <div class=\"page-top shadow-sm\">\n      Planos Cadastradas\n      <button class=\"btn btn-rlt btn-pdr fa fa-print pull-right sombra-btn\" \n        (click)=\"relatorio()\" title=\"Imprimir\"></button>\n      <a [routerLink]=\"['0','add']\">\n        <button class=\" btn btn-success btn-xs btn-pdr fa fa-plus-circle pull-right sombra-btn\" \n          title=\"Novo Plano\"></button>\n      </a>\n    </div>\n    <div *ngIf=\"planos === undefined\" class=\"text-center\">\n      <loading-spinner></loading-spinner>\n    </div>\n    <div *ngIf=\"planos !== undefined\">\n  \n      <div class=\"card-body\">\n        <table class=\"table table-striped table-bordered table-sm\">\n          <thead>\n            <tr>\n              <th>Nome</th>\n              <th>Valor</th>\n              <th>Descrição</th>\n              <th>Opções</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let plano of planos\">\n              <td class=\"text-center\">{{plano.nome}}</td>\n              <td class=\"text-center\">{{plano.valor | currency: 'BRL'}}</td>\n              <td class=\"text-center\">{{plano.descricao}}</td>\n              <td class=\"text-center\">\n                <a [routerLink]=\"[plano.id, 'edit']\" class=\"componenteform\">\n                  <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                    data-placement=\"bottom\"></button>\n                </a>\n                <a class=\"componenteform\">\n                  <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-placement=\"bottom\"\n                    data-target=\"#modalUtil\" (click)=\"openModalDelete(plano.id, plano.nome, 'o Plano')\">\n                  </button>\n                </a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n  \n      <ikPagination \n        [page]=\"page\" \n        [count]=\"count\" \n        [pages]=\"pages\" \n        [totalElements]=\"totalElements\" \n        (_pageData)=\"pagination($event)\">\n      </ikPagination>\n    </div>\n    <modal-message \n      (onConfirm)=\"deletar($event)\">\n    </modal-message>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/pilates/planos/planos-list/planos-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pilates/planos/planos-list/planos-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlanosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanosListComponent", function() { return PlanosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
/* harmony import */ var src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/relatorio.service */ "./src/app/services/relatorio.service.ts");
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






var PlanosListComponent = /** @class */ (function (_super) {
    __extends(PlanosListComponent, _super);
    function PlanosListComponent(dialogService, planoService, relatorioService) {
        var _this = _super.call(this) || this;
        _this.dialogService = dialogService;
        _this.planoService = planoService;
        _this.relatorioService = relatorioService;
        _this.planos = [];
        return _this;
    }
    PlanosListComponent.prototype.ngOnInit = function () {
        this.getList(this.page, this.count);
    };
    PlanosListComponent.prototype.getList = function (page, count) {
        var _this = this;
        this.planoService.findAllPage(page, count).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.planos = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
            _this.totalElements = responseApi['data']['totalElements'];
        }, function (err) {
            _this.openModal("Falha ao listar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    PlanosListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].DELETE);
    };
    PlanosListComponent.prototype.deletar = function (evento) {
        var _this = this;
        if (evento === true) {
            this.planoService.delete(this.id).subscribe(function (responseApi) {
                _this.openModal("Plano deletado com sucesso!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
                _this.getList(_this.page, _this.count);
            }, function (err) {
                _this.openModal("Falha ao deletar!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
            });
        }
    };
    PlanosListComponent.prototype.relatorio = function () {
        this.relatorioService.relPlanos()
            .then(function (relatorio) {
            var url = window.URL.createObjectURL(relatorio);
            window.open(url);
        });
    };
    PlanosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planos-list',
            template: __webpack_require__(/*! ./planos-list.component.html */ "./src/app/pages/pilates/planos/planos-list/planos-list.component.html"),
            styles: [__webpack_require__(/*! ./planos-list.component.css */ "./src/app/pages/pilates/planos/planos-list/planos-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["PlanoService"],
            src_app_services_relatorio_service__WEBPACK_IMPORTED_MODULE_5__["RelatorioService"]])
    ], PlanosListComponent);
    return PlanosListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_1__["PageList"]));



/***/ }),

/***/ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-flat\">\n  <div class=\"page-top shadow-sm\">\n    HORÁRIOS PILATES\n    <button class=\"btn btn-rlt btn-pdr fa fa-print pull-right sombra-btn\" (click)=\"makerPdf()\"\n      title=\"imprimir\"></button>\n  </div>\n\n  <div class=\"row\" id=\"my-table-p1\">\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>SEGUNDA</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.segunda\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>QUARTA</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.quarta\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>SEXTA</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.sexta\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\" id=\"my-table-p2\">\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>TERÇA</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.terca\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>QUINTA</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.quinta\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-4\">\n      <div class=\"card-flat\">\n        <div class=\"text-center\" style=\"background: lightgray\">\n          <strong>SÁBADO</strong>\n        </div>\n        <div *ngFor=\"let turma of dias.sabado\">\n          <strong><u>{{turma.horario}} - {{turma.instrutor.nome}}</u></strong>\n          <div *ngFor=\"let aluno of turma.alunos\">\n            - {{aluno.nome}}\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--table class=\"table table-striped table-bordered table-hover table-sm\" id=\"tablebx\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Dia</th>\n        <th scope=\"col\">Horário</th>\n        <th scope=\"col\">Instrutor</th>\n        <th scope=\"col\">Alunos</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td [attr.rowspan]=\"dias.segunda.length +1\"><b>SEGUNDA</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.segunda\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td [attr.rowspan]=\"dias.terca.length +1\"><b>TERÇA</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.terca\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td [attr.rowspan]=\"dias.quarta.length +1\"><b>QUARTA</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.quarta\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td [attr.rowspan]=\"dias.quinta.length +1\"><b>QUINTA</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.quinta\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td [attr.rowspan]=\"dias.sexta.length +1\"><b>SEXTA</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.sexta\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n      <tr>\n        <td [attr.rowspan]=\"dias.sabado.length +1\"><b>SÁBADO</b></td>\n      </tr>\n      <tr *ngFor=\"let turma of dias.sabado\">\n        <td>{{turma.horario}}</td>\n        <td>{{turma.instrutor.nome}}</td>\n        <td>\n          <span *ngFor=\"let aluno of turma.alunos\">\n            -{{aluno.nome}}<br>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table-->\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListTurmasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTurmasComponent", function() { return ListTurmasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListTurmasComponent = /** @class */ (function () {
    function ListTurmasComponent(turmaService) {
        this.turmaService = turmaService;
        this.dias = new _shared__WEBPACK_IMPORTED_MODULE_1__["Dias"]([], [], [], [], [], []);
        this.base64Img = null;
        this.margins = {
            top: 70,
            bottom: 40,
            left: 30,
            width: 550
        };
        this.shared = _services__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    ListTurmasComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    ListTurmasComponent.prototype.getList = function () {
        var _this = this;
        this.turmaService.findAll().subscribe(function (responseApi) {
            _this.turmas = responseApi.data;
            for (var _i = 0, _a = _this.turmas; _i < _a.length; _i++) {
                var t = _a[_i];
                if (t.dia === "SEGUNDA") {
                    _this.dias.segunda.push(t);
                }
                if (t.dia === "TERCA") {
                    _this.dias.terca.push(t);
                }
                if (t.dia === "QUARTA") {
                    _this.dias.quarta.push(t);
                }
                if (t.dia === "QUINTA") {
                    _this.dias.quinta.push(t);
                }
                if (t.dia === "SEXTA") {
                    _this.dias.sexta.push(t);
                }
                if (t.dia === "SABADO") {
                    _this.dias.sabado.push(t);
                }
            }
        });
    };
    ListTurmasComponent.prototype.makerPdf = function () {
        this.shared.pdfMaker(document.getElementById('my-table-p1'), document.getElementById('my-table-p2'));
    };
    ListTurmasComponent.prototype.compare = function (a, b) {
        if (a.horario < b.horario) {
            return -1;
        }
        if (a.horario > b.horario) {
            return 1;
        }
        return 0;
    };
    ListTurmasComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            // options
            icon: 'fa fa-plus',
            title: 'Bootstrap notify',
            message: 'Turning standard Bootstrap alerts into "notify" like notifications',
            url: 'https://github.com/mouse0270/bootstrap-notify',
            target: '_blank'
        }, {
            // settings
            element: 'body',
            position: null,
            type: "info",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> <br>' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    ListTurmasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-turmas',
            template: __webpack_require__(/*! ./list-turmas.component.html */ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.html"),
            styles: [__webpack_require__(/*! ./list-turmas.component.css */ "./src/app/pages/pilates/turmas/list-turmas/list-turmas.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["TurmaService"]])
    ], ListTurmasComponent);
    return ListTurmasComponent;
}());



/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"page-top\">\n    Detalhes da Turma\n    <a [routerLink]=\"['/pilates/turmas']\">\n      <button class=\" btn btn-warning btn-xs btn-pdr fa fa-arrow-circle-left pull-right sombra-btn\"\n       title=\"Voltar\"></button>\n    </a>\n  </div>\n  <div class=\"card-body\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"detalhes-tab\" data-toggle=\"tab\" href=\"#detalhes\" role=\"tab\" aria-controls=\"detalhes\"\n          aria-selected=\"true\">Detalhes</a>\n      </li>\n      <li class=\"nav-item disabled\">\n        <a class=\"nav-link\" id=\"obs-tab\" data-toggle=\"tab\" href=\"#obs\" role=\"tab\" aria-controls=\"obs\" aria-selected=\"false\">Alunos</a>\n      </li>\n    </ul>\n\n    <div class=\"tab-content\" id=\"myTabContent\">\n\n      <div class=\"row tab-pane fade show active\" id=\"detalhes\" role=\"tabpanel\" aria-labelledby=\"detalhes-tab\" style=\"margin-left: 10px;\"> \n        <div class=\"col-xs-12\">\n          <form [formGroup]=\"formulario\" (ngSubmit)=\"onSubmite()\" *ngIf=\"formulario !== undefined\">\n            <div class=\"col-xs-12\">\n              <div class=\"row\">\n                <div class=\"col-sm-12 col-md-3\">\n                  <div class=\"form-group\">\n                    <label for=\"tipo\" class=\"control-label\">Tipo</label>\n                    <select class=\"form-control\" id=\"dia\" formControlName=\"dia\">\n                      <option value=\"SEGUNDA\">Segunda-feira</option>\n                      <option value=\"TERCA\">Terça-feira</option>\n                      <option value=\"QUARTA\">Quarta-feira</option>\n                      <option value=\"QUINTA\">Quinta-feira</option>\n                      <option value=\"SEXTA\">Sexta-feira</option>\n                      <option value=\"SABADO\">Sábado</option>\n\n                    </select>\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"nome\">Horário</label>\n                    <input id=\"horario\" type=\"text\" class=\"form-control\" formControlName=\"horario\" IkMask=\"99:99-99:99\" />\n                  </div>\n                </div>\n                <div class=\"col-sm-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"instrutor\" class=\"control-label\">Instrutor</label>\n                    <select class=\"form-control\" id=\"instrutor\" formControlName=\"instrutor\" [compareWith]=\"testInstrutor\">\n                      <option *ngFor=\"let instrutor of instrutores\" [ngValue]=\"instrutor\">{{instrutor.nome}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr />\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formulario.valid\">Salvar</button>\n          </form>\n        </div>\n      </div>\n\n      <div class=\"tab-pane fade\" id=\"obs\" role=\"tabpanel\" aria-labelledby=\"obs-tab\">\n        \n        <div class=\"col-xs-12 card-flat\">\n          <table class=\"table table-striped table-bordered\">\n            <thead>\n              <tr>\n                <th>Nome</th>\n                <th>Celular</th>\n                <th>Email</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let aluno of alunos\">\n                <td class=\"text-center\">{{aluno.nome}}</td>\n                <td class=\"text-center\">{{aluno.celular}}</td>\n                <td class=\"text-center\">{{aluno.email}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        \n\n\n      </div>\n\n    </div>\n  </div>\n  <modal-message></modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TurmasCreateOrUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmasCreateOrUpdateComponent", function() { return TurmasCreateOrUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Angular/forms */ "./node_modules/@Angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components */ "./src/app/components/index.ts");
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







var TurmasCreateOrUpdateComponent = /** @class */ (function (_super) {
    __extends(TurmasCreateOrUpdateComponent, _super);
    function TurmasCreateOrUpdateComponent(turmaService, userService, formBuilder, route) {
        var _this = _super.call(this, formBuilder, null, route) || this;
        _this.turmaService = turmaService;
        _this.userService = userService;
        _this.formBuilder = formBuilder;
        _this.route = route;
        return _this;
    }
    TurmasCreateOrUpdateComponent.prototype.findById = function (id) {
        var _this = this;
        this.turmaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.turma = responseApi.data;
            _this.alunos = _this.turma.alunos;
            _this.listFactory();
            _this.formulario = _this.formBuilder.group({
                id: [_this.turma.id],
                dia: [_this.turma.dia, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
                horario: [_this.turma.horario, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
                tipo: ["Normal"],
                empresa: [_this.turma.empresa],
                instrutor: [_this.turma.instrutor, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        }, function (err) {
            _this.openModal("Falha ao localizar turma!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    TurmasCreateOrUpdateComponent.prototype.newRecord = function () {
        this.listFactory();
        this.formulario = this.formBuilder.group({
            id: [null],
            dia: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            horario: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            tipo: ['Normal'],
            empresa: [null],
            instrutor: [null, [_Angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    TurmasCreateOrUpdateComponent.prototype.onSubmite = function () {
        this.turma = this.formulario.value;
        this.save(this.turma);
    };
    TurmasCreateOrUpdateComponent.prototype.save = function (turma) {
        var _this = this;
        this.turmaService.createOrUpdate(turma).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (responseApi) {
            _this.turma = null;
            _this.openModal("Cadastro realizado com sucesso!!", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].SUCCESS);
            _this.resetForm();
        }, function (err) {
            _this.openModal("Falha ao realizar cadastro!! (" + err['error']['errors'][0] + ")", _components__WEBPACK_IMPORTED_MODULE_6__["MsgType"].ERROR);
        });
    };
    TurmasCreateOrUpdateComponent.prototype.listFactory = function () {
        var _this = this;
        this.userService.findListAllByTipo('Instrutor').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.instrutores = responseApi;
        });
    };
    TurmasCreateOrUpdateComponent.prototype.testInstrutor = function (inst1, inst2) {
        return inst1 && inst2 ? (inst1.nome === inst2.nome && inst1.id === inst2.id) : inst1 === inst2;
    };
    TurmasCreateOrUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-turmas-create-or-update',
            template: __webpack_require__(/*! ./turmas-create-or-update.component.html */ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.html"),
            styles: [__webpack_require__(/*! ./turmas-create-or-update.component.css */ "./src/app/pages/pilates/turmas/turmas-create-or-update/turmas-create-or-update.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["TurmaService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _Angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TurmasCreateOrUpdateComponent);
    return TurmasCreateOrUpdateComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_4__["CreateOrUpdate"]));



/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\n  <div class=\"page-top shadow-sm\">\n    <div class=\"row\">\n      <div class=\"col-sm-7 text-center\">\n        Turmas Cadastrados\n      </div>\n      <div class=\"col-sm-1\">\n        <select class=\"form-control search-input text-center\" id=\"status\" [(ngModel)]=\"count\" (change)=\"ngOnInit()\">\n          <option *ngFor=\"let opt of counts\" [ngValue]=\"opt\">{{opt}}</option>\n        </select>\n      </div>\n      <div class=\"col-sm-3\">\n        <select class=\"form-control search-input\" id=\"instrutor\" title=\"Selecione o Instrutor\" \n                [(ngModel)]=\"instrutor\" (change)=\"ngOnInit()\" [compareWith]=\"testInstrutor\">\n          <option *ngFor=\"let instrutor of instrutores\" [ngValue]=\"instrutor\">{{instrutor.nome}}</option>\n        </select>\n      </div>\n      <div class=\"col-sm-1\">\n        <a [routerLink]=\"['0','add']\">\n          <button class=\" btn btn-success btn-xs btn-pdr fa fa-plus-circle pull-right sombra-btn\" \n            title=\"Nova Turma\"></button>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"turmas === undefined\" class=\"text-center\">\n    <loading-spinner></loading-spinner>\n  </div>\n  <div *ngIf=\"turmas !== undefined\">\n\n    <div class=\"card-body\">\n      <table class=\"table table-striped table-bordered table-sm\">\n        <thead>\n          <tr>\n            <th>Dia</th>\n            <th>Horário</th>\n            <th>Instrutor</th>\n            <th>alunos</th>\n            <th>Opções</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let turma of turmas\">\n            <td class=\"text-center\">{{turma.dia | diaSemana}}</td>\n            <td class=\"text-center\">{{turma.horario}}</td>\n            <td class=\"text-center\">{{turma.instrutor.nome}}</td>\n            <td class=\"text-center\">{{turma.alunos.length}}</td>\n            <td class=\"text-center\">\n              <a [routerLink]=\"[turma.id, 'edit']\" class=\"componenteform\">\n                <button class=\" btn btn-primary fa fa-pencil sombra-btn\" title=\"Detalhes\" data-toggle=\"tooltip\"\n                  data-placement=\"bottom\"></button>\n              </a>\n              <a class=\"componenteform\">\n                <button type=\"button\" class=\"btn btn-danger fa fa-trash sombra-btn\" title=\"Deletar\" data-placement=\"bottom\"\n                  data-target=\"#modalUtil\" (click)=\"openModalDelete(turma.id, turma.horario, 'a Turma')\">\n                </button>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ikPagination [page]=\"page\" [count]=\"count\" [pages]=\"pages\" [totalElements]=\"totalElements\" (_pageData)=\"pagination($event)\">\n    </ikPagination>\n  </div>\n  <modal-message (onConfirm)=\"deletar($event)\">\n  </modal-message>\n</div>"

/***/ }),

/***/ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: TurmasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurmasListComponent", function() { return TurmasListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var TurmasListComponent = /** @class */ (function (_super) {
    __extends(TurmasListComponent, _super);
    function TurmasListComponent(turmaService, userService) {
        var _this = _super.call(this) || this;
        _this.turmaService = turmaService;
        _this.userService = userService;
        _this.turmas = [];
        _this.instrutor = "all";
        return _this;
    }
    TurmasListComponent.prototype.ngOnInit = function () {
        this.listFactory();
        this.getList(this.page, this.count);
    };
    TurmasListComponent.prototype.getList = function (page, count) {
        var _this = this;
        if (this.instrutor === "all") {
            this.turmaService.findAllPage(page, count).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (responseApi) {
                _this.turmas = responseApi['data']['content'];
                _this.pages = new Array(responseApi['data']['totalPages']);
                _this.totalElements = responseApi['data']['totalElements'];
            }, function (err) {
                _this.openModal("Falha ao listar!! (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
            });
        }
        else {
            this.turmaService.findAllPageByInstrutor(page, count, this.instrutor.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (responseApi) {
                _this.turmas = responseApi['data']['content'];
                _this.pages = new Array(responseApi['data']['totalPages']);
                _this.totalElements = responseApi['data']['totalElements'];
            }, function (err) {
                _this.openModal("Falha ao listar!! (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
            });
        }
    };
    TurmasListComponent.prototype.openModalDelete = function (id, nome, usuario) {
        this.id = id;
        this.openModal("Deseja deletar " + usuario + ": " + nome, _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].DELETE);
    };
    TurmasListComponent.prototype.deletar = function (evento) {
        if (evento === true) {
            this.checkTurma(this.id);
        }
    };
    TurmasListComponent.prototype.deleteTurma = function (id) {
        var _this = this;
        this.turmaService.delete(this.id).subscribe(function (responseApi) {
            _this.openModal("Turma deletada com sucesso!", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].SUCCESS);
            _this.getList(_this.page, _this.count);
        }, function (err) {
            _this.openModal("Falha ao deletar!! (" + err['error']['message'] + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
        });
    };
    TurmasListComponent.prototype.listFactory = function () {
        var _this = this;
        this.userService.findListAllByTipo('Instrutor').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            _this.instrutores = responseApi;
        });
    };
    TurmasListComponent.prototype.testInstrutor = function (inst1, inst2) {
        return inst1 && inst2 ? (inst1.nome === inst2.nome && inst1.id === inst2.id) : inst1 === inst2;
    };
    TurmasListComponent.prototype.checkTurma = function (id) {
        var _this = this;
        var turma;
        this.turmaService.findById(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (responseApi) {
            turma = responseApi.data;
            console.log(turma.alunos);
            if (turma.alunos.length !== 0) {
                _this.openModal("A turma tem alunos vinculados (" + turma.alunos.length + ")", _components__WEBPACK_IMPORTED_MODULE_4__["MsgType"].ERROR);
            }
            else {
                _this.deleteTurma(_this.id);
            }
        });
    };
    TurmasListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-turmas-list',
            template: __webpack_require__(/*! ./turmas-list.component.html */ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.html"),
            styles: [__webpack_require__(/*! ./turmas-list.component.css */ "./src/app/pages/pilates/turmas/turmas-list/turmas-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["TurmaService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], TurmasListComponent);
    return TurmasListComponent;
}(_shared__WEBPACK_IMPORTED_MODULE_2__["PageList"]));



/***/ }),

/***/ "./src/app/services/relatorio.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/relatorio.service.ts ***!
  \***********************************************/
/*! exports provided: RelatorioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioService", function() { return RelatorioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/api */ "./src/app/config/api.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelatorioService = /** @class */ (function () {
    function RelatorioService(planoService, http) {
        this.planoService = planoService;
        this.http = http;
    }
    RelatorioService.prototype.relPlanos = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_2__["API"] + "/relatorios/planos", { params: params, responseType: 'blob' })
            .toPromise();
    };
    RelatorioService.prototype.relAlunos = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_2__["API"] + "/relatorios/alunos", { params: params, responseType: 'blob' })
            .toPromise();
    };
    RelatorioService.prototype.relFrequencia = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.http.get(src_app_config_api__WEBPACK_IMPORTED_MODULE_2__["API"] + "/relatorios/alunos/frequencia", { params: params, responseType: 'blob' })
            .toPromise();
    };
    RelatorioService.prototype.relFluxoCaixa = function (fluxo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        return this.http.post(src_app_config_api__WEBPACK_IMPORTED_MODULE_2__["API"] + "/relatorios/fluxoCaixa", fluxo, { params: params, responseType: 'blob' })
            .toPromise();
    };
    RelatorioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_3__["PlanoService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RelatorioService);
    return RelatorioService;
}());



/***/ }),

/***/ "./src/app/shared/models/itemFrequencia.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/itemFrequencia.ts ***!
  \*************************************************/
/*! exports provided: ItemFrequencia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemFrequencia", function() { return ItemFrequencia; });
var ItemFrequencia = /** @class */ (function () {
    function ItemFrequencia(dia, horario, alunos, intDia) {
        this.dia = dia;
        this.horario = horario;
        this.alunos = alunos;
        this.intDia = intDia;
        this.intDia = this.getIntDia(this.dia);
    }
    ItemFrequencia.prototype.getIntDia = function (dia) {
        if (dia === 'DOMINGO') {
            return 0;
        }
        if (dia === 'SEGUNDA') {
            return 1;
        }
        if (dia === 'TERCA') {
            return 2;
        }
        if (dia === 'QUARTA') {
            return 3;
        }
        if (dia === 'QUINTA') {
            return 4;
        }
        if (dia === 'SEXTA') {
            return 5;
        }
        if (dia === 'SABADO') {
            return 6;
        }
    };
    return ItemFrequencia;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pilates-pilates-module.js.map
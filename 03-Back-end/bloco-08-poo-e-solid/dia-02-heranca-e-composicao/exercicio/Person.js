"use strict";
// ./Person.ts
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.MINIMUM_NAME_LENGTH = 3;
        this.MAXIMUM_AGE = 120;
        this.validatePerson(); // validação do objeto criado com o construtor da classe
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (date) {
            this.validateBirthDate(date);
            this._birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (date) {
        var diff = Math.abs(new Date().getTime() - date.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    Person.prototype.validateName = function (name) {
        if (name.length < this.MINIMUM_NAME_LENGTH) {
            throw new Error("O nome deve conter no m\u00EDnimo " + this.MINIMUM_NAME_LENGTH + " caracteres.");
        }
    };
    Person.prototype.validateBirthDate = function (date) {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        }
        if (Person.getAge(date) > this.MAXIMUM_AGE) {
            throw new Error("A pessoa deve ter no m\u00E1ximo " + this.MAXIMUM_AGE + " anos.");
        }
    };
    Person.prototype.validatePerson = function () {
        this.validateName(this.name);
        this.validateBirthDate(this.birthDate);
    };
    return Person;
}());
exports.default = Person;

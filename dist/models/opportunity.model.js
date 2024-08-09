"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opportunity = void 0;
class opportunity {
    constructor(name, center, info) {
        this.name = '';
        this.info = '';
        this.volMatches = [];
        this.name = name;
        this.date = Date().toString();
        this.center = center;
        this.info = info;
    }
}
exports.opportunity = opportunity;

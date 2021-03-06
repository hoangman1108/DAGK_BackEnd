"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateColumnPipe = void 0;
const common_1 = require("@nestjs/common");
const column_dto_1 = require("../../column/column.dto");
let CreateColumnPipe = class CreateColumnPipe {
    async transform(value) {
        if (!value.boardId) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'BOARD_REQUIRED',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        if (!value.name) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: 'NAME_REQUIRED',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
};
CreateColumnPipe = __decorate([
    common_1.Injectable()
], CreateColumnPipe);
exports.CreateColumnPipe = CreateColumnPipe;
//# sourceMappingURL=createColumnPipe.class.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDispFromName(file) {
    if (file.split('_').length < 2)
        return false;
    return file.split('_')[1].split('.')[0];
}
exports.getDispFromName = getDispFromName;
function getTimeFromName(file) {
    if (file.split('_').length < 3)
        return false;
    return parseInt(file.split('_')[2].split('.')[0]);
}
exports.getTimeFromName = getTimeFromName;
function getDurateFromName(file) {
    if (file.split('_').length < 4)
        return false;
    return parseInt(file.split('_')[3].split('.')[0]);
}
exports.getDurateFromName = getDurateFromName;

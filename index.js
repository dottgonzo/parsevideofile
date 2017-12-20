"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFolderFromPath(file) {
    if (file.split('/').length > 1)
        return file.split('/')[file.split('/').length - 1];
    return file;
}
function constructFileObject(fullpath) {
    var fullname = fullpath.split('/')[fullpath.split('/').length - 1];
    return {
        dir: fullpath.split('/' + fullname)[0],
        name: fullname.split('.')[fullname.split('.').length - 2],
        fullname: fullname,
        extension: fullname.split('.')[fullname.split('.').length - 1],
        fullpath: fullpath,
    };
}
exports.constructFileObject = constructFileObject;
function getDispFromName(file) {
    file = removeFolderFromPath(file);
    if (file.split('_').length < 2)
        return false;
    return file.split('_')[1].split('.')[0];
}
exports.getDispFromName = getDispFromName;
function getTimeFromName(file) {
    file = removeFolderFromPath(file);
    if (file.split('_').length < 3)
        return false;
    return parseInt(file.split('_')[2].split('.')[0]);
}
exports.getTimeFromName = getTimeFromName;
function getDurateFromName(file) {
    file = removeFolderFromPath(file);
    if (file.split('_').length < 4)
        return false;
    return parseInt(file.split('_')[3].split('.')[0]);
}
exports.getDurateFromName = getDurateFromName;

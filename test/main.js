"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser = require("../index");
var chai = require("chai");
var expect = chai.expect;
var disp0 = '42323';
var time0 = 1513768109127;
var disp1 = '4453';
var time1 = 1513768139127;
var durate1 = 1536;
var testfile0 = '/ee/cc/vdeo_' + disp0 + '_' + time0 + '.flv';
var testfile1 = 'vdeo_' + disp1 + '_' + time1 + '_' + durate1 + '.flv';
describe('fileparser', function () {
    describe('test file with device and timestamp', function () {
        it('get device', function () {
            var device = parser.getDispFromName(testfile0);
            expect(device).to.be.a('String');
            expect(device).to.eq(disp0);
        });
        it('get timestamp', function () {
            var time = parser.getTimeFromName(testfile0);
            expect(time).to.be.a('Number');
            expect(time).to.eq(time0);
        });
        it('get durate', function () {
            var durate = parser.getDurateFromName(testfile0);
            expect(durate).to.be.not.ok;
        });
    });
    describe('test file with device and timestamp', function () {
        it('get device', function () {
            var device = parser.getDispFromName(testfile1);
            expect(device).to.be.a('String');
            expect(device).to.eq(disp1);
        });
        it('get timestamp', function () {
            var time = parser.getTimeFromName(testfile1);
            expect(time).to.be.a('Number');
            expect(time).to.eq(time1);
        });
        it('get durate', function () {
            var durate = parser.getDurateFromName(testfile1);
            expect(durate).to.be.a('Number');
            expect(durate).to.eq(durate1);
        });
    });
});

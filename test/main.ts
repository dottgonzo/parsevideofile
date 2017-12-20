import * as parser from "../index"

import * as chai from "chai"

const expect = chai.expect

const disp0='42323'
const time0=1513768109127

const disp1='4453'
const time1=1513768139127
const durate1=1536


const testfile0 = '/ee/cc/vdeo_'+disp0+'_'+time0+'.flv'

const testfile1 = 'vdeo_'+disp1+'_'+time1+'_'+durate1+'.flv'



describe('fileparser', function () {

  describe('test file with device and timestamp', function () {

    it('get device', () => {
      const device=parser.getDispFromName(testfile0)

      expect(device).to.be.a('String')
      expect(device).to.eq(disp0)

    })

    it('get timestamp', () => {
      const time=parser.getTimeFromName(testfile0)
      expect(time).to.be.a('Number')
      expect(time).to.eq(time0)

    })


    it('get durate', () => {
      const durate=parser.getDurateFromName(testfile0)
      expect(durate).to.be.not.ok
    })

  })

  describe('test file with device and timestamp', function () {

    it('get device', () => {
      const device=parser.getDispFromName(testfile1)

      expect(device).to.be.a('String')
      expect(device).to.eq(disp1)

    })

    it('get timestamp', () => {
      const time=parser.getTimeFromName(testfile1)
      expect(time).to.be.a('Number')
      expect(time).to.eq(time1)

    })

    it('get durate', () => {
      const durate=parser.getDurateFromName(testfile1)
      expect(durate).to.be.a('Number')
      expect(durate).to.eq(durate1)

    })

  })

  // TODO: test constructFileObject

})

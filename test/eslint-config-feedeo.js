/*
 * Copyright (c) 2017, Feedeo AB <hugo@feedeo.io>.
 *
 * This source code is licensed under the license found in the 
 * LICENSE file in the root directory of this source tree.
 */

describe('ESlint configuration', () => {
  let subject

  describe('when exporting', () => {
    beforeEach(() => {
      subject = require('../src/eslint-config-hfreire')
    })

    it('should export configuration extending standard', () => {
      subject.should.have.property('extends')
      subject.extends.should.include('standard')
    })

    it('should export configuration using mocha plugin', () => {
      subject.should.have.property('plugins')
      subject.plugins.should.include('mocha')
    })
  })
})

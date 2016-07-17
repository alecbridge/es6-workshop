// WRITE YOUR IMPORT STATEMENTS HERE
import * as Mathy from '../common/Mathy'
import _ from 'lodash'
import {sqrt as mySqrt, square as mySquare} from '../common/Mathy'

import {expect} from 'chai'

describe('ES6 Modules', () => {
  it('can import Mathy', () => {

    expect(Mathy.sqrt).to.exist
    expect(Mathy.square).to.exist
    expect(Mathy.diag).to.exist
  })


  it('can destructure the import, to only retain pieces of the import', () => {

    expect(mySqrt).to.exist
    expect(mySquare).to.exist
    expect(mySqrt).to.equal(Mathy.sqrt)
    expect(mySquare).to.equal(Mathy.square)
  })

  it('can import from my node_modules', () => {

    expect(_).to.exist

  })
})

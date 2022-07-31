class Vector {

  _array
  _dimensions
  _dimensionsProduct

  constructor(...dimensions) {
    
    this._dimensions = dimensions
    
    this._dimensionsProduct = dimensions
      .slice(1)
      .map((d, i) => dimensions.slice(i + 1, dimensions.length).reduce((a, b) => a * b, 1))
      
    const size = dimensions.reduce((a, b) => a * b, 1)
    
    this._array = new Array(size).fill(null)
  }

  get(...indexes) {
    const index = this._getIndex(indexes)

    return this._array[index]
  }

  set(value, ...indexes) {
    const index = this._getIndex(indexes)

    this._array[index] = value
  }

  fill(value) {
    this._array.fill(value)

    return this
  }

  _validateIndexes(indexes) {
    if(indexes.length !== this._dimensions.length) 
      throw new Error(`Provided indexes are not valid!\nExpected [${this._dimensions.length}] dimensions, actual [${indexes.length}]!`)
    if(indexes.some((i, idx) => i >= this._dimensions[idx] || i < 0))
      throw new Error(`Index out of range!`)
  }

  _getIndex(indexes) {
    this._validateIndexes(indexes)

    return this._calculateIndex(indexes)
  }

  _calculateIndex(indexes) {
    const sum = indexes
      .slice(0, -1).map((i, idx) => i * this._dimensionsProduct[idx])
      .reduce((a, b) => a + b, 0)
    
    return sum + indexes[indexes.length - 1]
  }

}

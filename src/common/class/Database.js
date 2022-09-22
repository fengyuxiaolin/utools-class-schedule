export default class Database{
  constructor({_id, data, _rev}){
    this._id = _id
    this.data = data
    this._rev = _rev
  }
}
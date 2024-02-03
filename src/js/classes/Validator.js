export default class Validator {
  static validateUsername(name) {
    const checkExp = '[a-zA-Z-_0-9]{' + name.length + '}';
    
    if (name.match(checkExp) === null) {
      return 'bad login';
    } else {
      return 'login accessed';
    }
  }
}
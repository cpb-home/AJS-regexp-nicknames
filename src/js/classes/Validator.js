export default class Validator {
  static validateUsername(name) {
    
    if (name.match(/^(?!.*[\d]{4})[a-zA-Z]{1}[a-zA-Z-_0-9]+[a-zA-Z]{1}$/) === null) {
      return `bad login`;
    } 

    return `login accessed`;  
  }
}
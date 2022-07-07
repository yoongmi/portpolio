// @ts-check
// 타입스크립트 파일한테 자바스크립트 파일 확인하라고 알려주는것.
/**
 * 자바스크립트 파일 안에 JSDoc 코멘트만 더하면 타입스크립트가 도와줌.
 * initializes the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config){
    return true;
}
/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code + 1;
}
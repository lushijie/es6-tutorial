/*
* @Author: lushijie
* @Date:   2018-02-11 18:30:51
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-11 18:32:20
*/
import {a, increaseA} from './child.js';
increaseA(); // TypeError: Cannot read property 'a' of undefined
console.log('main,', a);

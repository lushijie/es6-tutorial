/*
* @Author: lushijie
* @Date:   2018-02-11 18:19:51
* @Last Modified by:   lushijie
* @Last Modified time: 2018-02-12 10:11:11
*/
import {a, increaseA} from './child.js';
import './main2.js'; // increaseA, 2; main, 2
increaseA(); // increaseA, 3
console.log('main,', a); // main, 3

import _ from 'lodash';
import lodashEs from 'lodash-es';

export const counter = 5
const currentEnv = import.meta.env; //此时，我们只需要在不同的环境运行， import.meta.env 就会得到对应的环境值
console.log('counter', currentEnv);
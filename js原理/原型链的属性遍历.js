// 遍历原型链
1. for in //语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性。会遍历原型上的属性
obj.hasOwnProperty(属性名)//过滤，不遍历原型上的属性

// 不遍历原型链，只遍历当前对象本身
2. Object.keys(obj)//方法会返回一个由一个给定对象的自身【可枚举属性】组成的数组，数组中属性名的排列顺序和使用 for…in 循环遍历该对象时返回的顺序一致 。不会遍历原型上的属性
3. Object.getOwnPropertyNames(obj)//方法返回一个由指定对象的所有自身属性的属性名（【包括不可枚举属性】但不包括Symbol值作为名称的属性）组成的数组。不会获得原型上的属性
4. Object.getOwnPropertySymbols(obj)//返回自身的Symbol属性
5. Reflect.ownKeys(obj)//返回自身所有属性，包括Symbol
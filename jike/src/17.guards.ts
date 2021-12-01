enum Type {
  Strong,
  Weak
}

class Java {
  java: any;
  constructor() {}
  helloJava() {
    console.log('Java');
  }
}

class JavaScript {
  js: any;
  constructor() {}
  helloJavaScript() {
    console.log('JavaScript');
  }
}

// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
//   if ((lang as Java).helloJava) {
//     return (lang as Java).helloJava();
//   } else {
//     (lang as JavaScript).helloJavaScript();
//   }
// }

// instanceof
// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
//   if (lang instanceof Java) {
//     return lang.helloJava;
//   } else {
//     return lang.helloJavaScript();
//   }
// }

// in
// function getLanguage(type: Type) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript();
//   if ('java' in lang) {
//     return lang.helloJava;
//   } else {
//     return lang.helloJavaScript();
//   }
// }

// typeof
// function getNumber(x: string | number) {
//   if (typeof x === 'string') {
//     return x.length;
//   } else {
//     return x.toFixed();
//   }
// }

// 类型保护函数
// 类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
}


// 实战
const config = {
  a: 1,
  b: 2
};

const defaultConfig = {
  b: 3,
  c: 4
};

for (const key of Object.keys(defaultConfig)) {
  if (key in config) {
    config[key] = defaultConfig[key];
  }
}

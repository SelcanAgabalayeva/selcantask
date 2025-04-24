// 1.
// function existsAndTruthy(obj, propertyName) {
//     return obj.hasOwnProperty(propertyName) && Boolean(obj[propertyName]);
//   }

//   console.log(existsAndTruthy({a:1,b:2,c:3},'b')); 
//   console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y'));  
//   console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z'));
//   2.function removeFalsy(obj) {
    // function removeFalsy(obj) {
    //     for (let key in obj) {
    //       if (!obj[key]) {
    //         delete obj[key];
    //       }
    //     }
    //     return obj;
    //   }
      
      
    //   const obj = {a: 1, b: null, c: "Hello", d: false};
    //   console.log(removeFalsy(obj)); 
    //   3.
    function removeFalsy(obj) {
        for (let key in obj) {
          if (!obj[key]) {
            delete obj[key];
          }
        }
        return obj;
      }
      
      function countObjectProperties(obj) {
        return Object.keys(obj).length;
      }
      const obj = {a: 1, b: null, c: "Hello", d: false};
      console.log(removeFalsy(obj)); 
      console.log(countObjectProperties({a: 1, b: 2, c: 3})); 
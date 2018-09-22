//let a = 12;
const fun1 = function() {
  let a = 13;
  console.log(a);
};
const fun2 = function() {
  let a = 14;
  console.log(a);
  fun3 = function() {
    let a = 15;
    console.log(a);
  };
};

//fun1();
fun2();
fun3();

{
  // console.log("hello world");
  //  "\n" 分行的
  // 注释
  /**
   * 多行注释
   */

  let my_name = "Raymond";
  console.log(my_name);
  my_name = "Tianyang";
  console.log(my_name);

  // 现在不要用var，避免很多问题（变量提升），现在一般用let
  var something = "abc";
  console.log(something);

  // 现在一般用驼峰体
  // undefined（没有定义） 和 null（这里设置空的）两个特殊的变量，有区别
  let firstName = "Raymond",
    lastName = "Guan";
  firstName = undefined;
  firstName = null;
  console.log(firstName);
}
// 加上{}，一个作用域，之后可以再定义同样名字的变量。
// "use strict"
{
  // 新的变量赋值会把老的冲掉
  let a = 1;
  a = "something";
  console.log(a);
  let b = "this is a b";
  let b_1 = "this is a b_1";
  let b_3 = "he said: 'dddsfdsfs'.";
  let b_4 = `"he said: 'dddsfdsfs'"`;
  let b_5 = `he said: ${b}`;
  console.log(b_5);
  // `` ： 1，可以换行！！！；2，可以应用''和"";3,可以应用另一个变量(字符串模板) 相当于 'he said: ' + b

  let b_6 = "" + 1;
  console.log(b_6, typeof b_6);
  let b_7 = +"1";
  console.log(b_7, typeof b_7);
  // 常用的字符串和数字间的转换
  // TODO: 插件安装
  /**FIXME: */

  let c = "hjhjhjhju"; // true false  数字0不存在
  let d = undefined;
  let e = null;

  if (c) {
    console.log("good");
  } else if (d) {
    console.log("bad");
  } else if (e) {
    console.log("OK");
  } else {
  }
}

{
  // {字典}，一一映射关系, 万物皆可 obj 基于对象
  let obj = {
    name: "Raymond",
    age: 18,
    income: 0,
  };
  console.log(obj);
  console.table(obj);

  obj.income = 0;
  console.table("obj");

  obj["name"] = "Tianyang";
  console.table(obj);

  obj["names"] = "asfsadf";
  console.log("obj");
}

{
  let obj = {
    name: "Raymond",
    age: 18,
  };

  let a = 1;
  let b = a;

  console.log(a, b);
  b = 2;
  console.log(a, b);

  let obj_2 = obj;
  console.log(obj, obj_2);
  obj_2.age = 30;
  console.log(obj, obj_2);
  // 引用类型，所以obj_2引用obj，一改都改，相当于别名
  // ...相当于超展开obj，新的语言
  let obj_3 = { ...obj };
  console.log(obj, obj_3);
  obj_3.age = 100;
  console.log(obj, obj_3);

  let user = {
    name: "Raymond",
    age: 18,
    profile: {
      cv: "http://xxxx",
      id: 12121212,
    },
  };

  let user2 = { ...user };
  user2.name = "Peter";
  console.log(user, user2);

  user2.profile.id = 787878787;
  console.log(user, user2);
}

{
  // 囊括起来都是引用关系，引用改了就改了
  let array = [1, 2, 3, "4", true, { name: "Raymond" }];
  console.log(array[8]);

  array[0] = "sdfdf";
  console.table(array);

  let array_1 = array;
  array_1[4] = false;
  console.table(array);

  console.log(array.length);
  console.log(array[6]);
  array[100] = 78;
  console.log(array[100]);
  // 可以不连续，之间的是undefined，但不可以无限加长
  console.log(array.length);
  // 虽然可以定义，但是看不到它(有它，但是看不见)
  array[100].name = "tianyang";
  console.log(array[100]);
  // 如101就不存在会报错，但是{}就会看见，一个非object不会变成真的object。
  // array[99].name = "tianyang"
  // console.log(array[99]);
  array[101] = {};
  array[101].name = "tianyang";
  console.log(array[101]);

  // 端正态度，全身心投入！ 一定要其他所有精力！！！
  // 整套写下来，project，要反思，做笔记 ！！！
}

{
  // const password  = "sdfsdfafasdfdsf"
  // password = "sdfsdfafasdfdfdsf"
  // console.log(password);
  // 不能更改，const会锁定住

  let password2 = "dsasfdfaa";
  password2 = "asdfasdf";
  console.log(password2);

  const obj = {
    name: "asdfafd",
  };
  obj.name = "asfasfasdf";
  console.log(obj);
  // 自身盒子不能被更改，但是放了另一个盒子，里面的小盒子东西能改
}

{
  let x = 10;
  let y = 3;
  console.log(x + y);
  console.log(x - y);
  console.log(x * y);
  console.log(x / y); // 除以0是infinity
  console.log(x % y); //求余
  console.log(x ** y); //几次方
  console.log(Math.sqrt(100));
  console.log(x++); //自加
  console.log(x);
  console.log(x--); //自减
  console.log(x);
  console.log(++x); //先相加后使用
  console.log(x);
  console.log(--x); //先相减后使用
  console.log(x);
}

{
  let x = 10;
  x++;
  x = x + 5;
  x += 5;
  x -= 5;
  x *= 5;
  x **= 5;
  x /= 5;
  x %= 5;

  x ?? 5; //课后查
}

{
  let x = 1;
  console.log(x > 1);
  console.log(x >= 1);
  console.log(x < 1);
  console.log(x <= 1);

  console.log((x = 1)); //把1赋予x
  console.log(x == 1); //在做判断，判断x是否等于1
  console.log(x === 1);

  // == 判断的是数值是否相等；=== justify type & value
  console.log(0 == false);
  console.log(0 != false);

  console.log(0 === false);
  console.log(0 !== false);

  console.log(true == 1);
  console.log(true == 2);
}

{
  let points = 100;
  if (points > 100) {
    console.log("gold");
  } else {
    console.log("silver");
  }

  console.log(points > 100 ? "gold" : "silver"); //三联运算符!!!
}

{
  // && 意为'AND' , 两个都为真，才是真
  console.log(true && true);
  let dayTime = 8;
  if (dayTime > 18 && dayTime < 24) {
    console.log("night");
  } else {
    console.log();
  }

  console.log(false || true);
  //或者
  if ((dayTime > 18 && dayTime < 24) || (dayTime > 0 && dayTime < 6)) {
    console.log("night");
  } else {
    console.log("day");
  }

  // || 选择器 ，
  console.log(0 || false); //0 也算假
  console.log(null || false);
  console.log(undefined || false);
  console.log(NaN || false);

  console.log(3 || false); // 一个数字除了0以外  || false， 都是自己
  console.log(false || 10); //前面是假，看后面的
  console.log(4 || 10); // 前边是真，优先选择前面的

  const port = 5666;
  // const PORT = process.env.PORT || port //例子，端口号

  //取反
  console.log(!!!true);
  // ture == 2 : false  !2 : false
  console.log(true == 2);
  console.log(!2);

  //想提升，就在当下！直接找project 开干！干就完了！！！
}

{
  const roles = ["stduent", "teacher", "boss"];
  let role = roles[1];

  //三种

  if (role === "studnet") {
    console.log("hello!");
  } else if (role === "teacher") {
    console.log("hi");
  } else if (role === "boss") {
    console.log("??");
  } else {
    console.log("...");
  }

  if (role === roles[0]) {
    console.log("hello!");
  } else if (role === roles[1]) {
    console.log("hi");
  } else if (role === roles[2]) {
    console.log("??");
  } else {
    console.log("...");
  }

  switch (role) {
    case roles[0]:
      console.log("hello!");
      break;
    case roles[1]:
      console.log("hi");
      break;
    case roles[2]:
      console.log("??");
      break;
    default:
      console.log("...");
      break;
  }
}

// 第二节课开始时有总结可以之后复习看

{
  let arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 容易卡死，很少用
  let num = 0;
  while (num < 9) {
    arrayNumber[num] += 1;
    num++;
  }
  console.log(arrayNumber);

  //求和
  let cum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    cum += arrayNumber[i];
  }
  console.log(cum);

  //迭代的关系，也是求和，每次number其实不一样，迭代器，效率低，不适合大量数据处理（用for）
  cum = 0;
  arrayNumber.forEach((num) => {
    cum += num;
  });
  console.log(cum);

  let newArrayNumber = [];
  for (let i = 0; i < 10; i++) {
    newArrayNumber[i] = i + 5;
  }
  console.log(newArrayNumber);

  //迭代器，写的简单，但是效率慢
  newArrayNumber.forEach((num, index) => {
    console.log("1: ", num);
  });

  // for 循环能干所有事
  for (let i = 0; i < newArrayNumber.length; i++) {
    console.log("2:", newArrayNumber[i]);
  }

  // 九九乘法表
  let str = "";
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${i}*${j}=${i * j}`;
      if (i === j) {
        str += "\n";
      }
    }
  }
  console.log(str);
}

{
  // 程序的目标：高内聚，低偶合
  function func1() {
    console.log("Hello World");
  }

  func1();
  //塞一个值
  function func2(info) {
    console.log(`${info} juice`);
  }

  func2("Orange");
  func2("Apple");
  //塞两个值
  function func3(a, b) {
    console.log(a + b);
  }

  func3(1, 2);
  //放数组，累加器
  function func4(array) {
    let cum = 0;
    array.forEach((num) => {
      cum += num;
    });
    console.log(cum);
  }

  func4([1, 2, 3, 4, 5, 10, -100]);
  //柔性数组
  function func4_1(a, b, ...rest) {
    let cum = a + b;
    rest.forEach((num) => {
      cum += num;
    });
    console.log(cum);
  }

  func4_1(1, 2, 3, 4, 5, 10, -100);

  function func5(a, b) {
    console.log("here 1"); //会出现
    return a + b; //一旦return后面就shutdown
    console.log("here 2"); //不会出现
  }
  let cum = func5(1, 2);
  console.log(cum);

  const obj = {
    name: "Raymond",
    age: 18,
  };

  function func6(obj) {
    console.log("name: ", obj.name);
    console.log("age: ", obj.age);

    (obj.name = "Tianyang"), (obj.age = 30);
  }

  func6(obj);
  console.log(obj);
  // function func6(obj) 入口仅有一个
  // return 出口一个，特点是产生新内容，可以不用更改原数据。
  // 复杂结构的传参，可以获得内容修改。缺点是更改了原视的数据。

  func7(obj);
  function func7({ name, age }) {
    (name = "Vincent"), (age = 20);
    return { name, age };
  }

  // 上面 {name, age} = obj， 其实是新生成了一个obj，导致传出来结果不可靠，只有return可靠

//   const newObj = func7(obj);
//   console.log(newObj);
//   console.log(obj);

//   //通过变量定义的函数，只有在定义之后才能使用
//   const func8 = function () {
//     console.log("func8");
//   };
//   func8();
//   // 箭头函数只能在后面使用
//   const arrow_func1 = () => {
//     console.log("array_func1");
//   };

//   arrow_func1();

//   const arrow_func2 = (a) => {
//     console.log(a);
//   };

//   const arrow_func3 = (a, b) => {
//     console.log(a);
//   };

//   const array = [1, 2, 3, 4, 5];
//   const array_func4 = (num) => {
//     console.log(num);
//   };
//   array.forEach(array_func4);
// }

// {
//   const radius = 1
//   const location = {x: 1, y:2}
//   const isVisible = true
//   const draw = function(){
//     console.log('draw');
//   }
//   const circle = {
//     radius: 1
//     location: {
//       x: 1,
//       y: 2
//     },
//     isVisible: true
//     draw1: function(){
//       console.log('draw1');
//     },
//     draw2(){
//       console.log('draw2');
//     }
//   }

//   circle.draw1()
//   circle.draw2()

//   const radius = 1
//   const location = {x: 1, y:2}
//   const isVisible = true
//   function draw(){
//     console.log('draw');
//   }
//   const circle2 = {
//     radius: radius
//     location: location
//     isVisible: isVisible
//     draw: draw
//   }
//   circle2.draw()

//   const circle3 = {
//     radius,
//     location,
//     isVisible,
//     draw
//   }
//     circle3.draw()
// }

// {
// const content = document.querySelector(".content");
// content.innerHTML = "Hahahaha";

// console.log(content);

// const contents = document.querySelectorAll(".content");

// console.log(contents);

// contents.forEach((node, index) => {
//   node.innerHTML = `content ${index}`;
// });

// const span = document.createElement("div"); //创造元素
// span.innerHTML = "<h1>Click Me</h1>";
// // contents[contents.length - 1].append(span)
// // contents[contents.length - 1].appendChild(span)
// const domBody = document.querySelector("body");
// domBody.appendChild(span);

// span.classList.add("active");
// span.classList.remove("active");
// span.classList.toggle("active");

// span.setAttribute("style", "cursor: pointer");

// span.addEventListener("click", () => {
//   span.classList.toggle("active");
// });

// }

// newDom.classList.add('active')

// const circle3 = { radius, location, isVisible, draw }

// function createCircle(radius) {
//   return {
//     radius,
//     draw1() {
//       console.log('draw1', radius, this.radius);
//     },
//     draw2: function () {
//     console.log('draw2', radius, this.radius);
//     },
//     draw3: () => {
//     console.log('draw3', radius, this.radius);
//     },
//   }
// }

// const circle4 = createCircle(4)
// circle4.radius = 2

// circle4.draw1()
// circle4.draw2()
// circle4.draw3()

{
 class Car {
   轮子 = 4
   轮子
 }
}

}
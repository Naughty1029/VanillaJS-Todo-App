/**
 * const letの変数宣言
 */

//  ES２０１５以前の変数宣言はvarのみ
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// //  let変数
// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数を再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// //  conts変数
// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// // const変数を再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val3);

// //オブジェクト・配列の中身は変更可能
// //オブジェクト・配列を定義するときはconstを使う
// const val4 = {
//   name: "namae",
//   age: 30
// };

// console.log(val4);

// // 変更可能
// val4.name = "変更";
// // 追加も可能
// val4.address = "住所";

// console.log(val4);

// //オブジェクト・配列の中身は変更可能
// //オブジェクトを定義するときはconstを使う

// const val５ = ["dog", "cat"];

// // 変更可能
// val５[0] = "bird";
// // 追加も可能
// val５.push("mokey");

// console.log(val５);

/**
 * テンプレート文字列
 */

// const name = "たろう";
// const age = 30;

// //以下のような文字列を出力する場合
// // 「わたしの名前はたろうです。年齢は30歳です。」

// //ES2015以前の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// //従来の関数
// function func1(str) {
//   return str;
// }

// console.log(func1("hoge"));

// //関数を定数に入れる方法もある
// const func2 = function (str) {
//   return str;
// };

// console.log(func2("hoge"));

// //アロー関数の場合
// const func3 = (str) => {
//   return str;
// };

// console.log(func3("hoge"));

// //引数が1つの場合は()を省略できる
// const func4 = str => {
//   return str;
// };

// console.log(func4("hoge"));

// //関数の処理内容が単一の処理の場合はreturnを省略できる
// const func5 = str => str;

// console.log(func5("hoge"));

// const func6 = (num1, num2) => num1 + num2;

// console.log(func6(10, 20));

/**
 * 分割代入
 */

// //オブジェクトにおける分割代入
// const myProfile = {
//   name: "なまえ",
//   age: 30
// };

// //分割代入を使わないとmyProfileを毎回記述しないといけない
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// //分割代入を使うとオブジェクトから指定の値を取り出すことができる
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// //配列における分割代入

// const myProfile2 = ["なまえ", 30];

// //分割代入を使わないとmyProfileを毎回記述しないといけない
// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
// console.log(message3);

// //分割代入を使うと配列から指定の値を取り出すことができる
// //配列の中に指定の順番で受け取るようにする
// const [name2, age2] = myProfile2;
// const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// //引数にデフォルトの値を設定することができる
// const sayHello = (name = "ほげ") => console.log(`こんにちは！${name}さん`);
// sayHello(); //こんにちは！ほげさん
// sayHello("たろう"); //こんにちは！たろうさん

/**
 * スプレッド構文
 */

// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);

// //配列の中身を順番に処理する
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// //分割代入と一緒に使う
// const [num1, num2, ...arr3] = arr2;

// console.log(num1); //1
// console.log(num2); //2
// console.log(arr3); //[3,4,5]

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //コピー
// const arr6 = [...arr4];
// console.log(arr6); //[10,20]

// //結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //[10, 20, 30, 40]

// //以下の方法だと配列の参照が引き継がれてしまう
// const arr8 = arr4;
// console.log(arr8); //[10,20]
// arr8[0] = 100;
// console.log(arr4); //[100,20] コピー元の配列も変わってしまう
// console.log(arr8); //[100,20]

/**
 * mapやfilterの配列処理
 */

// //map関数
// //配列をループして中身を表示する
// const nameArr = ["田中", "山田", "高橋"];

// //従来の方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

// //map関数の場合 第二引数はindexが入る
// nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// //map関数の記法
// //与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2); //["田中", "山田", "高橋"]

// //filter関数
// //与えられた関数によって実装された条件式に合致する値からなる新しい配列を生成する
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //条件式に該当する値のみ返す
// });

// console.log(newNumArr); //[1,3,5]

// //高橋以外は「さん」付けにするプログラム
// const nameArr３ = ["田中", "山田", "高橋"];
// const newNameArr = nameArr３.map((name) => {
//   if (name === "高橋") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr); //["田中さん", "山田さん", "高橋"]

/**
 * 三項演算子
 */

// //　ある条件 ? 条件がtrueの時 :　条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1); //trueです

// const val2 = 1 < 0 ? "trueです" : "falseです";
// console.log(val2); //falseです

// //実装サンプル
// const num = "1300";
// console.log(num.toLocaleString()); //1300

// const formattedNum =　typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum); //数値を入力してください

/**
 * 論理演算子
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か２はtrueです");
}

if (flag1 && flag2) {
  console.log("1も２もtrueです");
}

// ||は左側がfalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee); //金額未設定です

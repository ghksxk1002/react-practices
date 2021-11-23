"use strict";

// 블록 스코프 변수(ES6)
var users = [{
  // ES6dml const 가 어떻게 변화되나 보자
  no: 1,
  name: "이승현",
  email: "ghksxk1002@naver.com"
}, {
  no: 2,
  name: "이주은",
  email: "lsmdh06013@naver.com"
}]; // 객채분해(ES6)

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // 탬플릿 문자열(ES6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
}

print(users); // for..or

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}

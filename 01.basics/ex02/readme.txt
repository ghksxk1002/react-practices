ex02: 어플리케이션 분리1

1. 복잡한 어플리케이션은 코드를 분리해서 개발하는 것이 원칙
2. 어플리케이션 코드를 여러 js 파일로 옵기는 단순한 방식
    - 전통적인 분리 방식
    - 단점: 브라우저가 js 파일의 로딩 순서를 보장하지 않는다.
    - 복잡하고 분리 파일(모듈)이 많아 지면 의존선 관리 자체가 불가능 하다.
    - ES6에서 언어적으로 이 문제를 잡아준다(ex03으로 가자)
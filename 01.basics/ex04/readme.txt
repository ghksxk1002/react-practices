ex04: Application Bundling 어플리케이션 번들링
1. webpack은 작게 분리된 많은 모듈(js, css, images, font)들의 의존성을 분석해서 하나의 js 파일로 묶는 도구(개발시 모듈로 분리해서 개발하기 때문에)
2. 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링(Bundling)이라고 하낟 .. webpack은 번들링 도구이다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업이라고 하지 않는다. 빌드작업도 포함이 되어 있는 것이다. (최종 결과문이 여러 모듈을 하나의 파일로 묵어주는것)
4. 빌드 작업
    1) linting(ESLint, 문법체크) 작업
    2) document 작업 (내가 개발한 모듈을을 번들린 과전에서 문서화 하는것 해도되고 안해도됨)
    3) test (Mocha, Jest) 작업
    4) 난독화/압축 (Uglyfy가 해줌) 작업
    5) 번들링(모듈들을 하나의 파일로 묶는것)
5. 자바 스크립트 뿐만 아니라 다양한 assets도(images, font, css) 모듈로 취급을 한다. --> 개발시 assets의 모듈들도 관계를 표시해주어야 한다
                                                                                    그래야 webpack이 번들링시 모듈로써 번들링을 한다.
6. 설치
    $ npm i -D webpack webpack-cli
    실행
    $ npm .\node_modules\.bin\webpack --version
    $ npx webpack --version --> npx가 위의 결로를 찾아서 실행시켜줌
ex03: Application 분리2 - ES6의 모듈 시스템을 사용한다
1) frontend Application이 수십, 수백개의 모듈로 분리된 경우, 브라우저에서 개별적으로 이 모듈들을 import 하는것이 상당히 비효율 적이다.
2) frontend Application은 자바스크립트외 css,image 파일, font 등등 다양한 asssets들에 대한 로딩 동기화에 대해 고려해야 한다.
    -- web
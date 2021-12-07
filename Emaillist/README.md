### React Pracractices - Integration(개발 환경 통합)

### Configuration
1. Application(Project) Structure
   <pre>
   /app
    |--- /backend --> 노드로 구성
    |       |--- /logging
    |       |       |--- index.js
    |       |--- /routes
    |       |       |--- [index.js]
    |       |       |--- authorized.js
    |       |       |--- error.js
    |       |--- /controllers
    |       |--- /models
    |       |--- /views
    |       |       |--- /error
    |       |               |--- [404.ejs]
    |       |               |--- [500.ejs]
    |       |--- /public
    |       |--- [index.js]
    |       |--- [app.config.env]    
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- [webpack.config.json]
    |       |--- /public
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |--- /assets
    |--- /node_modules
    |--- package.json
    |--- package-lock.json
   </pre>
2. nodemon
3. webpack dev server
4. package.json
5. concurrently
6. node application

#### emaillist
    - 개발 통합 설정(with Node Backend)
    - backend: Fully APIs(Node Exporess기반)
    - Frontend: React(SPA)
    - AJAX: fetch 기반

#### cors란?
1. origin(출처) -- 이 요청이 어디서 왔는가
   - URL에서 protocol+host+port를 합친것을 origin이라고 한다.
   ```
   > location.origin
   < 'http://localhost:9999'
   ```
2. 같은 origin VS 다른 origin
   - origin 정책은 브라우저에만 해당 되어있다. 
   - url창의 url과 fetch의 url이 동일하지 않으면 보안상 애러를 낸다.
   - 같은 정책을 사용하게 하는 것이다.

3. Same origin
   - 브라우저에서 펼치는 같은 url을 사용하게 하는 정책
   - 브라우저가 동일 출처 정책(SOP)를 지켜서 다른 출철의 리소스 접근을 금지
      - 단점: 외부 리소스를 가져오지 못함 --> 이 단점을 보완하기 위해 cors 사용
      - 장점: XSS 같은 보안 취약점을 사전에 방지 할수 있다.
   - 브라우저의 어플리케이션이 다른 출처의 Api에 접근 하려고 할때 브라우저가 cors 절차를 밣으면서
     서버를 찌른다, 따라서 서버에 cors 설정을 해놓아야 한다.

4. cors(Cross Origin Resourse Sharing)
```
Access to fetch at 'http://localhost:8888/api' from origin 'http://localhost:9999' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
5. 브라우저가 cors 설정을 확인하는 방법
   1. simple request
      <pre>
         JS             brower            server
            ----------->      ----------->   
               fetch()           GET /api
                              <-----------
                                 200 ok   
                                  Access-Control-Allow-Origin
                                  ==========================
                                  "{......................}"  
               

      </pre>
      
      조건
      1) GET, HEAD, POST 중의 하나의 method를 쓰는 경우
      2) HEAD는 Accept-Language, Content-Type 등의 타입만 사용하는 경우
      3) Content-Type 이 application/x-www-form-urlencoded 와 multipart/for-data. text/palin 인 경우

   2. preflight request
      <pre>
         JS             brower            server
            ----------->      ----------->
               fetch()           OPTIONS /api
                              <----------
                                 200 OK
                                 Access-Control-Allow-Origin: * 모든 접그에 대해서 모두 허가
                              ----------->   
                                 GET /api
                              <-----------
                                 200 ok   
                                  Access-Control-Allow-Origin
                                  ==========================
                                  "{......................}"  
      
      response <--------------      
      </pre>         
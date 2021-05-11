# BBL Assignment

> For BBL interview only

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Dockerize procedure

``` bash
# build the app
docker build -t vuejs/dockerize-vuejs-app .

# serve at localhost:8080
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs/dockerize-vuejs-app
```

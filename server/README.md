# Simple Go server app

command to run app 
in go-react-app\server

```sh
go run server.go
```

<h6>http://localhost:8080</h6>

### Run project in production mode
runs next build to build the application for production usage:
```sh
go build server.go
```
it is possible to add flags to minimize output and/or make compatible with different os,
for example
```sh
go build -ldflags="-s -w" server.go
```
```sh
GOOS=linux GOARCH=arm64 go build server.go
```

for more details link to documentation located here: https://pkg.go.dev/go/build

## Running Tests
go-react-app\server\tests
run
```sh
go run main_test.go
```

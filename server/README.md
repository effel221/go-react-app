# Simple Go server app

command to run app 
in go-react-app\server

```sh
go run server.go
```

<h6>http://localhost:8080</h6>

### API endpoints description

<strong>"/"</strong> - returns "ok" just to show, that sever running and working
<strong>"/getCards"</strong> - with GET method initial card data will be returned.
<strong>"/getCardsSorted"</strong> - with GET return card data sorted by realName by ascending. Has parameter "sort", when it has value "desc",
returned data will be sorted by realName by descent. Any other value return realName by descent.
<strong>"/postCard"</strong> -with POST method and extra body parameters (realName, playerName, asset) will accept selected card data fro frontend.


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

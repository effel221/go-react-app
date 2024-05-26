package main

import (
	"server/routes"
)

func main() {
	router := routes.SetupRouter()
	router.Run(":8080")
}

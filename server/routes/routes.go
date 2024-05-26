package routes

import (
	"server/controllers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()
	router.SetTrustedProxies(nil)

	router.GET("/", controllers.InitialAction)

	router.GET("/getCards", controllers.DefaultAction)
	router.GET("/getCardsSorted", controllers.SortingAction)

	router.POST("/postCard", controllers.PostAction)

	return router
}

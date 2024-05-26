package controllers

import (
	"fmt"
	"net/http"
	"server/initialData"
	"server/models"
	"sort"

	"github.com/gin-gonic/gin"
)

func AddCorsHeaders(ginContext *gin.Context) {
	ginContext.Header("Access-Control-Allow-Origin", "http://localhost:5173")
}

func InitialAction(ginContext *gin.Context) {
	AddCorsHeaders(ginContext)
	ginContext.String(http.StatusOK, "ok")
}

func DefaultAction(ginContext *gin.Context) {
	AddCorsHeaders(ginContext)
	cardsData := initialData.GetInitialData()
	ginContext.JSON(http.StatusOK, cardsData)
}

func SortingAction(ginContext *gin.Context) {
	AddCorsHeaders(ginContext)
	cardsData := initialData.GetInitialData()
	sortType := ginContext.Query("sort")
	cardCopy := make([]models.Card, len(cardsData))
	copy(cardCopy, cardsData)
	sort.Slice(cardCopy, func(i, j int) bool {
		if sortType != "desc" {
			return cardCopy[i].RealName < cardCopy[j].RealName
		}
		return cardCopy[i].RealName > cardCopy[j].RealName
	})

	ginContext.JSON(http.StatusOK, cardCopy)
}

func PostAction(ginContext *gin.Context) {
	AddCorsHeaders(ginContext)
	var requestCardBody models.Card
	ginContext.BindJSON(&requestCardBody)
	realName := requestCardBody.RealName
	playerName := requestCardBody.PlayerName
	asset := requestCardBody.Asset

	if len(realName) > 0 && len(playerName) > 0 && len(asset) > 0 {
		ginContext.JSON(http.StatusOK, gin.H{"message": true})
		fmt.Println("Data received successfully")
	} else {
		ginContext.JSON(http.StatusOK, gin.H{"message": false})
		fmt.Println("Data receiving failed")
	}
}

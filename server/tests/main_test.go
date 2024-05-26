package main

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"server/initialData"
	"server/models"
	"server/routes"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func TestGetInitialData(t *testing.T) {
	exampleCard := models.Card{
		RealName:   "Brianna Forbes",
		PlayerName: "Dreamlurk The Unstoppable",
		Asset:      "Foghammer Lead",
	}

	testResult := initialData.GetInitialData()
	assert.Equal(t, testResult[0], exampleCard)
}

func TestInitRoute(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := routes.SetupRouter()
	req, _ := http.NewRequest("GET", "/", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)

	responseData, _ := io.ReadAll(w.Body)
	assert.Equal(t, "ok", string(responseData))
	assert.Equal(t, http.StatusOK, w.Code)
}

func TestDefaultAction(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := routes.SetupRouter()
	req, _ := http.NewRequest("GET", "/getCards", nil)
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	exampleCard := models.Card{
		RealName:   "Brianna Forbes",
		PlayerName: "Dreamlurk The Unstoppable",
		Asset:      "Foghammer Lead",
	}
	var cards []models.Card
	json.Unmarshal(w.Body.Bytes(), &cards)

	assert.Equal(t, http.StatusOK, 200)
	assert.Equal(t, cards[0], exampleCard)
}

func TestSortingAction(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := routes.SetupRouter()
	exampleCard := models.Card{RealName: "Hillary Gibbs", PlayerName: "Speedsoul", Asset: "Shifting Rainshadow Iron"}
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/getCardsSorted?sort=desc", nil)
	r.ServeHTTP(w, req)
	var cards []models.Card
	json.Unmarshal(w.Body.Bytes(), &cards)

	assert.Equal(t, http.StatusOK, 200)
	assert.Equal(t, cards[0], exampleCard)
}

func TestPostAction(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := routes.SetupRouter()
	exampleCard := models.Card{RealName: "Hillary Gibbs", PlayerName: "Speedsoul", Asset: "Shifting Rainshadow Iron"}

	jsonValue, _ := json.Marshal(exampleCard)
	req, _ := http.NewRequest("POST", "/postCard", bytes.NewBuffer(jsonValue))
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	message := string("{\"message\":true}")
	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, message, w.Body.String())
}

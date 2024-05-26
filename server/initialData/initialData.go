package initialData

import (
	"encoding/json"
	"io"
	"net/http"
	"server/models"
)

func GetInitialData() []models.Card {
	urlToCardJson := "https://opensource.aoe.com/the-card-game-data/player.json"
	response, err := http.Get(urlToCardJson)

	if err != nil {
		panic(err)
	}

	defer response.Body.Close()
	respBody, respBodyError := io.ReadAll(response.Body)

	if respBodyError != nil {
		panic(respBodyError)
	}

	var cards []models.Card
	json.Unmarshal([]byte(respBody), &cards)

	return cards
}

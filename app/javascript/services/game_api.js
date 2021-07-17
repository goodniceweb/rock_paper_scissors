export default class GameAPI {
  static get gameResultEndpoint () { return 'http://localhost:3000/api/v1/game' }

  static async fetchResult (userChoise) {
    const response = await fetch(this.gameResultEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_choise: userChoise
      })
    })
    return response.json()
  }
}


export default class GameAPI {
  static async fetchResult (userChoise) {
    const response = await fetch('http://localhost:3000/games', {
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


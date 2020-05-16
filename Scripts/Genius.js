/* reading API documentation is mad */
var accessToken = "dyRx7gfh0DlmSkYFTa-v_3zGYu0411HR_UXnxPCMls-99VF1Yjb6YtYG8VShKy0K"


export async function getLyrics(songTitle){
  let songPath = await getSongPath(songTitle)
  let reply = await getSongDescription(songPath)
  return reply
}

async function searchGeniusJSON(query){
  let url = "https://api.genius.com/"
  let search = "search?q=" + query.replace(new RegExp(" ", "g"), "%20")
  let access = "access_token=" + accessToken
  let request = url + search + "&" + access
  let rawResult = await fetch(request)
  let json = await rawResult.json()
  return json
}

async function getSongPath(songTitle){
  let songDataJSON = await searchGeniusJSON(songTitle, accessToken)
  let response = await songDataJSON.response
  let hits = await response.hits
  let first = await hits['0']
  let path = await first.result.api_path
  return path
}

async function getSongDescriptionJSON(songID, textFormat){
  let url = "https://api.genius.com"
  let access = `access_token=${accessToken}`
  textFormat = `text_format=${textFormat}`
  let request = url + songID + "?" + access + "&" + textFormat
  let rawResult = await fetch(request)
  let json = await rawResult.json()
  return json
}

async function getSongDescription(path, accessToken){
  let descriptionDataJSON = await getSongDescriptionJSON(path, "plain")
  let response = await descriptionDataJSON.response
  let song = await response.song
  let desc = await song.description
  let reply = await desc.plain
  return reply
}

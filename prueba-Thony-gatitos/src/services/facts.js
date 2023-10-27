const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(response => response.json())
    .then(data => { return data.fact })
}

export const getImageCarRandom = (firsWord) => {

  return fetch(`https://cataas.com/cat/says/${firsWord}?size=50&color=red`)
    .then(resp => { return resp.url })

}
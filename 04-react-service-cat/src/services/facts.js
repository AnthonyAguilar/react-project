const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
      return data.fact
    })
}

export const getImageCatRandom = (firstWord) => {
  return fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    .then(res => res.json())
    .then(response => {
      const { url } = response
      return url
    })
}

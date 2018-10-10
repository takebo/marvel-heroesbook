import CryptoJS from 'crypto-js'

const URI = '/v1/public/characters'
const ts = 1
const publicKey = '0ae171b5759a095e9a68bb5b446a9674'
const privateKey = '293b56c5d0d90ef746b5ec66adbc655a29b744a9'
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString(
  CryptoJS.enc.Hex
)

export const marvelApi = {
  ts,
  hash,
  apikey: publicKey,
  baseUrl: `https://gateway.marvel.com:443/${URI}`
}

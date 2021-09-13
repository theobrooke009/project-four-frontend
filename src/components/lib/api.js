import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}


export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

export function getAllGames() {
  return axios.get(`${baseUrl}/games/`)
}

export function getOneGame(gameId) {
  return axios.get(`${baseUrl}/games/${gameId}/`)
}

export function createGame(formdata) {
  return axios.post(`${baseUrl}/games/`, formdata, headers())
}



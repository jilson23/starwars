import axios from 'axios';

// const url = 'https://swapi.dev/api/people/'

export async function getPeople(url) {
    try {
      const response = await axios.get(url);
      return response
    } catch (error) {
      console.error(error);
    }
  }
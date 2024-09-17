import { TMDB_API_KEY, DB_URL } from '@env'

export async function fetchGenre() {
    const url = `${DB_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      console.log("Fetched Data => ", data)
      
      return data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
      throw error;
    }
}
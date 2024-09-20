import { TMDB_API_KEY, DB_URL } from '@env'

export async function fetchGenre() {
    const url = `${DB_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();      
      return data.genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
      throw error;
    }
}

export async function fetchNowPlaying() {
  const url = `${DB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function fetchPopular() {
  const url = `${DB_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function fetchTopRated() {
  const url = `${DB_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function fetchUpcoming() {
  const url = `${DB_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function fetchMovieDetails(movieId: number | string) {
  const url = `${DB_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function fetchFavouriteMovies(accountId: number | string) {
  const url = `${DB_URL}/account/${accountId}/favorite/movies?api_key=${TMDB_API_KEY}&language=en-US`;
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

export async function addToFavouriteMovie(accountId: string){
  const url = `${DB_URL}/account/${accountId}/favorite?api_key=${TMDB_API_KEY}&language=en-US`
  try {
    const response = await fetch(url, { method: "POST", headers: {
      "Content-Type": "application/json", // Add content type for JSON
    }, })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  }catch(error){
    console.log("Error fetching ", error)
    throw error
  }
}

export async function rateMovie(movieId: string, rating: any){
  const url = `${DB_URL}/movie/${movieId}/rating?api_key=${TMDB_API_KEY}&language=en-US`
  try {
    const response = await fetch(url, {
      method: "POST", headers: {
      "Content-Type": "application/json",
      }, 
      body: JSON.stringify({ body: rating })
   })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();

    console.log("Fetched Data => ", data)
    
    return data;
  }catch(error){
    console.log("Error fetching ", error)
    throw error
  }
}


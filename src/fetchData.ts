export async function fetchData<T>(endpoint: string, pageNumber: number): Promise<T[]> {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
      },
    };
  
  const response = await fetch(endpoint + `?page=${pageNumber}`,
  options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log(data.results)
  return data.results as T[];
  }

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9298cb786fmshae2f441459c0785p1e5567jsn376b3bef4888',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      
    }
    
  };

 export const ytoptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9298cb786fmshae2f441459c0785p1e5567jsn376b3bef4888',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url,options)=>{
    const response = await fetch(url,options)
    const data= await response.json();

    return data;
}


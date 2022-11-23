export const getGifs = async ( category ) => {
    const itemsLimit = 6;
    const apiKey = '8ZiiXgkEymTTlayUhc2Yp85kEtxVGTQW';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=${itemsLimit}`;

    const resp = await fetch ( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    }));

    return gifs;
    
  };
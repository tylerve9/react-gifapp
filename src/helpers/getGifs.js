
const getGifs = async ( category ) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?&q=${ encodeURI(category) }&api_key=ltja1mIkVsrcd4AhnPbfppPiGMOTAzUv&limit=10`;
    const resp = await fetch(apiUrl);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    //console.log(gifs);
    return gifs;
}

export default getGifs;

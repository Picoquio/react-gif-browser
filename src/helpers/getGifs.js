export const getGifs = async (category) => {
    const APIKey = 'P3IYAtoH66pmmesHLBp5YRdKG1CvOZcM';
    const baseUrl = 'api.giphy.com/v1/gifs/search'
    const limit = 6;
    const url = `https://${baseUrl}?api_key=${APIKey}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
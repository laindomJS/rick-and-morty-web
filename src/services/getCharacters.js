export const getCharacters = async (url) => {
    let characters = [];
    const response = await fetch(url)
    const data = await response.json();
    characters = data.results;
    return characters;
}


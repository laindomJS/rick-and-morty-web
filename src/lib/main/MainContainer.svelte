<script>
    import { getCharacters } from '../../services/getCharacters';
    import CharactersContainer from './CharactersContainer.svelte';

    let characters = [];
    let page = 1;
    $: url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    let char = "";

    $: {
        getCharacters(url).then(data => {
            characters = data;
        });
    }

    const handleInput = (e) => char = e.target.value;
    $: {
        if(char.length > 2) {
            characters = characters.filter((character) => character.name.toLowerCase().includes(char));
        } 
    }
</script>


<section class="w-full p-12">
    
    <input class="p-4 m-8 w-2/5 bg-gray-400 h-12 placeholder:text-black placeholder:font-bold" type="text" value={char} on:input={handleInput} placeholder="Search character">

    <section class="w-full my-2 px-8 flex items-center justify-center space-x-10">
        <button class="buttons" on:click={() => page--} disabled={page === 1}>Previous</button>
        <button class="buttons" on:click={() => page++} disabled={page === 42}>Next</button>
    </section>

    <CharactersContainer characters={characters} />
</section>
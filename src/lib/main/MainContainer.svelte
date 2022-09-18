<script>
    import { getCharacters } from '../../services/getCharacters';
    import CharactersContainer from './CharactersContainer.svelte';
    import Spinner from './Spinner.svelte';

    let characters = [];
    let page = 1;
    $: url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    let char = "";

    $: {
        getCharacters(url).then(data => characters = data);
    }

    const handleInput = (e) => char = e.target.value;
    $: {
        if(char.length > 2) {
            characters = characters.filter((character) => character.name.toLowerCase().includes(char));
        } else if (char.length === 0) {
            getCharacters(url).then(data => characters = data);
        }
    }
</script>


<section class="w-full p-12">
    
    <div class="w-full">
        <input class="p-4 m-2 w-2/5 bg-gray-400 h-12 placeholder:text-black placeholder:font-bold" type="text" value={char} on:input={handleInput} placeholder="Search character...">
    </div>

    <section class="w-full my-12 flex items-center justify-center space-x-10">
        <button class="buttons" on:click={() => page--} disabled={page === 1}>Previous</button>
        <button class="buttons" on:click={() => page++} disabled={page === 42}>Next</button>
    </section>

    {#if characters.length === 0}
       <main class="w-full relative">
            <Spinner />
       </main>
        {:else}
        <CharactersContainer characters={characters} />
    {/if}
</section>
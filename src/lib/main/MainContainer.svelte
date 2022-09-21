<script>
    import { getCharacters } from '../../services/getCharacters';
    import CharactersContainer from './CharactersContainer.svelte';
    import Spinner from './Spinner.svelte';
    import searchIcon from '../../assets/search.svg';

    let characters = [];
    let page = 1;
    $:url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    $:char = "";

    function loadCharacters() {
        getCharacters(url).then(data => characters = data);
    }
    $:loadCharacters();

    const handleInput = (e) => char = e.target.value;
    
    $: {
        if(char.length > 1) {
            characters = characters.filter((character) => character.name.toLowerCase().includes(char.toLowerCase()));
        } else if (char.length === 0) {
            loadCharacters();
        }
    }
</script>


<section class="w-full bg-white dark:bg-gray-800">
    <div class="p-12">
        <div class="w-full relative">
            <input class="input" type="text" value={char} on:input={handleInput} placeholder="Search character...">
            <img class="absolute top-4 left-64" src={searchIcon} alt="Search Icon">
        </div>

        <section class="w-full my-12 flex items-center justify-center space-x-10">
            <button class="buttons" on:click={() => page--} disabled={page === 1}>Previous</button>
            <button class="buttons" on:click={() => page++} disabled={page === 42}>Next</button>
        </section>
    </div>

    <main class="w-full h-full bg-white dark:bg-gray-800 grid grid-cols-3 gap-10 justify-items-center relative">
        {#if characters.length === 0}
            <Spinner />
        {:else}
            <CharactersContainer characters={characters} />
        {/if}
    </main>
</section>
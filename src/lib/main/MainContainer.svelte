<script>
    import { getCharacters } from '../../services/getCharacters';
    import Character from './Character.svelte';

    let characters = [];
    let page = 1;
    $: url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    
    $: {
        getCharacters(url).then(data => {
            characters = data;
        });
    }

    function nextPage() {
        page++;
    }

    function previousPage() {
        page--;
    }
</script>


<main class="w-full p-12">
    <section class="w-full my-2 px-8 flex items-center justify-center space-x-10">
        <button class="buttons" on:click={previousPage} disabled={page === 1}>Previous</button>
        <button class="buttons" on:click={nextPage} disabled={page === 42}>Next</button>
    </section>
    <main class="w-full p-12 grid grid-cols-2 gap-10 justify-items-center">
        {#each characters as character}
            <Character character={character} />
        {/each}
    </main>
</main>
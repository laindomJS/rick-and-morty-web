<script>
    import { getCharacters } from '../../services/getCharacters';

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
    <button on:click={previousPage}>Previous</button>
    <button on:click={nextPage}>Next</button>
    {#each characters as character}
        <h1>{character.name}</h1>
    {/each}
</main>
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
    <section class="w-full my-2 px-8 flex items-center justify-center space-x-10">
        <button class="buttons" on:click={previousPage} disabled={page === 1}>Previous</button>
        <button class="buttons" on:click={nextPage} disabled={page === 42}>Next</button>
    </section>
    <main class="w-full p-12 grid grid-cols-2 gap-10 justify-items-center">
        {#each characters as character}
           <article class="p-6 bg-blue-800 rounded-lg w-80">
                <img class="object-cover rounded-lg" src={character.image} alt={character.name}>
                <div class="py-4">
                    <h2 class="font-bold text-xl">{character.name}</h2>
                    <div class="my-4">
                        <p class={character.gender === 'Male' ? 'male' : 'female'}>Gender: {character.gender}</p>
                        <p class={character.status === 'Alive' ? 'alive' : 'dead'}>Status: {character.status}</p>
                        <p class="text-lg text-gray-800">Species: {character.species}</p>
                    </div>
                </div>
           </article>
        {/each}
    </main>
</main>
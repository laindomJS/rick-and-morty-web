<script>
    export let character;
</script>


    <article class="character__card">
        <img class="object-cover rounded-lg" src={character.image} alt={character.name}>
        <div class="py-4">
            <h2 class="text-black dark:text-white font-bold text-3xl border-b-4 border-green-500 w-fit">{character.name}</h2>
            <div class="my-4">
                <div>
                    <span class="font-bold dark:text-white text-black text-xl">Gender:</span>
                    <span class={character.gender === 'Male' ? 'male' : 'female'}>{character.gender}</span>
                </div>
                <div>
                    <span class="text-black dark:text-white font-bold text-xl">Status:</span>
                    <span class={character.status === 'Alive' ? 'alive' : 'dead'}>{character.status}</span>
                </div>
                <div>
                    <span class="text-black dark:text-white font-bold text-xl">Species:</span>
                    <span class="text-xl text-black dark:text-white">{character.species}</span>
                </div>
            </div>
        </div>
    </article>



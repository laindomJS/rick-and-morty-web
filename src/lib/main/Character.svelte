<script>
    export let character;
</script>


    <article class="p-6 h-fit bg-sky-300 dark:bg-violet-700 text-white rounded-lg w-80">
        <img class="object-cover rounded-lg" src={character.image} alt={character.name}>
        <div class="py-4">
            <h2 class="font-bold text-3xl">{character.name}</h2>
            <div class="my-4">
                <div>
                    <span class="font-bold text-xl">Gender:</span>
                    <span class={character.gender === 'Male' ? 'male' : 'female'}>{character.gender}</span>
                </div>
                <div>
                    <span class="font-bold text-xl">Status:</span>
                    <span class={character.status === 'Alive' ? 'alive' : 'dead'}>{character.status}</span>
                </div>
                <div>
                    <span class="font-bold text-xl">Species:</span>
                    <span class="text-xl">{character.species}</span>
                </div>
            </div>
        </div>
    </article>



<script>
    export let character;
</script>


    <article class="p-6 bg-blue-800 rounded-lg w-80">
        <img class="object-cover rounded-lg" src={character.image} alt={character.name}>
        <div class="py-4">
            <h2 class="font-bold text-xl">{character.name}</h2>
            <div class="my-4">
                <div>
                    <span class="font-bold">Gender:</span>
                    <span class={character.gender === 'Male' ? 'male' : 'female'}>{character.gender}</span>
                </div>
                <div>
                    <span class="font-bold">Status:</span>
                    <span class={character.status === 'Alive' ? 'alive' : 'dead'}>{character.status}</span>
                </div>
                <div>
                    <span class="font-bold">Species:</span>
                    <span>{character.species}</span>
                </div>
            </div>
        </div>
    </article>



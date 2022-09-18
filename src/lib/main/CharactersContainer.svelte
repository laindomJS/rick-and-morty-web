<script>
    export let characters;
    import Character from "./Character.svelte";
</script>

<main class="w-full p-12 grid grid-cols-2 gap-10 justify-items-center">
    {#each characters as character}
        <Character character={character} />
    {/each}
</main>
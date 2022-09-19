<script>
    export let characters;
    import Character from "./Character.svelte";
</script>


{#each characters as character}
    <Character character={character} />
{/each}

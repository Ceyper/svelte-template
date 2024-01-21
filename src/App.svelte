<script lang="ts">
    import Component from "$lib/Component.svelte";
    import data from "$assets/data.json5";

    const text: string = data.content;
</script>

<!----------------------------------------------------------------------------->

<main>
    <h1>Ceyper Application</h1>
    <p>Svelte template by Ceyper</p>

    <Component />

    <p>{text}</p>
</main>

<!----------------------------------------------------------------------------->

<style>
</style>

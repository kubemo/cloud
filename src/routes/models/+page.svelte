<script>
    import { Header, Icon, LinkButton } from "$lib/components";

    /** @type {import('./$types').PageData}*/
    export let data;
</script>

<svelte:head>
    <title>Models | KubeMo</title>
</svelte:head>

<Header title="Models">
    <svelte:fragment slot="action">
        <LinkButton icon="ri-add-line" href="/new">New Model</LinkButton>
    </svelte:fragment>
    <svelte:fragment slot="extra">
        <div class="search">
            <span class="icon"><Icon name="ri-search-line" /></span>
            <input type="text" placeholder="Search models by keywords" >
        </div>
    </svelte:fragment>
</Header>

<section class="container">
    
</section>

<style>
    .search {
        position: relative;
        display: flex;
        height: 5rem;
        margin-bottom: 1.5rem;
    }

    span.icon {
        position: absolute;
        top: 30%;
        left: 1em;
    }

    input {
        width: 100%;
        height: 100%;
        padding: 0 5rem;
        font-size: .95em;
        border: 1px solid var(--grid);
        border-radius: 5rem;
        outline: none;
    }

    input:focus {
        border-color: var(--text);
    }

    section {
        display: flex;
    }
</style>
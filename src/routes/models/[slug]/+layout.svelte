<script>
    import { page } from "$app/stores";
    import { Header } from '$lib/components';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<svelte:head>
    <title>{data.model.title} | KubeMo</title>
</svelte:head>

<Header title={data.model.title}>
    <nav slot="extra">
        <ul>
        {#each data.model.routes as r, i}
            {@const current = i === 0 ? $page.url.pathname === r.link : $page.url.pathname.startsWith(r.link)}
            <li>
                <a href={r.link} aria-current={current ? true : undefined}>
                    {r.name}
                    {#if r.tag}
                        <span>{r.tag}</span>
                    {/if}
                </a>
            </li>
        {/each}
        </ul>
    </nav>
</Header>

<slot />

<style>
    nav {
        height: var(--tabbar-h);
    }

    ul {
        display: flex;
        gap: 3rem;
        height: 100%;
        list-style: none;
    }

    a {
        display: flex;
        align-items: center;
        height: 100%;
        font-weight: 500;
        border-bottom: 2px solid transparent;
    }

    [aria-current] {
        border-color: var(--prime);
    }

    span {
        margin-left: 8px;
        padding: 0 7px;
        font-size: .8em;
        font-weight: 500;
        line-height: 1.5em;
        border-radius: 2em;
        color: var(--back);
        background-color: var(--second);
    }
</style>
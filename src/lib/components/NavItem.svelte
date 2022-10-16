<script>
    import { page } from "$app/stores";
    import Icon from "./Icon.svelte";

    export let href = "";
    export let icon = "";
    export let tag = "";
</script>

<li>
    <a {href} aria-current={$page.url.pathname.startsWith(href) ? true : undefined}>
        <span class="icon"><Icon name={icon} size={24} /></span>
        <span class="title"><slot /></span>
        <span class="tag">{tag}</span>
    </a>
</li>

<style>
    li {
        margin-bottom: 8px;
    }

    a {
        display: flex;
        align-items: center;
        height: 42px;
        border-radius: 50px;
        /* border: 1px solid transparent; */
    }

    a:hover {
        background-color: var(--flash);
    }

    [aria-current] {
        border-color: var(--grid);
        background-color: var(--flash);
    }

    span.icon {
        width: 55px;
        display: flex;
        justify-content: center;
    }

    span.title {
        display: var(--sidebar-text-dis);
    }
</style>

<script>
    import Icon from "./Icon.svelte";

    export let title = "KubeMo";
    export let logo = "ri-aliens-fill";
</script>

<nav>
    <a href="/">
        <span>
            <Icon name={logo} size={30} />
        </span>
        <h1>{title}</h1>
    </a>
    <ul>
        <slot name="menu" />
    </ul>
    <ul>
        <slot name="pinned"></slot>
    </ul>
</nav>

<style>
    a {
        display: flex;
        margin-top: 1rem;
        margin-bottom: 2rem;
        color: var(--prime);
    }

    span {
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        display: var(--sidebar-text-dis);
    }
</style>

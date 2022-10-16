<script>
    import { Icon } from ".";

    export let icon = "";
    export let href = "/";
</script>

<a class="prime" {href}>
{#if icon}
    <Icon name={icon} size={22} />
{/if}
    <span>
        <slot />
    </span>
</a>

<style>
    a {
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 0 2rem;
        border-radius: 4rem;
        font-size: .8em;
        font-weight: 600;
    }

    .prime {
        color: var(--back);
        background-color: var(--prime);
    }

    span {
        margin-left: 8px;
    }
</style>
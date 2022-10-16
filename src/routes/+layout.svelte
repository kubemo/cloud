<script>
    import '$lib/base.css';
    import { Nav, Icons, NavItem } from '$lib/components';

    /** @type {import('./$types').LayoutServerData}*/
    export let data;
</script>

<Icons />

<aside>
    <Nav>
        <svelte:fragment slot="menu">
            <NavItem href="/models" icon="ri-navigation-line">Models</NavItem>
            <NavItem href="/datasets" icon="ri-database-2-line">Datasets</NavItem>
            <NavItem href="/play" icon="ri-code-s-slash-line">Playground</NavItem>
            <NavItem href="/apps" icon="ri-apps-line">Applications</NavItem>

            {#if data.user}
            <NavItem href="/profile" icon="ri-user-smile-line">Profile</NavItem>
            <NavItem href="/notifications" icon="ri-notification-3-line">Notifications</NavItem>
            <NavItem href="/tokens" icon="ri-key-2-line">Access Tokens</NavItem>
            {:else}
            <NavItem href="/signin">Sign in</NavItem>
            {/if}
        </svelte:fragment>
    </Nav>
</aside>

<main>
    <slot />
</main>

<style>
    aside {
        position: fixed;
        left: 0;
        width: var(--sidebar-w); /* defined in $lib/base.css */
        height: 100vh;
        border-right: 1px solid var(--grid);
        padding: 0 10px;
    }

    main {
        margin-left: var(--sidebar-w);
    }
</style>

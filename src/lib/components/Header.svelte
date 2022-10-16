<script>
    export let title = "Heading 1";
    export let description = "Here is a description of this page.";
</script>

<header>
    <div class="container">
        <div class="title">
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <slot name="action">
                    Actions
                </slot>
            </div>
        </div>
        <div class="extra">
            <slot name="extra" />
        </div>
    </div>
</header>

<style>
    header {
        border-bottom: 1px solid var(--grid);
    }

    h1 {
        margin-bottom: 2rem;
    }

    p {
        font-size: medium;
        margin-bottom: 1rem;
    }

    .title {
        display: flex;
        justify-content: space-between;
        padding: 3rem 0;
    }

    
    .extra {
        position: sticky;
        margin-top: 1rem;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    
    .extra::-webkit-scrollbar {
        display: none;
    }
</style>
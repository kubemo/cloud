<script>
    /** @type {string} */
	export let name;
	export let size = 20;
</script>

<svg width={size} height={size}>
	<use xlink:href="#{name}" />
</svg>

<style>
	svg {
		position: relative;
		overflow: hidden;
		fill: none;
	}
</style>
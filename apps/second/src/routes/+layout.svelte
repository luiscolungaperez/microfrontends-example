<script lang="ts">
	import "@workspace/ui/elements/app-header"
	import "@workspace/ui/tokens.css"

	let { children } = $props()
</script>

<svelte:head>
	<title>Second App</title>
</svelte:head>

<app-header>
	<header>
		<span class="brand">Example Apps</span>
		<a href="/" data-path="/">Web</a>
		<a href="/second" data-path="/second">Second</a>
	</header>
</app-header>
{@render children()}

<script>
	import { page } from '$app/stores';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<img src="/logo.png" class="w-24" alt="logo" />
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0">
			<li class={$page.url.pathname == '/creation' ? 'bg-gray-400 rounded-lg' : ''}>
				<a href="/creation">Création Dossier</a>
			</li>
			<li class={$page.url.pathname == '/suivi' ? 'bg-gray-400 rounded-lg' : ''}>
				<a href="/suivi">Suivi Dossier</a>
			</li>
		</ul>
	</div>
</div>

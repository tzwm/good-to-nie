<script>
  import { Col } from 'spaper';
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>{data.taskIds.length}</h1>

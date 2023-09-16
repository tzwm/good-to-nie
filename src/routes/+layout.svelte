<script>
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  const basePath = data.basePath;
  const urlParams = data.searchParams.toString();
</script>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="{basePath}?{urlParams}">好捏模型</a>
  </h3>
  <ul class="inline">
    {#if data.webuiAPIClient}
      <li><a href="{basePath}/tasks?{urlParams}">下载历史</a></li>
    {/if}
    <li><a href="{basePath}/featured?{urlParams}">精选</a></li>
  </ul>
</Navbar>

<slot></slot>

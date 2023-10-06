<script lang="ts">
  import 'papercss/dist/paper.min.css';
  import { page } from '$app/stores';
  import { Navbar } from 'spaper';

  export let data: any;
  const basePath = data.basePath;
  const params = data.searchParams;
  $: currentPath = $page.url.pathname;
</script>

<style>
  li a[aria-current="true"] {
    border-bottom-color: var(--secondary);
  }
</style>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="{basePath}?{params}">好捏模型</a>
  </h3>
  <ul class="inline">
    {#if data.webuiAPIClient}
      <li><a
          aria-current={currentPath === '/tasks'}
          href="{basePath}/tasks?{params}"
        >下载历史</a></li>
    {/if}
    <li><a
        aria-current={currentPath === '/featured' || currentPath === '/'}
          href="{basePath}/featured?{params}"
        >精选</a></li>
  </ul>
</Navbar>

<slot></slot>

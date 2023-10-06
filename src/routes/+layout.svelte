<script lang="ts">
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';

  export let data: any;
  const { basePath } = data;
  $: currentPath = data.currentPath;
  $: searchParams = data.searchParams;
</script>

<style>
  li a[aria-current="true"] {
    border-bottom-color: var(--secondary);
  }
</style>

<Navbar split={false}>
  {console.log(currentPath)}
  <h3 slot="brand">
    <a href="{basePath}/?{searchParams}">好捏模型</a>
  </h3>
  <ul class="inline">
    {#if data.webuiAPIClient}
      <li><a
          aria-current={currentPath === '/tasks'}
          href="{basePath}/tasks?{searchParams}"
        >下载历史</a></li>
    {/if}
    <li><a
        aria-current={currentPath === '/featured' || currentPath === '/'}
          href="{basePath}/featured?{searchParams}"
        >精选</a></li>
  </ul>
</Navbar>

<slot></slot>

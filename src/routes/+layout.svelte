<script>
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';

  /** @type {import('./$types').PageData} */
  export let data;
  const basePath = data.basePath;
  const params = data.searchParams;
</script>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="{basePath}?{params}">好捏模型</a>
  </h3>
  <ul class="inline">
    {#if data.webuiAPIClient}
      <li><a href="{basePath}/tasks?{params}">下载历史</a></li>
    {/if}
    <li><a href="{basePath}/featured?{params}">精选</a></li>
  </ul>
</Navbar>

<slot></slot>

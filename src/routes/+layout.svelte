<script>
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';
  import { onMount } from 'svelte';

  export let data;
  const basePath = data.basePath;
</script>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="{basePath}">好捏模型</a>
  </h3>
  <ul class="inline">
    <li><a href="{basePath}/download">下载</a></li>
    <li><a href="{basePath}/featured">精选</a></li>
  </ul>
</Navbar>

<slot></slot>

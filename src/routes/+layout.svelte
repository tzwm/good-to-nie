<script>
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';
  import { onMount } from 'svelte';

  let hostPath = '';
  onMount(() => {
    let path = window.location.href;
    hostPath = path.substring(0, path.lastIndexOf('/'));
  });
</script>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="{hostPath}">好捏模型</a>
  </h3>
  <ul class="inline">
    <li><a href="{hostPath}/download">下载</a></li>
    <li><a href="{hostPath}/featured">精选</a></li>
  </ul>
</Navbar>

<slot></slot>

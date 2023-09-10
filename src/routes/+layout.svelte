<script>
  import 'papercss/dist/paper.min.css';
  import { Navbar } from 'spaper';
</script>

<Navbar split={false}>
  <h3 slot="brand">
    <a href="/">好捏模型</a>
  </h3>
  <ul class="inline">
    <li><a href="/download">下载</a></li>
    <li><a href="#">精选</a></li>
  </ul>
</Navbar>

<slot></slot>

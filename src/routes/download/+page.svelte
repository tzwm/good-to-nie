<script>
  import { Modal, Input, Button, Row } from 'spaper';
  let showCivitaiModal = false;

  function isValidCivitai(url) {
    const pattern = /https:\/\/civitai\.com\/models\/(.+)/;
    const match = pattern.exec(url);
    if (match) {
      return true;
    } else {
      return false;
    }
  }
</script>

<Row>
  <Button on:click={() => showCivitaiModal = true}>
    预览 Civitai 模型
  </Button>
</Row>

<Modal bind:active={showCivitaiModal}
  title="输入 Civitai 链接"
  closeBtnText="关闭"
  style="width: 80%;">
  <Input placeholder="类似 https://civitai.com/models/28687/pen-sketch-style"
    valid={isValidCivitai}
    style="width: 100%;" />

  <Button slot="footer">确认</Button>
</Modal>

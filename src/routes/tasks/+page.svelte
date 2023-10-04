<script lang="ts">
  import { Col, Row } from 'spaper';
  import { onMount } from 'svelte';
  import type { TaskModel } from '$lib/models/task.js';
  import { TASK_STATUS } from '$lib/models/task';

	export let data;
  const { webuiAPIClient } = data;

  let taskIds: Array<string> = [];
  let st: TaskModel;

  if (webuiAPIClient) {
    onMount(async () => {
      const res = await webuiAPIClient.getTasks();
      taskIds = res.task_ids;

      if (taskIds.length > 0) {
        onTaskClick(taskIds[0]);
      }
    });
  }

  async function onTaskClick(taskId: string) {
    if (st?.id == taskId) {
      return;
    }

    const ret = await webuiAPIClient?.getTask(taskId);
    if (ret.id) {
      st = {
        id: ret.id,
        modelType: ret.model_type,
        filename: ret.filename,
        downloadUrl: ret.download_url,
        md5: ret.md5,
        ref: ret.ref,
        status: ret.status,
        statusText: ret.status_text,
        output: ret.output,
      }
    }
  }
</script>

<Row>
  <Col col="4">
    <table class="table-hover">
      <thead>
        <tr>
          <th>Task ID</th>
        </tr>
      </thead>
      <tbody>
        {#each taskIds as id}
          <tr>
            <td
              on:click={(_) => { onTaskClick(id) }}
              class={st?.id == id ? "background-secondary" : ""}
            >{id}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Col>
  <Col fill>
    <div>
      {#if !st}
        <p>空</p>
      {:else}
        <p>文件名：{st.filename}</p>
        <p>类型：{st.modelType}</p>
        <p>状态：{st.status }</p>
        <textarea
          style="width: 100%;"
          rows="20"
          class="background-primary"
        >{st.output}</textarea>
      {/if}
    </div>
  </Col>
</Row>

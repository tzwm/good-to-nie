/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
  const { webuiAPIClient } = await parent();

  let taskIds = [];
  if (webuiAPIClient) {
    const res = await webuiAPIClient.getTasks();
    taskIds = res.task_ids;
  }

  return {
    taskIds,
  }
}

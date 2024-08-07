import Bull from 'bull';

const fileQueue = new Bull('my-queue');

fileQueue.process(async (job) => {
  if (job.data.userId === undefined) {
    throw new Error('Missing userId');
  }
  if (job.data.file === undefined) {
    throw new Error('Missing file');
  }
  console.log(`Processing job ${job.id}`);
  return job.data;
});

export default fileQueue;

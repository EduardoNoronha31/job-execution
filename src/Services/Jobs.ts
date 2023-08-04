import { IJob } from "../Interfaces/Job";

function sortByDeadline(jobs: IJob[]): IJob[] {
  return jobs.sort(
    (a, b) => Date.parse(a["deadline"]) - Date.parse(b["deadline"])
  );
}

function getTotalEstimatedHours(group: IJob[] = []) {
  return group.reduce((acc, curr) => acc + curr.estimated_hours, 0);
}

function isJobWithinDeadline(job: IJob): boolean {
  const currentDate = new Date();
  const jobDeadline = new Date(job.deadline);

  const jobCompletionDate = new Date(
    currentDate.getTime() + job.estimated_hours * 60 * 60 * 1000
  );

  return jobCompletionDate <= jobDeadline;
}

function removeEmptyGroups(groups: IJob[][]): IJob[][] {
  return groups.filter((group) => group.length > 0);
}

function groupJobs(jobs: IJob[]): IJob[][] {
  const sortedJobs = sortByDeadline(jobs);

  const timeLimitForJobExecution = 8;

  let jobGroups: IJob[][] = [];
  let currentGroup: IJob[] = [];

  for (const job of sortedJobs) {
    let currentGroupHours = getTotalEstimatedHours(currentGroup);

    if (
      currentGroupHours + job.estimated_hours <= timeLimitForJobExecution &&
      isJobWithinDeadline(job)
    ) {
      currentGroup.push(job);
    } else {
      jobGroups.push(currentGroup);
      currentGroup = isJobWithinDeadline(job) ? [job] : [];
    }
  }

  if (currentGroup.length > 0) {
    jobGroups.push(currentGroup);
  }

  jobGroups = removeEmptyGroups(jobGroups);

  return jobGroups;
}

export { groupJobs };

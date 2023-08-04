import { groupJobs } from "../index";
import Jobs from "../Data/Jobs.json";

describe("groupJobs", () => {
  const jobs = JSON.parse(JSON.stringify(Jobs));
  const result = groupJobs(jobs);

  it("should respect the time limit for jobs execution", () => {
    const timeLimitForJobExecution = 8;

    for (const group of result) {
      const estimatedHours = expect(
        group.reduce((acc, curr) => acc + curr.estimated_hours, 0)
      );

      expect(estimatedHours.toBeLessThanOrEqual(timeLimitForJobExecution));
    }
  });

  it("should respect the deadline for jobs execution", () => {
    for (const group of result) {
      for (const job of group) {
        const currentDate = new Date();
        const jobDeadline = new Date(job.deadline);

        const jobCompletionDate = new Date(
          currentDate.getTime() + job.estimated_hours * 60 * 60 * 1000
        );

        expect(jobCompletionDate.getTime()).toBeLessThanOrEqual(
          jobDeadline.getTime()
        );
      }
    }
  });

  it("should not have empty groups", () => {
    for (const group of result) {
      expect(group.length).toBeGreaterThan(0);
    }
  });
});

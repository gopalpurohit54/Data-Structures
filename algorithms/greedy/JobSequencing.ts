export function jobSequencing(jobs: Array<Array<any>>, maxJobs: number): Array<any> {
    // Sort jobs based on profit in descending order
    jobs = jobs.sort((a,b) => b[2] - a[2])

    const result = new Array(maxJobs).fill(false)
    const selectedJobs = new Array(maxJobs).fill('')

    for (let i = 0; i < jobs.length; i++) {
        for(let j = jobs[i][1] - 1; j >= 0; j--) {
            if (!result[j]) {
                result[j] = true
                selectedJobs[j] = jobs[i][0]
                break
            }
        }
    }

    return selectedJobs
}
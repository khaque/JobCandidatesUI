export class Job {
    company: string;
    jobId: number;
    name: string;
    skills: string;
}

export class JobResponse {
    asyncState: any;
    creationOptions: number;
    exception: any;
    id: number;
    isCanceled: boolean;
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    isFaulted: boolean;
    status: number;
    result: Job[];
}

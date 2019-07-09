import { GenericClient } from '../comm/GenericClient';

interface CancelJobParam {
    job_id: string;
}

interface GetJobLogsParam {
    job_id: string;
    skip_lines: number;
}

interface LogLine {
    line: string;
    is_error: number;
}

interface GetJobLogsResult {
    lines: Array<LogLine>;
    last_line_number: number;
}

export default class NarrativeJobServiceClient extends GenericClient {
    static module: string = 'NarrativeJobService';

    async cancelJob(param: CancelJobParam): Promise<void> {
        await this.callFunc<[void]>('cancel_job', [param]);
    }

    async getJobLogs(param: GetJobLogsParam): Promise<[GetJobLogsResult]> {
        return await this.callFunc<[GetJobLogsResult]>('get_job_logs', [param]);
    }
}

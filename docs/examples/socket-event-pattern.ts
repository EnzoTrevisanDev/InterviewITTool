export interface ReplayEvent {
  type:
    | 'typed_character'
    | 'deleted_character'
    | 'pasted_code'
    | 'run_code';

  payload: Record<string, unknown>;

  timestamp: number;

  sessionId: string;
}
import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class SubmissionTable {
  readonly id: string;
  readonly comment: string;
  readonly userId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SubmissionTable>);
  static copyOf(source: SubmissionTable, mutator: (draft: MutableModel<SubmissionTable>) => MutableModel<SubmissionTable> | void): SubmissionTable;
}

export declare class UserTable {
  readonly id: string;
  readonly name: string;
  readonly SubmissionTables?: (SubmissionTable | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserTable>);
  static copyOf(source: UserTable, mutator: (draft: MutableModel<UserTable>) => MutableModel<UserTable> | void): UserTable;
}
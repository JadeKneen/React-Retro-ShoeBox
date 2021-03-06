// @ts-check
// @ts-ignore
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SubmissionTable, UserTable } = initSchema(schema);

export {
  SubmissionTable,
  UserTable
};
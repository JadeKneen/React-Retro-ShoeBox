import React from "react";
import { DataStore } from '@aws-amplify/datastore';
import { SubmissionTable } from './models';

function DataTable(){

    return(
        <table>
            <thead>
                <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Comment</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>1</th>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                <th>2</th>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </tbody>
            </table>
    );
}

export default DataTable;
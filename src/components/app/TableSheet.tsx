import { getSheetData, ResponseSheetData } from "@site/src/lib/axios";
import * as React from "react"
import useSWR from 'swr'

interface DataTableSheetProps {
    sheetId: string;
    sheetName: string;
    range?: string;
}

export default function TableSheet({ sheetId, sheetName, range }: DataTableSheetProps) {
    const { data, error, isLoading } = useSWR<ResponseSheetData>(
        { sheetId, sheetName, range },
        getSheetData
    );

    if (error) return <div>Error: {error.message}</div>;
    if (isLoading) return <div>Loading...</div>;

    if (data.values.length === 0) return <div>No data found.</div>;
    const sheetData = data.values

    const columns = sheetData[0].map((header, index) => {
        return {
            title: header,
            dataIndex: index.toString(),
            key: index.toString(),
        };
    });
    const dataSource = sheetData.slice(1).map((row, rowIndex) => ({
        key: rowIndex.toString(),
        ...row.reduce((acc, val, cellIndex) => ({ ...acc, [cellIndex.toString()]: val }), {}),
    }));

    return (
        <table>
            <tr>
                {columns.map((column) => (
                    <th key={column.key}>{column.title}</th>
                ))}
            </tr>
            {
                dataSource.map((dataRow) => {
                    return (
                        <tr>
                            {columns.map(column => {
                                if (column.title.toLocaleLowerCase() === "link" || column.title.toLocaleLowerCase() === "url") {
                                    return (
                                        <td key={column.key}>
                                            <a href={dataRow[column.key]} target="_blank">
                                                View
                                            </a>
                                        </td>
                                    )
                                }
                                return (<td key={column.key}>{dataRow[column.dataIndex]}</td>)
                            })}
                        </tr>
                    );
                })
            }
        </table>
    )
}

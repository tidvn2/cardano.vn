import siteConfig from '@generated/docusaurus.config';
import axios from "axios";


export interface ResponseSheetData {
    range: string,
    majorDimension: string,
    values: string[][]
}
export interface RequestSheetData {
    sheetId: string;
    sheetName: string;
    range?: string;
}
async function get(route: string) {
    return await axios
        .get(`${route}`)
        .then(({ data }) => {
            return data as ResponseSheetData;
        })
        .catch((error) => {
            throw error;
        });
}

export async function getSheetData({ sheetId, sheetName, range }: RequestSheetData): Promise<ResponseSheetData> {
    if (!sheetId) {
        throw new Error('sheetId is required');
    }
    if (!sheetName) {
        throw new Error('sheetName is required');
    }
    if (!range) {
        range = `A1:Z1000`;
    }
    const link = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?key=${siteConfig.customFields.googleApiKey}`;
    return await get(link);
}
export type CourseType = {
    id: number;
    name: string;
    content: any;
};

export type EventItem = {
    title: string;
    image: string;
    address: string;
    date: string;
};

export type RoadmapType = {
    id?: number;
    title?: string;
    description?: string;
    datetime?: string;
};

export type Video = {
    id: number;
    url: string;
    name: string;
};

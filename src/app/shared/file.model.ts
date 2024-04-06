type ContentType = {
    text: string;
    classText: string
}

export type LineType = {
    content: ContentType[]
}

export class FileModel {
    constructor (
        public file: string,
        public lines: LineType[]
    ) {}
}
import { LineType } from "./file.model";

export class TreeModel {
    constructor(
        public name: string,
        public lines: LineType[],
        public active?: boolean,
        public icon?: string,
        public color?: string,
        public children?: TreeModel[]
    ) { }
}

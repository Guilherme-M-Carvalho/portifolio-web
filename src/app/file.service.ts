// import { FileModel } from "./shared/file.model";
import { TREE_CODE } from "./shared/mock/tree-code-mock";
import { TreeModel } from "./shared/tree.model";

export class FileService{
    constructor(
        public files: TreeModel[] = TREE_CODE
    ) {}
}
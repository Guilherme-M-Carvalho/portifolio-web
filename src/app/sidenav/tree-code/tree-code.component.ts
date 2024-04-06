import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TreeModel } from '../../shared/tree.model';
import { TREE_CODE } from '../../shared/mock/tree-code-mock';
import { FileService } from '../../file.service';
import { LineType } from '../../shared/file.model';

interface ExampleFlatNode {
  expandable: boolean;
  icon?: string;
  color?: string;
  name: string;
  lines: LineType[];
  level: number;
}
@Component({
  selector: 'app-tree-code',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './tree-code.component.html',
  styleUrl: './tree-code.component.scss'
})
export class TreeCodeComponent implements OnChanges {
  private _transformer = (node: TreeModel, level: number) => {
    const res: ExampleFlatNode = {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      color: node.color,
      icon: node.icon,
      lines: node.lines,
      level: level,
    };
    return res
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private fileService: FileService) {
    this.dataSource.data = TREE_CODE;
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  handleFile(file:string, lines: LineType[]) {
    console.log(this.fileService);
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => {
    return node.expandable
  };


  transformJson(json: any) {
    return JSON.stringify(json)
  }
}

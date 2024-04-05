import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

interface FoodNode {
  name: string;
  icon: string
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    icon: "folder",
    name: 'src',
    children: [{icon: "home", name: 'Apple'}, {icon: "home", name: 'Banana'}, {icon: "home", name: 'Fruit loops'}],
  },
  {
    icon: "home", name: 'Vegetables',
    children: [
      {
        icon: "home", name: 'Green',
        children: [{icon: "home", name: 'Broccoli'}, {icon: "home", name: 'Brussels sprouts'}],
      },
      {
        icon: "home", name: 'Orange',
        children: [{icon: "home", name: 'Pumpkins'}, {icon: "home", name: 'Carrots',
          children:[      {
            icon: "home", name: 'Orange',
            children: [{icon: "home", name: 'Pumpkins'}, {icon: "home", name: 'Carrots'}],
          }]
        }],
      },
    ],
  },
];
interface ExampleFlatNode {
  expandable: boolean;
  icon: string;
  name: string;
  level: number;
}
@Component({
  selector: 'app-tree-code',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './tree-code.component.html',
  styleUrl: './tree-code.component.scss'
})
export class TreeCodeComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      level: level,
    };
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

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}

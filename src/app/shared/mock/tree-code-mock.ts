import { TreeModel } from "../tree.model";

export const TREE_CODE: TreeModel[] = [
    {
        icon: "expand_more",
        name: "Portfólio",
        children: [
            {
                icon: "expand_more",
                name: "src",
                children: [
                    {
                        name: "app",
                        children: [
                            {
                                name: "code",
                                lines: []
                            },
                            {
                                name: "home",
                                lines: []
                            },
                            {
                                name: "shared",
                                lines: []
                            },
                            {
                                name: "sidenav",
                                lines: []
                            },
                            {
                                name: "sidenav-icons",
                                lines: []
                            },
                            {
                                name: "tabs",
                                lines: []
                            },
                            {
                                name: "app.component.html",
                                icon: "code",
                                color: "icon-brown",
                                lines: []
                            },
                            {
                                name: "app.component.scss",
                                color: "icon-pink",
                                lines: []
                            },
                            {
                                icon: "TS",
                                name: "app.component.ts",
                                color: "icon-blue",
                                lines: []
                            },
                            {
                                icon: "TS",
                                name: "app.config.ts",
                                color: "icon-blue",
                                lines: []
                            },
                            {
                                icon: "TS",
                                name: "app.routes.ts",
                                color: "icon-blue",
                                lines: []
                            },
                            {
                                icon: "TS",
                                name: "routes-mock.ts",
                                color: "icon-blue",
                                lines: []
                            },
                        ],
                        lines: []
                    },
                    {
                        name: "assets",
                        lines: []
                    },
                    {
                        icon: "star",
                        color: "icon-yellow",
                        name: "favicon.ico",
                        lines: []
                    },
                    {
                        icon: "code",
                        color: "icon-brown",
                        name: "index.html",
                        lines: []
                    },
                    {
                        icon: "TS",
                        color: "icon-blue",
                        name: "main.ts",
                        lines: []
                    },
                    {
                        color: "icon-pink",
                        name: "style.scss",
                        lines: []
                    },
                ],
                lines: []
            }
        ],
        lines: []
    }
];
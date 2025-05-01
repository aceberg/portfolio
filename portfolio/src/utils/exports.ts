import { createSignal } from "solid-js";
import myAppsJSON from "../data/myapps.json";

export const [currentPage, setCurrentPage] = createSignal<string>("portfolio");

export interface AppType {
    ID: number;
    Name: string;
    Icon: string;
    Link: string;
    Screen: string;
    Tags: string[];
    Text: string;
    Stars: string;
    Created: string;
    Updated: string;
};

export const myAppsConst = assignIDs();

export const [myApps, setMyApps] = createSignal<AppType[]>(myAppsConst);


function assignIDs () {
    let apps = myAppsJSON as AppType[];
    let newApps = <AppType[]>[];

    for (let i = 0; i < apps.length; i++) {
        apps[i].ID = i;
        newApps.push(apps[i]);
    }

    return newApps;
}
import { myAppsConst, setMyApps } from "./exports";


export const filterByTag = (tag: string) => {

    setMyApps(myAppsConst.filter(app => app.Tags.includes(tag)));
};
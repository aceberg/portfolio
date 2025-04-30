import { myAppsConst, setMyApps } from "./exports";

let down = -1;
let field = "by";

export function sortByField(value: string) {

    down = - down;
    if (field === value) { field = "by" } else { field = value };

    console.log("SORT", value, down);

    let tmp = myAppsConst;
    switch (value) {
        case "name":
            tmp.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1)*down);
            break;
        case "created":
            tmp.sort((a, b) => (a.Created > b.Created ? 1 : -1)*down);
            break;
        case "updated":
            tmp.sort((a, b) => (a.Updated > b.Updated ? 1 : -1)*down);
            break;
        case "stars":
            tmp.sort((a, b) => (Number(a.Stars) > Number(b.Stars) ? 1 : -1)*down);
            break;
        default:
            tmp.sort((a, b) => a.ID > b.ID ? 1 : -1);
    }

    setMyApps([]);
    setMyApps(tmp);
}
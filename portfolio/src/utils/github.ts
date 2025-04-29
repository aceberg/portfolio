import { AppType, myAppsConst, setMyApps } from "./exports";

export async function getDataFromGithub() {

    const url = "https://api.github.com/users/aceberg/repos?per_page=100";
    const repos = await (await fetch(url)).json();

    let tmp:AppType[] = [];
    
    myAppsConst.forEach(app => {
        
        for (let i = 0; i < repos.length; i++) {
            if (repos[i].name === app.Name) {
                app.Text = repos[i].description;
                app.Stars = repos[i].stargazers_count;
                app.Created = repos[i].created_at.slice(0, 10);
                app.Updated = repos[i].updated_at.slice(0, 10);
                tmp.push(app);
                break;
            }
        }
    });

    setMyApps([]);
    setMyApps(tmp);
}
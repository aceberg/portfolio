import { createSignal } from "solid-js";

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

export const myAppsConst = <AppType[]>[
    {
        ID: 0,
        Name: "WatchYourLAN",
        Icon: "https://raw.githubusercontent.com/aceberg/WatchYourLAN/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WatchYourLAN",
        Screen: "https://raw.githubusercontent.com/aceberg/WatchYourLAN/refs/heads/main/assets/Screenshot_1.png",
        Tags: ["Go", "SolidJS", "TypeScript", "gin", "InfluxDB", "PostgreSQL", "Prometheus"],
        Stars: "5467",
    },
    {
        ID: 1,
        Name: "ExerciseDiary",
        Icon: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/ExerciseDiary",
        Screen: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/Screenshot.png",
        Tags: ["Go", "JavaScript", "gin", "Bootstrap", "Chart.js"],
        Stars: "367",
    },
    {
        ID: 2,
        Name: "WatchYourPorts",
        Icon: "https://raw.githubusercontent.com/aceberg/WatchYourPorts/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WatchYourPorts",
        Screen: "https://raw.githubusercontent.com/aceberg/WatchYourPorts/refs/heads/main/assets/Screenshot1.png",
        Tags: ["Go", "JavaScript", "gin", "Bootstrap"],
        Stars: "158",
    },
    {
        ID: 3,
        Name: "AnyAppStart",
        Icon: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/AnyAppStart",
        Screen: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/Screenshot_06.png",
        Tags: ["Go", "React", "TypeScript", "gin", "MobX", "Bootstrap"],
        Stars: "114",
    },
    {
        ID: 4,
        Name: "miniboard",
        Icon: "https://raw.githubusercontent.com/aceberg/miniboard/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/miniboard",
        Screen: "https://raw.githubusercontent.com/aceberg/miniboard/main/assets/Screenshot%202023-06-25%20at%2022-55-05%20MiniBoard%20-%20Docker.png",
        Tags: ["Go", "Bootstrap"],
        Stars: "225",
    },
    {
        ID: 5,
        Name: "BookTr",
        Icon: "https://raw.githubusercontent.com/aceberg/BookTr/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/BookTr",
        Screen: "https://raw.githubusercontent.com/aceberg/BookTr/refs/heads/main/assets/Screenshot_00.png",
        Tags: ["Go", "React", "TypeScript", "gin", "MobX", "Bootstrap"],
        Stars: "44",
    },
    {
        ID: 6,
        Name: "ForAuth",
        Icon: "https://raw.githubusercontent.com/aceberg/ForAuth/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/ForAuth",
        Screen: "https://raw.githubusercontent.com/aceberg/forauth/main/assets/Screenshot1.png",
        Tags: ["Go", "gin", "Bootstrap"],
        Stars: "14",
    },
    {
        ID: 7,
        Name: "DiaryMD",
        Icon: "https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/DiaryMD",
        Screen: "https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/Screenshot_05.png",
        Tags: ["Go", "gin", "Bootstrap", "SolidJS", "JavaScript"],
        Stars: "17",
    },
    {
        ID: 8,
        Name: "WormholeProxy",
        Icon: "https://raw.githubusercontent.com/aceberg/WormholeProxy/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WormholeProxy",
        Screen: "https://raw.githubusercontent.com/aceberg/WormholeProxy/refs/heads/main/assets/Screenshot-opt.png",
        Tags: ["Firefox Extension", "JavaScript"],
        Stars: "2",
    },
    {
        ID: 9,
        Name: "LinuxExecBot",
        Icon: "",
        Link: "https://github.com/aceberg/LinuxExecBot",
        Screen: "",
        Tags: ["Go", "telegram-bot-api"],
        Stars: "20",
    },
    {
        ID: 10,
        Name: "WMService",
        Icon: "https://raw.githubusercontent.com/aceberg/WMService/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WMService",
        Screen: "",
        Tags: ["Go", "Bootstrap"],
    },
    {
        ID: 11,
        Name: "WMService2",
        Icon: "https://raw.githubusercontent.com/aceberg/WMService2/refs/heads/main/assets/images/icon.png",
        Link: "https://github.com/aceberg/WMService2",
        Screen: "https://raw.githubusercontent.com/aceberg/WMService2/main/assets/screenshots/Screenshot_1.png",
        Tags: ["Flutter"],
    },
    {
        ID: 12,
        Name: "git-confed",
        Icon: "https://raw.githubusercontent.com/aceberg/git-confed/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/git-confed",
        Screen: "https://raw.githubusercontent.com/aceberg/git-confed/main/assets/Screenshot%202023-05-26%20at%2016-08-42%20Git%20Config%20Editor.png",
        Tags: ["Go", "Bootstrap"],
        Stars: "10",
    },
    {
        ID: 13,
        Name: "git-syr",
        Icon: "https://raw.githubusercontent.com/aceberg/git-syr/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/git-syr",
        Screen: "https://raw.githubusercontent.com/aceberg/git-syr/main/assets/Screenshot%202022-12-22%20at%2012-51-48%20Sync%20Your%20Repos.png",
        Tags: ["Go", "Bootstrap"],
        Stars: "14",
    },
    {
        ID: 14,
        Name: "HomeLists",
        Icon: "https://raw.githubusercontent.com/aceberg/HomeLists/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/HomeLists",
        Screen: "https://raw.githubusercontent.com/aceberg/HomeLists/main/assets/Screenshot%202022-11-07%20at%2022-24-17%20Home%20Lists%20-%2001-Fridge.png",
        Tags: ["Go", "Bootstrap"],
        Stars: "14",
    },
    {
        ID: 15,
        Name: "rediary",
        Icon: "https://raw.githubusercontent.com/aceberg/rediary/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/rediary",
        Screen: "https://raw.githubusercontent.com/aceberg/rediary/main/assets/Screenshot%202023-04-02%20at%2022-27-40%20Resource%20Diary.png",
        Tags: ["Go", "Bootstrap", "JavaScript", "Chart.js"],
        Stars: "14",
    },
    {
        ID: 16,
        Name: "gans",
        Icon: "https://raw.githubusercontent.com/aceberg/gans/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/gans",
        Screen: "https://raw.githubusercontent.com/aceberg/gans/main/assets/Screenshot%202023-01-23%20at%2019-34-01%20gans.png",
        Tags: ["Go", "Bootstrap"],
        Stars: "14",
    },
    {
        ID: 17,
        Name: "portfolio",
        Icon: "https://raw.githubusercontent.com/aceberg/portfolio/refs/heads/main/assets/logo.jpg",
        Link: "https://github.com/aceberg/portfolio",
        Screen: "",
        Tags: ["SolidJS", "TypeScript", "Tailwind CSS"],
    },
];

export const [myApps, setMyApps] = createSignal<AppType[]>(myAppsConst);
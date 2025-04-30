import { createSignal } from "solid-js";

export interface AppType {
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
        Name: "WatchYourLAN",
        Icon: "https://raw.githubusercontent.com/aceberg/WatchYourLAN/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WatchYourLAN",
        Screen: "https://raw.githubusercontent.com/aceberg/WatchYourLAN/refs/heads/main/assets/Screenshot_1.png",
        Tags: ["Go", "SolidJS", "TypeScript", "gin", "InfluxDB", "PostgreSQL", "Prometheus"],
        Stars: "5467",
    },
    {
        Name: "AnyAppStart",
        Icon: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/AnyAppStart",
        Screen: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/Screenshot_06.png",
        Tags: ["Go", "React", "TypeScript", "gin", "MobX", "Bootstrap"],
        Stars: "114",
    },
    {
        Name: "ExerciseDiary",
        Icon: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/ExerciseDiary",
        Screen: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/Screenshot.png",
        Tags: ["Go", "JavaScript", "gin", "Bootstrap"],
        Stars: "367",
    },
    {
        Name: "WatchYourPorts",
        Icon: "https://raw.githubusercontent.com/aceberg/WatchYourPorts/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/WatchYourPorts",
        Screen: "https://raw.githubusercontent.com/aceberg/WatchYourPorts/refs/heads/main/assets/Screenshot1.png",
        Tags: ["Go", "JavaScript", "gin", "Bootstrap"],
        Stars: "158",
    },
    {
        Name: "miniboard",
        Icon: "https://raw.githubusercontent.com/aceberg/miniboard/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/miniboard",
        Screen: "https://raw.githubusercontent.com/aceberg/miniboard/main/assets/Screenshot%202023-06-25%20at%2022-55-05%20MiniBoard%20-%20Docker.png",
        Tags: ["Go", "gin", "Bootstrap"],
        Stars: "225",
    },
    {
        Name: "BookTr",
        Icon: "https://raw.githubusercontent.com/aceberg/BookTr/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/BookTr",
        Screen: "https://raw.githubusercontent.com/aceberg/BookTr/refs/heads/main/assets/Screenshot_00.png",
        Tags: ["Go", "React", "TypeScript", "gin", "MobX", "Bootstrap"],
        Stars: "44",
    },
];

export const [myApps, setMyApps] = createSignal<AppType[]>(myAppsConst);
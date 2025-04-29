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
        Name: "ExerciseDiary",
        Icon: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/ExerciseDiary",
        Screen: "https://raw.githubusercontent.com/aceberg/ExerciseDiary/refs/heads/main/assets/Screenshot.png",
        Tags: ["Go", "JavaScript", "gin", "Bootstrap"],
        Stars: "367",
    },
    {
        Name: "AnyAppStart",
        Icon: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/logo.png",
        Link: "https://github.com/aceberg/AnyAppStart",
        Screen: "https://raw.githubusercontent.com/aceberg/AnyAppStart/refs/heads/main/assets/Screenshot_06.png",
        Tags: ["Go", "React", "TypeScript", "gin", "MobX", "Bootstrap"],
        Stars: "47",
    },
];

export const [myApps, setMyApps] = createSignal<AppType[]>(myAppsConst);
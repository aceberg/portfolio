import { myAppsConst, setMyApps } from "../../utils/exports"
import Tag from "./Tag"

function Tags() {

  const handleAll = () => {
    setMyApps([]);
    setMyApps(myAppsConst);
  }

  return (
    <div class="px-4 mt-4 text-gray-400">
      <span class="font-semibold">TAGS</span> (<a class="mytag" onClick={handleAll}>#all</a>):
      <ul class="list-disc px-6">
        <li>Backend (<Tag tag="Go" />): <Tag tag="gin" />, <Tag tag="telegram-bot-api" />, <Tag tag="InfluxDB" />, <Tag tag="PostgreSQL" />, <Tag tag="Prometheus" /></li>
        <li>Frontend: <Tag tag="JavaScript" />, <Tag tag="TypeScript" />, <Tag tag="Chart.js" />, <Tag tag="React" /> (<Tag tag="MobX" />), <Tag tag="SolidJS" />, <Tag tag="Bootstrap" />, <Tag tag="Tailwind CSS" /></li>
        <li>Other: <Tag tag="Flutter" /> (Android), <Tag tag="Firefox Extension" /></li>
      </ul>
    </div>
  )
}

export default Tags

import Tag from "./Tag"

function Tags() {

  return (
    <>
    <div class="overflow-x-auto mt-2 mb-8">
      <table class="min-w-full table-auto divide-y divide-gray-700 bg-gray-900 rounded-xl overflow-hidden">
        <thead class="bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Backend</th>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Frontend</th>
            <th scope="col" class="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">Other</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                <Tag tag="Go" />:
                <ul class="list-disc px-6">
                  <li><Tag tag="gin" />, <Tag tag="telegram-bot-api" /></li>
                  <li><Tag tag="InfluxDB" />, <Tag tag="PostgreSQL" />, <Tag tag="Prometheus" /></li>
                </ul>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <li><Tag tag="JavaScript" />, <Tag tag="TypeScript" /></li>
              <li><Tag tag="React" /> (<Tag tag="MobX" />), <Tag tag="SolidJS" /></li>
              <li><Tag tag="Bootstrap" />, <Tag tag="Tailwind CSS" /></li>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <li><Tag tag="Flutter" /> (Android)</li>
              <li><Tag tag="Firefox Extension" /></li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Tags

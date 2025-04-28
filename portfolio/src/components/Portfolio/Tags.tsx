

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
              <li>Go (gin, InfluxDB, PostgreSQL)</li>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <li>JavaScript, TypeScript</li>
              <li>React (MobX), SolidJS</li>
              <li>Bootstrap, Tailwind CSS</li>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <li>Flutter (Android)</li>
              <li>Firefox Extension</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Tags

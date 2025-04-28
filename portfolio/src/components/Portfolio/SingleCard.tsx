

function SingleCard(_props: any) {

  return (
    <>
      <div class="card">
        <h2 class="text-xl font-semibold text-white mb-4">{_props.app.Name}</h2>
        <p class="text-gray-400 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan in metus quis tincidunt.
        </p>
        <button class="inline-flex items-center font-medium text-sm text-indigo-400 hover:text-indigo-300 transition">
          Learn More →
        </button>
      </div>
    </>
  )
}

export default SingleCard

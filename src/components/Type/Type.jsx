import React from 'react'

const Type = ({typeMapped}) => {

  console.log(typeMapped);

  const typeElement = typeMapped && typeMapped.map((element) =>      <div className="card w-96 bg-info text-primary-content mt-4">
  <div className="card-body">
    <h2 className="card-title">{element.charAt(0).toUpperCase() + element.slice(1)}</h2>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>)


  return (
    <div class='ml-10'>
      <div class='text-center'>
        <h1 class='font-light'>Type</h1>
      </div>
      <div>
        {typeElement}
      </div>

    </div>
  )
}

export default Type
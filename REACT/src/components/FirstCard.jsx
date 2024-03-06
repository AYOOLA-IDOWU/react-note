import React from 'react'

const FirstCard = () => {
  return (

    <div>

<div className='container'>

    <div className='row justify-content-center'>

        <div className='col-md-2 mt-3 mx-2 custom-card border border-2 shadow-lg'>
            <p>Ask literally anything. Notion will answer. <br /> <br /> <span className='text-danger'>Learn more→</span> </p>
        </div>

        <div className='col-md-2 mt-3 mx-2 custom-card border border-2 shadow-lg'>
            <p>Wikis Centralize your knowledge. No more hunting for answers <br />.<span className='text-danger'>Learn more→</span></p>
        </div>

        <div className='col-md-2 mt-3 mx-2 custom-card border border-2 shadow-lg'>
            <p>Manage complex projects without the chaos. <br /> <span className='text-danger'>Learn more→</span></p>
        </div>

        <div className='col-md-2 mt-3 mx-2 custom-card border border-2 shadow-lg'>
            <p>Simple, powerful, beautiful. Next-gen notes & docs. <br /> <span className='text-danger'>Learn more→</span></p>
        </div>

    </div>

</div>
    </div>

  )
}

export default FirstCard
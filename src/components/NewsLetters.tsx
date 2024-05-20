

function NewsLetters() {
  return (
    <div className="mx-20 items-center">
        <div className="grid grid-cols-2 ">
            <div>
                <h1 className="text-3xl">Join the stand out team</h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div>
                <div className="space-x-3 pb-5">
                    <input type="text" placeholder="Launch" className="border"/>
                    <button>subscribe</button>
                </div>

                <div className="flex items-center pb-5 ">
                  <div>
                      <input type="checkbox" />
                  </div>
                   
                   <div>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus
                     minima laborum cupiditate maxime consectetur vitae impedit deserunt error omnis.</p>
                   </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NewsLetters
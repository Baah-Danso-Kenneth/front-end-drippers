import Style from '../../../assets/styles/style-1.jpg';


function InformationContent() {
  return (
    <div className='pt-10'>
        <div className='grid grid-cols-2 mx-10 gap-10 pb-10'>
            <div>
                 <h1 className='text-3xl mb-5'>Lorem ipsum dolor sit amet.</h1>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, explicabo iusto! Corporis qui quas reiciendis odio doloremque provident ad modi voluptates, nostrum, facere error quibusdam alias asperiores dignissimos, quae rerum temporibus et quaerat similique! Praesentium at eum quas, itaque pariatur beatae harum delectus quibusdam aliquam unde quam! Autem, modi vitae dolorum mollitia maxime et. Sequi odit non deleniti assumenda nam magnam quo, autem, molestias ipsam voluptas numquam rem adipisci repellendus voluptatibus eos error porro nobis beatae fugiat totam illum animi! Debitis in consequatur possimus rem repudiandae? Est nobis ea deleniti, ratione veritatis sit dolorum quasi adipisci expedita debitis aspernatur nemo!
                 </p>
                <div className='mt-5'>
                  <button className='border border-solid border-[#2d2d2d] p-2 w-1/2 rounded-full'>view content</button>
               </div>
            </div>

            <div>
              <img className='w-[100%] h-[500px] object-cover' src={Style} alt="style-img" />
            </div>
        </div>
    </div>
  )
}

export default InformationContent
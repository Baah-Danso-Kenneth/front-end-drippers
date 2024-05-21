import Layout from "../../components/shared/Layout"

function ForgotPassword() {
  return (
    <Layout>

<div className="flex justify-center items-center  pt-32 pb-32">

<div className="flex flex-col space-y-4">

<div className="">
    <h1 className="poppins-extrabold text-4xl capitalize">reset your password</h1>
    <p className="">Type in your email address below and we'll send </p>
</div>

<div className="border w-full h-10 flex items-center ">
    <input className="border-none outline-none pl-2" type="email" placeholder="email" />
</div>

<div className="border w-full h-10">
    <input className="border-none outline-none pl-2" type="password" placeholder="password" />
</div>

<div className="border bg-slate-700 w-full p-1 h-10 text-white  flex items-center justify-center">
    <button className="uppercase items-center">reset password</button>
</div>

</div>



</div>
    </Layout>
  )
}

export default ForgotPassword
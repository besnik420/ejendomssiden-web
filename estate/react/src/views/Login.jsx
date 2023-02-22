

export default function Login(){
    return (

        
        <div class="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
        <img class="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
        <form method="post" class="mt-8 mb-4">
            <div class="mb-4">
            <label for="userEmail" class="sr-only">Email address</label>
            <input class="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Email address" required />
            </div>
            <div>
            <label for="userEmail" class="sr-only">Password</label>
            <input class="border-solid border border-gray-400 rounded px-2 py-3" type="password" id="userPass" placeholder="Password" required />
            </div>
            <div class="my-4 flex items-center">
            <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label for="userRemember">Remember me</label>
            </div>
            <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
        </form>
        <a href="#" class="self-start">Forgot the password?</a>
        <h1 className="text-3xl font-bold underline" >Hello world! </h1>
        </div>
    )
}

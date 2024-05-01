import Logo from "@/components/snippets/Logo";
export const metadata = {
	title: "Sign In",
	description: "Sign In",
};
export default function SignInPage() {
	return (
		<main className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
				<Logo href={"/"} gap />
				{/* Card */}
				<div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
					<form className="mt-8 space-y-6" action="#">
						<div>
							<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your email
							</label>
							<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
						</div>
						<div>
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your password
							</label>
							<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
						</div>
						<div className="flex items-start">
							<div className="flex items-center h-5">
								<input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
							</div>
							<div className="ml-3 text-sm">
								<label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
									Remember me
								</label>
							</div>
							<a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
								Lost Password?
							</a>
						</div>
						<button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Login to your account
						</button>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
							Not registered? <a className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

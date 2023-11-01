
export default function Home() {
  return (
    <div className="p8 bg-slate-50 text-slate-900 h-screen flex flex-col items-center text-center dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl items-center">
        Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
        <button className="bg-sky-500 dark:bg-sky-400 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">Sign In</button>
      </div>
    </div>
  )
}

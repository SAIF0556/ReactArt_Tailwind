import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="flex flex-col text-center mt-8 mb-8  md:mb-16 ">
      <img
        className="m-auto w-44 h-44 object-contain"
        src={logo}
        alt="A canvas"
      />
      <h1 className="mt-8 font-semibold tracking-widest text-center uppercase text-amber-800 text-xl md:text-4xl font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  )
}

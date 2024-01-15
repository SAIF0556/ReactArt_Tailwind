export default function Input({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase'
  let inputClasses =
    'w-full px-3 py-2 leading-tight bg-stone-300 text-gray-700 border rounded shadow '

  if (invalid) {
    labelClasses += ' text-red-500'
    inputClasses += ' border-red-500'
  } else {
    labelClasses += ' text-stone-200'
    inputClasses += ' border-stone-200'
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  )
}

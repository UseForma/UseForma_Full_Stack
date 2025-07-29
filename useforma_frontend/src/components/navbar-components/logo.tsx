export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-blue-500"
      >
        {/* Central circle (dark background) */}
        <circle cx="12" cy="12" r="3" fill="currentColor" className="text-slate-800" />
        
        {/* Radiating rays/petals */}
        <path
          d="M12 2C12 2 13.5 4 15 4C16.5 4 18 2 18 2L17 5C17 5 15.5 7 14 7C12.5 7 11 5 11 5L12 2Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M12 2C12 2 10.5 4 9 4C7.5 4 6 2 6 2L7 5C7 5 8.5 7 10 7C11.5 7 13 5 13 5L12 2Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M22 12C22 12 20 13.5 20 15C20 16.5 22 18 22 18L19 17C19 17 17 15.5 17 14C17 12.5 19 11 19 11L22 12Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M22 12C22 12 20 10.5 20 9C20 7.5 22 6 22 6L19 7C19 7 17 8.5 17 10C17 11.5 19 13 19 13L22 12Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M12 22C12 22 13.5 20 15 20C16.5 20 18 22 18 22L17 19C17 19 15.5 17 14 17C12.5 17 11 19 11 19L12 22Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M12 22C12 22 10.5 20 9 20C7.5 20 6 22 6 22L7 19C7 19 8.5 17 10 17C11.5 17 13 19 13 19L12 22Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M2 12C2 12 4 13.5 4 15C4 16.5 2 18 2 18L5 17C5 17 7 15.5 7 14C7 12.5 5 11 5 11L2 12Z"
          fill="currentColor"
          className="text-blue-500"
        />
        <path
          d="M2 12C2 12 4 10.5 4 9C4 7.5 2 6 2 6L5 7C5 7 7 8.5 7 10C7 11.5 5 13 5 13L2 12Z"
          fill="currentColor"
          className="text-blue-500"
        />
      </svg>
      <span className="font-bold text-xl">
        Use<span className="text-blue-500">Forma</span>
      </span>
    </div>
  )
}

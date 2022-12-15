import Link from 'next/link';

export default function Header() {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-20 dark:bg-slate-800">
      <h1 className="text-3xl font-bold">Stable Diffusion web UI</h1>
      <ul className="flex justify-center items-center flex-wrap -mb-px">
      <li className="mr-2">
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500" href="/" aria-current="page">
            Home
          </Link>
        </li>
      <li className="mr-2">
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500" href="/txt2img">
            Txt2Img
          </Link>
        </li>
        <li>
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500"  href="/extras">
            Extras
          </Link>
        </li>
        <li>
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500"  href="/png_info">
            PNG Info
          </Link>
        </li>
        <li>
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500"  href="/checkpoint_merger">
            Checkopoint Merger
          </Link>
        </li>
        <li>
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500"  href="/textual_inversion">
            Textual Inversion
          </Link>
        </li>
        <li>
          <Link className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-400 hover:border-purple-500"  href="/settings">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume, Maximize2, Plus, ArrowRight, Bell, Users  } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-96 bg-zinc-950 p-2">
          <nav className='bg-zinc-900 w-70 p-4 mt-1 space-y-5 rounded-lg'>
            <a href="" className='flex items-center gap-3 text-base font-semibold text-zinc-400 hover:text-gray-100 transition ease-out duration-400'>
              <HomeIcon />
              <p className='hover:underline'>Home</p>
            </a>
            <a href="" className='flex items-center gap-3 text-base font-semibold text-zinc-400 hover:text-gray-100 transition ease-out duration-400'>
              <Search />
              <p className='hover:underline'>Search</p>
            </a>
          </nav>

          <nav className='mt-1 pt-2 p-2 bg-zinc-900 w-70 rounded-lg flex flex-col gap-3 '>
            <a href="" className='ml-4 flex items-center gap-2 text-base font-semibold text-zinc-300'>
              <Library />
              <p className='w-40 text-lg'>Your Library</p>

              <div className='flex items-center gap-6 text-zinc-200 ml-12'>
                <a href="" className='flex items-center justify-center rounded-full w-8 h-8 hover:bg-zinc-800'>
                  <Plus size={20}/>
                </a>
                <a href="" className='flex items-center justify-center rounded-full w-8 h-8 hover:bg-zinc-800'>
                  <ArrowRight size={20} />
                </a>
              </div>
            </a>

            <a href='' className='bg-zinc-800 rounded-full w-20 h-8 mt-4 ml-4 flex items-center hover:bg-zinc-700'>
              <p className='ml-4 text-sm font-semibold'>Playlists</p>
            </a>




            <div className='bg-zinc-900 ml-1'>
              <a href="" className='w-auto h-20 p-2 text-sm text-zinc-400 hover:bg-zinc-800 flex items-center rounded-md'>
                <img className='w-14 h-14 rounded ml-2' src="./Curtidas.jpg"/>
                <div className='ml-2'>
                  <strong className='text-base text-zinc-200'>Músicas Curtidas</strong>
                  <p>Playlistㆍ81 músicas</p>
                </div>
              </a>

              <a href="" className='w-auto h-20 p-2 text-sm text-zinc-400 hover:bg-zinc-800 flex items-center rounded-md'>
                <img className='w-14 h-14 rounded ml-2' src="./This-is-Sidoka.jpg"/>
                <div className='ml-2'>
                  <strong className='text-base text-zinc-200'>This is Sidoka</strong>
                  <p>PlaylistㆍSpotify</p>
                </div>
              </a>

              <a href="" className='w-auto h-20 p-2 text-sm text-zinc-400 hover:bg-zinc-800 flex items-center rounded-md'>
                <img className='w-14 h-14 rounded ml-2' src="./This-is-Ado.jpg"/>
                <div className='ml-2'>
                  <strong className='text-base text-zinc-200'>This is Ado</strong>
                  <p>PlaylistㆍSpotify</p>
                </div>
              </a>

              <a href="" className='w-auto h-20 p-2 text-sm text-zinc-400 hover:bg-zinc-800 flex items-center rounded-md'>
                <img className='w-14 h-14 rounded ml-2' src="./threedaysgrace.jpg"/>
                <div className='ml-2'>
                  <strong className='text-base text-zinc-200'>Rockzin</strong>
                  <p>Playlistㆍabismo_o</p>
                </div>
              </a>
            </div>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/30 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/30 p-1'>
              <ChevronRight />
            </button>

            <div className='flex ml-auto gap-3'>
              <a href="" className='bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-700'><Bell size={20} /></a>
              <a href="" className='bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-700'><Users size={20}/></a>
              <a href="" className='bg-zinc-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-700'><img className='w-6 rounded-full' src="perfil.jpg" alt="Foto de perfil" /></a>
            </div>
          </div>
          <h1 className='font-semibold text-3xl mt-4'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="Sidoka.jpg" />
            <strong>Sidoka Playlist</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="This-is-Sidoka.jpg" />
            <strong>This is Sidoka</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="This-is-Ado.jpg" />
            <strong>This is Ado</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="threedaysgrace.jpg" />
            <strong>Rockzin</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="DailyMix1.png" />
            <strong>Daily Mix 1</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

            <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <img className='h-16' src="DailyMix2.png" />
            <strong>Daily Mix 2</strong>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-2 invisible group-hover:visible'>
              <Play />
            </button>
            </a>

          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for abismo_o</h2>

          <div className='grid grid-cols-5 gap-4 mt-4 '>
            <a href='' className='bg-white/5 p-4 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <img className='h-44 w-44 rounded-md ml-1' src="DailyMix1.png" />
              <strong>Daily Mix 1</strong>
              <span className='text-sm text-zinc-00'>Adelitas Way, Three Days Grace, Skillet and more</span>
            </a>

            <a href='' className='bg-white/5 p-4 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <img className='h-44 w-44 rounded-md ml-1' src="DailyMix2.png" />
              <strong>Daily Mix 2</strong>
              <span className='text-sm text-zinc-00'>Adelitas Way, Three Days Grace, Skillet and more</span>
            </a>

            <a href='' className='bg-white/5 p-4 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <img className='h-44 w-44 rounded-md ml-1' src="DailyMix3.png" />
              <strong>Daily Mix 3</strong>
              <span className='text-sm text-zinc-00'>Adelitas Way, Three Days Grace, Skillet and more</span>
            </a>

            <a href='' className='bg-white/5 p-4 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <img className='h-44 w-44 rounded-md ml-1' src="DailyMix4.png" />
              <strong>Daily Mix 4</strong>
              <span className='text-sm text-zinc-00'>Adelitas Way, Three Days Grace, Skillet and more</span>
            </a>

            <a href='' className='bg-white/5 p-4 rounded-md group flex flex-col gap-2 hover:bg-white/10'>
              <img className='h-44 w-44 rounded-md ml-1' src="DailyMix5.png" />
              <strong>Daily Mix 6</strong>
              <span className='text-sm text-zinc-00'>Adelitas Way, Three Days Grace, Skillet and more</span>
            </a>
          </div>

        </main>
      </div>
      <footer className="bg-black p-2 flex items-center justify-between">
        <div className='flex items-center gap-3'>
        <img className='h-16 rounded' src="Sidoka.jpg" />
          <a href='' className='flex flex-col bg-zinc-100 h-0 w-0 mb-10'>
            <p className='hover:underline hover:text-gray-100 transition ease-out duration-400'>Mi'adama</p>
            <span className='text-xs text-zinc-400 hover:underline hover:text-gray-100 transition ease-out duration-400'>Sidoka</span>
          </a>
        </div>
        <div className='flex flex-col items-center gap-2 ml-40'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>1:27</span>

            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
            </div>

            <span className='text-xs text-zinc-400'>4:28</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <a href="" className='hover:text-gray-600'><Mic2 size={20} /></a>
          <a href=""><ListMusic size={20} /></a>
          <a href=""><Laptop2 size={20} /></a>
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={15} />
        </div>

      </footer>
    </div>
  );
}

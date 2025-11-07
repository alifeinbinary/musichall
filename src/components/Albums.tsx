export default function Albums() {
    return (
        <section aria-label="Albums" className="mx-auto max-w-6xl px-4 py-8 bg-neutral-200 my-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-center lg:text-left tracking-tight mb-6">Albums</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <article className="rounded-lg border border-slate-300 p-4 shadow-sm">
                    <div className="mb-3">
                        <h3 className="text-lg font-medium">Bird Screaming</h3>
                        <p className="text-sm text-slate-500">Released: July 28, 2023</p>
                    </div>
                    <div className="flex justify-center">
                        <iframe
                            title="Bird Screaming by Music Hall"
                            style={{ border: 0, width: '100%', maxWidth: '350px', height: '786px' }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=1113961165/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
                            seamless
                        >
                            <a href="https://musichallband.bandcamp.com/album/bird-screaming">Bird Screaming by Music Hall</a>
                        </iframe>
                    </div>
                </article>

                <article className="rounded-lg border border-slate-300 p-4 shadow-sm">
                    <div className="mb-3">
                        <h3 className="text-lg font-medium">Let The Night Disappear</h3>
                        <p className="text-sm text-slate-500">Released: December 2, 2022</p>
                    </div>
                    <div className="flex justify-center">
                        <iframe
                            title="Let The Night Disappear by Music Hall"
                            style={{ border: 0, width: '100%', maxWidth: '350px', height: '753px' }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=3814978362/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
                            seamless
                        >
                            <a href="https://musichallband.bandcamp.com/album/let-the-night-disappear">Let The Night Disappear by Music Hall</a>
                        </iframe>
                    </div>
                </article>
            </div>
        </section>
    )
}
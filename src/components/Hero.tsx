export default function Hero() {
    return (
        <section aria-label="Hero" className="relative">
            <picture>
                <source media="(min-width: 1200px)" srcSet="/hero/musichall-band_1200.webp" />
                <source media="(min-width: 960px)" srcSet="/hero/musichall-band_960.webp" />
                <source media="(min-width: 768px)" srcSet="/hero/musichall-band_768.webp" />
                <source media="(min-width: 640px)" srcSet="/hero/musichall-band_640.webp" />
                <source media="(min-width: 480px)" srcSet="/hero/musichall-band_480.webp" />
                <img src="/hero/musichall-band_768.webp" width="768" height="513" alt="Music Hall band" className="w-full max-h-[60vh] object-cover" />
            </picture>
        </section>
    )
}
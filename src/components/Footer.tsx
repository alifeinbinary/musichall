export default function Footer() {
    return (
        <footer aria-label="Footer" className="mx-auto max-w-6xl px-4 py-4 bg-neutral-200 rounded-t-lg border-slate-200">
            <p className="text-sm">Music Hall &copy; {new Date().getFullYear()} | Made by <a href="https://strangeways.dev/" target="_blank" rel="noopener">Strangeways.dev</a></p>
        </footer>
    )
}
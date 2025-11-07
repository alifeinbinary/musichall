import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../data/links'

export default function Header() {
    return (
        <header className="w-full border-b border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold tracking-tight">Music Hall</span>
                </div>
                <nav aria-label="Primary" className="flex flex-wrap items-center gap-3">
                    {links.map((link) => (
                        <a aria-label={link.name} target="_blank" href={link.href} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-lg lg:text-sm font-medium hover:text-amber-600">
                            <FontAwesomeIcon icon={link.icon} className='h-5' /> <span className="hidden lg:inline">{link.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
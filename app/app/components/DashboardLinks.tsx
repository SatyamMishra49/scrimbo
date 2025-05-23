'use client';

import { cn } from '@/lib/utils';
import { Command, Pocket } from '@deemlol/next-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const dashboardLinks = [
    {
        id: 0,
        name: 'Dashboard',
        href: '/dashboard',
        icon: Command,
    },
    {
        id: 1,
        name: 'Invoice',
        href: '/dashboard/invoices',
        icon: Pocket,
    },
];

export function DashboardLinks() {
    const pathname = usePathname();

    return (
        <>
            {dashboardLinks.map((link) => (
                <Link
                    className={cn(
                        pathname === link.href
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground',
                        'flex items-center gap-3 rounded px-3 py-2 transition-all hover:text-primary'
                    )}
                    href={link.href}
                    key={link.id}
                >
                    <link.icon className="size-4"></link.icon>
                    {link.name}
                </Link>
            ))}
        </>
    );
}

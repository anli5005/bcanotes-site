import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { forwardRef, HTMLProps, PropsWithChildren, Ref } from "react";

function FooterList({ children }: PropsWithChildren<{}>) {
    return <ul className="list-none block p-0">
        {children}
    </ul>;
}

function FooterListItem({ children }: PropsWithChildren<{}>) {
    return <li className="inline border-r contrast-more:border-r-2 px-2 first:pl-0 last:pr-0 last:border-r-0 border-slate-400 dark:border-slate-500 contrast-more:border-black dark:contrast-more:border-white">
        {children}
    </li>;
}

const FooterLink = forwardRef(({ children, ...props }: HTMLProps<HTMLAnchorElement>, ref: Ref<HTMLAnchorElement>) => {
    return <a {...props} ref={ref} className={classNames(
        "text-slate-500 contrast-more:text-ocean-700 underline decoration-slate-400 contrast-more:decoration-ocean-700 dark:decoration-slate-500 dark:contrast-more:decoration-ocean-100 dark:text-slate-400 dark:contrast-more:text-ocean-100",
        "hover:text-slate-600 hover:decoration-slate-600 active:text-slate-700 dark:hover:text-slate-300 dark:hover:decoration-slate-300 dark:active:text-slate-200"
    )}>
        {children}
    </a>
});

export function Footer({ className }: { className?: string }) {
    return <footer className={
        classNames("sm:flex sm:justify-between text-slate-400 contrast-more:text-black dark:text-slate-500 dark:contrast-more:text-white space-y-2 sm:space-y-0", className)
    }>
        <FooterList>
            <FooterListItem><FooterLink href="https://github.com/anli5005/bcanotes-site">Made with<FontAwesomeIcon className="ml-1" icon={faHeart} /></FooterLink></FooterListItem>
            <FooterListItem>&copy; 2025 Anthony Li</FooterListItem>
        </FooterList>
    </footer>;
}
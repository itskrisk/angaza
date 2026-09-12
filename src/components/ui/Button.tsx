import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'accent' | 'ghost';

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonLinkProps = BaseButtonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;

type ButtonElementProps = BaseButtonProps & {
  href?: undefined;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'>;

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, href, variant = 'primary', className, type = 'button', ...props }, ref) => {
    const classes = `${variantClasses[variant]} ${className ?? ''}`.trim();

    if (href) {
      const linkProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'>;
      return (
        <Link className={classes} ref={ref as never} to={href} {...linkProps}>
          {children}
        </Link>
      );
    }

    const buttonProps = props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'children'>;
    const buttonType = type as ButtonHTMLAttributes<HTMLButtonElement>['type'];

    return (
      <button className={classes} ref={ref as never} type={buttonType} {...buttonProps}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

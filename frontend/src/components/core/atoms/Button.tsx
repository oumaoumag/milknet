import { cn } from '@/lib/utils';

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
}) => (
  <button
    className={cn(
      'rounded-lg px-4 py-2 font-medium transition-colors',
      variant === 'primary' && 'bg-green-600 text-white hover:bg-green-700',
      variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      variant === 'outline' && 'border border-gray-300 hover:bg-gray-50',
      className
    )}
    {...props}
  />
); 
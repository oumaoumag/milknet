import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export const FormField = ({
  label,
  id,
  ...props
}: React.ComponentProps<typeof Input> & { label: string }) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} {...props} />
  </div>
); 
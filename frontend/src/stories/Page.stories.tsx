import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/Example',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplePage: Story = {
  render: () => <div className="p-4">Storybook test content</div>
}; 
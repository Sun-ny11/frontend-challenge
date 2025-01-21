import type { Meta, StoryObj } from '@storybook/react'
import { LikeButton } from './LikeButton'


const meta = {
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Component/LikeButton',
} satisfies Meta<typeof LikeButton>

export default meta
type Story = StoryObj<typeof meta>

export const BasicLikeButton: Story = {
  args: {
    isLiked:true
  },
}

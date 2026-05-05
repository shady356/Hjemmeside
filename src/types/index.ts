import type { RouteLocationRaw } from 'vue-router'

export type BadgeIcon = 'book' | 'mobile' | 'music'

export interface Project {
  title: string
  description: string
  longDescription: string
  color: string
  foreground: string
  image: string
  githubUrl: string
  websiteUrl?: string
  dialogTo?: RouteLocationRaw
  primaryLabel?: string
  badge?: string
  badgeIcon?: BadgeIcon
}

import type { LinkItemData } from '@/services/contentful/types/link.d';
import type { SocialLinkItemData } from '@/services/contentful/types/social-link.d';

export interface NavigationItemData {
  links: LinkItemData[];
  socialLinks: SocialLinkItemData[];
}

export interface NavigationContentfulData {
  navigationCollection: {
    items: NavigationContentfulItemData[];
  };
}

export interface NavigationContentfulItemData {
  linksCollection?: {
    items: NavigationContentfulLinkItemData[];
  };

  socialLinksCollection?: {
    items: NavigationContentfulSocialLinkItemData[];
  };
}

type NavigationLinkItemData = NavigationContentfulLinkItemData;

export interface NavigationContentfulLinkItemData {
  name: string;
  url: string;
}

type NavigationSocialLinkItemData = NavigationContentfulSocialLinkItemData;

export interface NavigationContentfulSocialLinkItemData {
  type: 'Instagram' | 'Twitter (X)';
  url: string;
}


export interface SpeakerConfig {
  name: String;
  session: String;
  JobTitle: String;
  socialMediaLinks: SocialMediaObject[];
  company?: String;
  image: string;
  bio?: string;
  sessionData?: string;
  isFeatured?: boolean;
}

export interface SocialMediaObject {
  link: String;
  kind: SocialMediaKind;
}

export enum SocialMediaKind {
  github = 'Github',
  linkedin = 'Linked In',
  insta = 'InstaGram',
  fb = 'Facebook',
  twitter = 'Twitter',
  Stackoverflow = 'Stackoverflow'
}


export interface TeamConfig {
    name: String;
    role: String;
    socialMediaLinks: SocialMediaObject[];
    image: string;
}

export interface SocialMediaObject {
    link: String;
    kind: SocialMediaKind;
    icon: string;
}

export enum SocialMediaKind {
    github = 'Github',
    linkedin = 'Linked In',
    insta = 'InstaGram',
    fb = 'Facebook',
    twitter = 'Twitter',
    Stackoverflow = 'Stackoverflow'
}


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
    github = 'GitHub',
    linkedin = 'LinkedIn',
    insta = 'Instagram',
    fb = 'Facebook',
    twitter = 'Twitter',
    Stackoverflow = 'Stackoverflow'
}

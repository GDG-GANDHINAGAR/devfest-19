export interface TeamConfig {
    name: String;
    contribution: String;
    desc: String;
    image: String;
    github_url : String;
    linkedin_url : String;
    fb_url : String;
    twitter_url : String;
}

export interface SocialMediaObject {
    link: String;
    kind: SocialMediaKind;
    icon: string;
}

export enum SocialMediaKind {
    github_url = 'GitHub',
    linkedin_url = 'LinkedIn',
    fb_url = 'Facebook',
    twitter_url = 'Twitter',
}

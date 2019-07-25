
export interface SpeakerConfig {
  name: String;
  session: String;
  JobTitle: String;
  socialMediaLinks: SocialMediaObject[];
  image: string;
}

export interface SocialMediaObject {
  link: String;
  kind: String;
}

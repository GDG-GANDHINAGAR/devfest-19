export interface TeamConfig {
  name: String;
  job: String;
  team: String;
  core: boolean;
  website: String;
  contribution: String;
  image: String;
  github_url?: String;
  linkedin_url?: String;
  fb_url?: String;
  twitter_url?: String;
}
export interface TeamModel {
  data: TeamConfig[];
}

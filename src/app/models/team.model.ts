export interface TeamConfig {
  name: String;
  job: String;
  team: String;
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

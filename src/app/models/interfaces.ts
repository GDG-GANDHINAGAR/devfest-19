
export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Meta {
  social: Social[];
}

export interface DesignPartner {
  url: string;
  desc: string;
  image: string;
  name: string;
}

export interface GeneralPartner {
  name: string;
  url: string;
  desc: string;
  image: string;
}

export interface VenuePartner {
  url: string;
  desc: string;
  image?: any;
  name: string;
}
export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  myCustomData?: string;
}
export interface Sponsors {
  general_partners: GeneralPartner[];
  venue_partners: VenuePartner[];
  design_partners: DesignPartner[];
}

export interface Venue {
  lon: number;
  mapslink: string;
  lat: number;
  address: string;
}

export interface EventDetails {
  speakers: string;
  tracks: string;
  attendees: string;
  sessions: string;
}

export interface EventResource {
  text: string;
  url: string;
}

export interface About {
  url: string;
  text: string;
}

export interface Footer {
  event_resources: EventResource[];
  about: About[];
}

export interface HomePageData {
  meta: Meta;
  sponsors: Sponsors;
  venue: Venue;
  event_details: EventDetails;
  footer: Footer;
  registration: boolean;
  regLink: string;
  elseString: string;
}

export interface PreviousSpeakerDetails {
  desc: string;
  company: string;
  image: string;
  github_url: string;
  fb_url?: any;
  name: string;
  twitter_url: string;
  linkedin_url: string;
  speciality: string;
  job: string;
}

export interface PreviousSpeakers {
  data: PreviousSpeakerDetails[];
}

export interface Enabled {
  value: boolean;
}

export interface Speakers {
  data?: any;
  enabled: Enabled;
}

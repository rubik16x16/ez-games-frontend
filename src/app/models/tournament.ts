import { Team } from './team';

export interface Tournament{
	name: string,
	start: string,
	end: string,
	teams: Team[]
}

import { Team } from './team';

export interface Tournament{
	id: number,
	name: string,
	start: string,
	end: string,
	teams: Team[]
}

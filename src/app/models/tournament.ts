import { Team } from './team';

export interface Tournament{
	id: number,
	name: string,
	start: string,
	end: string,
	entry: number,
	reward: number,
	type: number,
	teams: Team[]
}

import { Deserializable } from './deserializable.model';
import { Team } from './team';

export class Tournament{
	id: number;
	name: string;
	_start: Date;
	_end: Date;
	entry: number;
	reward: number;
	type: string;
	teams: Team[];
	image: string;
	num_players: number;

	constructor(input: any){

		Object.assign(this, input);
		return this;
	}

	set start(start: string | Date) {

		this._start = new Date(start);
	}

	get start(): Date {

		return this._start;
	}

	set end(end:string | Date) {

		this._end = new Date(end);
	}

	get end(): Date {

		return this._end;
	}

	get hours(): number {

		let hours = this.start.getHours() % 12;
		return hours ? hours : 12;
	}

	get ampm(): string {

		let hours = this.start.getHours();
		return hours >= 12 ? 'PM' : 'AM';
	}
}

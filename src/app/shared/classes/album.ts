import { Artist } from './artist';
import {Track} from './track';
export class Album {
    artists: Artist[];
    tracks: Track[];
    genres: string[];
    href: string;
    id: string;
    name: string;
    release_date: string;
    type: string;
    uri: string;

}

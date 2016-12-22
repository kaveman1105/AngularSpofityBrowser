import { Album } from './album';
import { Artist } from './artist';

export class Track {
    album: Album;
    artists: Artist[];
    explicit: boolean;
    href: string;
    id: string;
    name: string;
    track_number: number;
    type: string;
    uri: string;
}
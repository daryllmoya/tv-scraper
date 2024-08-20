import axios from "axios";

interface CastMember {
  id: number;
  name: string;
  birthday: string | null;
}

interface Show {
  id: number;
  name: string;
}

const getShows = async (): Promise<Show[]> => {
  const response = await axios.get<Show[]>("http://api.tvmaze.com/shows");
  return response.data;
};

const getCastForShow = async (showId: number): Promise<CastMember[]> => {
  const response = await axios.get<{ person: CastMember }[]>(
    `http://api.tvmaze.com/shows/${showId}/cast`
  );
  return response.data.map((castMember) => ({
    id: castMember.person.id,
    name: castMember.person.name,
    birthday: castMember.person.birthday,
  }));
};

export { getCastForShow, getShows };
